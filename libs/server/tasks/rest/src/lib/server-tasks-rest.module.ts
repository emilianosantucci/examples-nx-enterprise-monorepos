import { Module } from '@nestjs/common';
import { ServerTaskRestController } from 'libs/server/tasks/rest/src/lib/server-task-rest.controller';
import { ServerTaskRestService } from 'libs/server/tasks/rest/src/lib/server-task-rest.service';

@Module({
  controllers: [ServerTaskRestController],
  providers: [ServerTaskRestService],
  exports: [],
})
export class ServerTasksRestModule {}
