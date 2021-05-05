import { Controller, Post, Put, Delete, Body } from '@nestjs/common';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
    constructor(private readonly pollsService: PollsService){}
    @Post()
    createPoll(
        @Body('id') id: Number,
        @Body('user_id') user_id: Number,
        @Body('question') question: string,
        @Body('status') status: boolean
    ) : any {
        this.pollsService.createPoll(id, user_id,  question, status);
    }

    @Put()
    updatePollAnswer(
        @Body('id') id: Number,
        @Body('user_id') user_id: Number,
        @Body('question') question: string,
        @Body('status') status: boolean
    ) : any {
        this.pollsService.createPoll(id, user_id, question, status);
    }

    @Delete()
    deletePoll(
        @Body('id') id: Number
    ): any {
        this.pollsService.deletePoll(id);
    }
}