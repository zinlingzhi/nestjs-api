import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollsModule } from './polls/polls.module';
import { PollAnswersModule } from './poll_answers/poll_answers.module';
import { TenantsModule } from './tenants/tenants.module';

@Module({
  imports: [PollsModule, PollAnswersModule, TenantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
