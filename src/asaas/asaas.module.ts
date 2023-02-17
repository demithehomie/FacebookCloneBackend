import { Module } from '@nestjs/common';
import { AsaasService } from './asaas.service';
import { AsaasController } from './asaas.controller';
import { ClientesController } from 'src/clientes/clientes.controller';

@Module({
  controllers: [AsaasController, ClientesController],
  providers: [AsaasService]
})
export class AsaasModule {}
