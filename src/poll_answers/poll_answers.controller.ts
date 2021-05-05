import { Controller, Post, Body, Put, Delete } from '@nestjs/common';
import { PollAnswersService } from './poll_answers.service';

@Controller('polls')
export class PollAnswersController {
    constructor(private readonly pollAnswersService: PollAnswersService){}
    @Post()
    createPollAnswer(
        @Body('id') id: Number,
        @Body('user_id') user_id: Number,
        @Body('poll_id') poll_id: Number,
        @Body('answer') answer: string,
    ) : any {
        this.pollAnswersService.createPollAnswer(id, user_id, poll_id, answer);
    }

    @Put()
    updatePollAnswer(
        @Body('id') id: Number,
        @Body('user_id') user_id: Number,
        @Body('poll_id') poll_id: Number,
        @Body('answer') answer: string,
    ) : any {
        this.pollAnswersService.updatePollAnswer(id, user_id, poll_id, answer);
    }

    @Delete()
    deletePollAnswer(
        @Body('id') id: Number
    ): any {
        this.pollAnswersService.deletePollAnswer(id);
    }
}