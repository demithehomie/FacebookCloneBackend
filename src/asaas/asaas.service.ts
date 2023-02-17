import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { CreateAsaaDto } from './dto/create-asaa.dto';
import { UpdateAsaaDto } from './dto/update-asaa.dto';

@Injectable()
export class AsaasService {
  private readonly apiUrl = 'https://private-anon-90c8a809a7-asaasv3.apiary-mock.com/api/v3/';
  private readonly apiKey = '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNTA4OTE6OiRhYWNoX2JkMGY4MmYxLTc0MTYtNGI3YS05NDViLTUzMzQ2YzRlMDViMg==';
  private readonly apiSecret = 'sua-chave-secreta';

  create(createAsaaDto: CreateAsaaDto) {
    return 'This action adds a new asaa';
  }

  findAll() {
    return `This action returns all asaas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asaa`;
  }

  update(id: number, updateAsaaDto: UpdateAsaaDto) {
    return `This action updates a #${id} asaa`;
  }

  remove(id: number) {
    return `This action removes a #${id} asaa`;
  }

  async criarCliente(nome: string, email: string): Promise<any> {
    const response = await axios.post(
      `${this.apiUrl}/customers`,
      {
        name: nome,
        email: email,
      },
      {
        headers: {
          'access_token': this.apiKey,
          'secret_key': this.apiSecret,
        },
      },
    );
    return response.data;
  }

}
