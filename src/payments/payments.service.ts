import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AsaasService } from 'src/asaas/asaas.service';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {

  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
    private readonly asaasService: AsaasService,
  ) {}

  async createCustomer(nome: string, email: string): Promise<Cliente[]> {
    const customer = await this.asaasService.criarCliente(nome, email);
    const newCustomer = this.clienteRepository.create(customer);
    return this.clienteRepository.save(newCustomer);
  }


  async create(createPaymentDto: CreatePaymentDto): Promise<Cliente> {
    const newPayment = this.clienteRepository.create(createPaymentDto);
    return this.clienteRepository.save(newPayment);
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async findOne(id: string): Promise<Cliente> {
    return await this.clienteRepository.findOne(id);
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<Cliente> {
    const payment = await this.clienteRepository.findOne(id);
    if (!payment) {
      return null;
    }
    const updatedPayment = this.clienteRepository.merge(payment, updatePaymentDto);
    return this.clienteRepository.save(updatedPayment);
  }

  async remove(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
