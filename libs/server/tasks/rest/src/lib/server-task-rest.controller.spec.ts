import { Test, TestingModule } from '@nestjs/testing';
import { ServerTaskRestController } from 'libs/server/tasks/rest/src/lib/server-task-rest.controller';

describe('ServerTaskRestControllerController', () => {
  let controller: ServerTaskRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerTaskRestController],
    }).compile();

    controller = module.get<ServerTaskRestController>(
      ServerTaskRestController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
