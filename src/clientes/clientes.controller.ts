import { Controller, Post, Body } from '@nestjs/common';
import { AsaasService } from 'src/asaas/asaas.service';

@Controller('customers')
export class ClientesController {
  constructor(private readonly asaasService: AsaasService) {}

  @Post()
  async criarCliente(
    @Body('nome') nome: string,
    @Body('email') email: string,
  ): Promise<any> {
    const response = await this.asaasService.criarCliente(nome, email);
    return response;
  }
}
