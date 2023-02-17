import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsaasService } from './asaas.service';
import { CreateAsaaDto } from './dto/create-asaa.dto';
import { UpdateAsaaDto } from './dto/update-asaa.dto';

@Controller('asaas')
export class AsaasController {
  constructor(private readonly asaasService: AsaasService) {}

  @Post()
  create(@Body() createAsaaDto: CreateAsaaDto) {
    return this.asaasService.create(createAsaaDto);
  }

  @Get()
  findAll() {
    return this.asaasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asaasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsaaDto: UpdateAsaaDto) {
    return this.asaasService.update(+id, updateAsaaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asaasService.remove(+id);
  }

  
}
