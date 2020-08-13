import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { RegisterNumber } from './models/RegisterNumber';
import { RegistryList } from './models/RegistryList';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('register')
  async register(@Query('category') category): Promise<string> {
    let seq = await this.receiveRegister(category).toPromise();
    return `your register number is ${seq.sequence}, please be patient, thank you!`;
  }

  private receiveRegister(category: string): Observable<RegisterNumber> {
    return this.appService.RegisterNumber(category);
  }


  @Get('list')
  list(): Observable<RegistryList> {
    return this.appService.ListRegister();
  }
}
