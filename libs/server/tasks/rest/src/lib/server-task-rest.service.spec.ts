import { Test, TestingModule } from '@nestjs/testing';
import { ServerTaskRestService } from 'libs/server/tasks/rest/src/lib/server-task-rest.service';

describe('ServerTaskRestServiceService', () => {
  let service: ServerTaskRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerTaskRestService],
    }).compile();

    service = module.get<ServerTaskRestService>(
      ServerTaskRestService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
