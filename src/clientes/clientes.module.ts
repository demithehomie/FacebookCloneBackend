import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { AsaasService } from 'src/asaas/asaas.service';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService, AsaasService]
})
export class ClientesModule {}
