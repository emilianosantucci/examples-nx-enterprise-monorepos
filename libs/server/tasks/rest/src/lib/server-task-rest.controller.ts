import { Controller, Get } from "@nestjs/common";
import { ServerTaskRestService } from "libs/server/tasks/rest/src/lib/server-task-rest.service";

@Controller('server-task-rest')
export class ServerTaskRestController {

  constructor(private readonly service: ServerTaskRestService) {
  }

  @Get()
  getData() {
    return this.service.getData();
  }
}
