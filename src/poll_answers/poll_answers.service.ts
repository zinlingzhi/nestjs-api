import { Injectable } from "@nestjs/common";
import { PollAnswer } from "./poll_answers.model";


@Injectable()
export class PollAnswersService{
    createPollAnswer(id: Number, user_id: Number, poll_id: Number, answer: string){
        const date = new Date().toString();
        const newPoll = new PollAnswer(id, user_id, poll_id, answer, date);
        // Insert the Poll into Database...

        return id;

    }

    updatePollAnswer(id: Number, user_id: Number, poll_id: Number, answer: string){
        
        const date = new Date().toString();
        const updatePoll = new PollAnswer(id, user_id, poll_id, answer, date);
        // Update the  Poll from Database by ID...

        return id;
    }

    searchResult(poll_id: Number){

    }

    deletePollAnswer(id: Number){
        
    }





}