import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';


@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 4000,
      }
    });
  }

  public RegisterNumber(category: string): Promise<number> {
    var pattern = {action:'seqence'}
    return this.client.send<number, string>(pattern, category).toPromise();
  }  

  public ListRegister(): Promise<any> {
    var pattern = {action:'list-sequence'}
    return this.client.send<any, any>(pattern, '').toPromise();
  }  
}
