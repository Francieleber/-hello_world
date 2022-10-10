import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  helloWorld():string{
    return this.appService.HelloWorld();
  }
  @Get('/BSM')
  BSM():string{
    return this.appService.BSM();
  }
  @Get('/Objetivos')
  objetivos():string{
    return this.appService.Objetivos();
  }
}
