import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import {
  ClientGrpc,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { IRegisterService } from './models/IRegisterService';
import { RegisterNumber } from './models/RegisterNumber';
import { RegistryList } from './models/RegistryList';


@Injectable()
export class AppService implements OnModuleInit{
  private registryService: IRegisterService;

  constructor(@Inject('RegistryService_PKG') private client: ClientGrpc) {}

  onModuleInit() {
    this.registryService = this.client.getService<IRegisterService>('RegistryService');
  }

  public RegisterNumber(category: string): Observable<RegisterNumber> {
    var data = { category: category}
    return this.registryService.sequenceNumber(data);
  }  

  public ListRegister(): Observable<RegistryList> {
    return this.registryService.listSequence(null);
  }  
}
