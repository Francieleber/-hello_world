import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  HelloWorld():string{
    return 'Hello World';
  }
  BSM():string{
    return 'Responsabilidade pessoal<br>orientaçao ao futuro<br>trabalho em equipe<br>comunicaçao<br>persistencia<br>proatividade<br>atençao aos detalhes <br>mentalidade de crescimento';
  }
Objetivos():string{
  return'NestJs';
}
}
