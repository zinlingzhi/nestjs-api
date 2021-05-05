import { Module } from '@nestjs/common';
import { PollAnswersController } from './poll_answers.controller';
import { PollAnswersService } from './poll_answers.service';

@Module({
  imports: [],
  controllers: [PollAnswersController],
  providers: [PollAnswersService],
})
export class PollAnswersModule {}