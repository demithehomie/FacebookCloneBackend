import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PostsService } from './posts/posts.service';
import { PaymentsModule } from './payments/payments.module';
import { AsaasModule } from './asaas/asaas.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [UsersModule, PostsModule, PaymentsModule, AsaasModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
