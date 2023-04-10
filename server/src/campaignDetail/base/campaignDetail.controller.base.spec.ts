import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CampaignDetailController } from "../campaignDetail.controller";
import { CampaignDetailService } from "../campaignDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bought: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  hoursMinutesSeconds: new Date(),
  id: "exampleId",
  interactionRate: 42,
  redeemed: 42,
  saved: 42,
  totalSales: 42,
  updatedAt: new Date(),
  websiteTraffic: 42,
};
const CREATE_RESULT = {
  bought: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  hoursMinutesSeconds: new Date(),
  id: "exampleId",
  interactionRate: 42,
  redeemed: 42,
  saved: 42,
  totalSales: 42,
  updatedAt: new Date(),
  websiteTraffic: 42,
};
const FIND_MANY_RESULT = [
  {
    bought: 42,
    createdAt: new Date(),
    description: "exampleDescription",
    hoursMinutesSeconds: new Date(),
    id: "exampleId",
    interactionRate: 42,
    redeemed: 42,
    saved: 42,
    totalSales: 42,
    updatedAt: new Date(),
    websiteTraffic: 42,
  },
];
const FIND_ONE_RESULT = {
  bought: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  hoursMinutesSeconds: new Date(),
  id: "exampleId",
  interactionRate: 42,
  redeemed: 42,
  saved: 42,
  totalSales: 42,
  updatedAt: new Date(),
  websiteTraffic: 42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("CampaignDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CampaignDetailService,
          useValue: service,
        },
      ],
      controllers: [CampaignDetailController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /campaignDetails", async () => {
    await request(app.getHttpServer())
      .post("/campaignDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        hoursMinutesSeconds: CREATE_RESULT.hoursMinutesSeconds.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /campaignDetails", async () => {
    await request(app.getHttpServer())
      .get("/campaignDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          hoursMinutesSeconds:
            FIND_MANY_RESULT[0].hoursMinutesSeconds.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /campaignDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/campaignDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /campaignDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/campaignDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        hoursMinutesSeconds: FIND_ONE_RESULT.hoursMinutesSeconds.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /campaignDetails existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/campaignDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        hoursMinutesSeconds: CREATE_RESULT.hoursMinutesSeconds.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/campaignDetails")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
