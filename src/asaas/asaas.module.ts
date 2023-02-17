import { Module, forwardRef } from '@nestjs/common';
import { AsaasService } from './asaas.service';
import { AsaasController } from './asaas.controller';
import { ClientesController } from 'src/clientes/clientes.controller';
import { ClientesService } from './../clientes/clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './../clientes/clientes.module';

@Module({
  imports: [forwardRef(() => ClientesModule)],
  controllers: [AsaasController, ClientesController],
  providers: [AsaasService, ClientesService]
})
export class AsaasModule {}
