import { Module } from "@nestjs/common";
import { ServerTasksRestModule } from "@solunion-nest/tasks";
import { AppController } from "apps/server/tasks/src/app/app.controller";
import { AppService } from "apps/server/tasks/src/app/app.service";

@Module({
  imports: [ServerTasksRestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
