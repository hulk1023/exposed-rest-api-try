import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import {
  Transport,
  ClientsModule,
} from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RegistryService_PKG',
        transport: Transport.GRPC,
        options: {
          package: 'registry',
          protoPath: join(__dirname, 'models/proto/RegistryService.proto'),
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
