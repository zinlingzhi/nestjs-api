
/**
 * id : Poll ID 
 * user_id: User ID
 * question: Question Title
 * status: Status of Poll - Live or End of Poll.
 */

export class Poll{
    id: Number;         
    user_id: Number;
    question: string;
    status: boolean;


    constructor(id: Number, user_id: Number, question: string, status: boolean) { 
        this.id = id;
        this.user_id = user_id;
        this.question = question;
        this.status = status;
    }
}