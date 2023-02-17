import { Module, forwardRef } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { AsaasService } from './../asaas/asaas.service';
import { AsaasModule } from './../asaas/asaas.module';

@Module({
  imports: [forwardRef(() => AsaasModule)],
  controllers: [ClientesController],
  providers: [ClientesService, AsaasService]
})
export class ClientesModule {}
