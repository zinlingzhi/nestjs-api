import { Injectable } from "@nestjs/common";
import { Poll } from "./polls.model";

@Injectable()
export class PollsService{
    createPoll(id: Number, user_id: Number,  question: string, status: boolean){
        const newPoll = new Poll(id, user_id, question, status);
        // Insert the Poll into Database...

        return id;
    }

    updatePoll(id: Number, user_id:Number, question: string, status: boolean){
        // Update the  Poll from Database by ID...
        const updatePoll = new Poll(id, user_id, question, status);

        return id;
    }

    deletePoll(id: Number){
       
    }
}