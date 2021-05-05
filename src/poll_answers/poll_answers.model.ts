
/**
 * id : Poll Answer ID 
 * user_id: User ID
 * poll_id: Poll ID
 * answer: answer about poll_id's question
 * date: answer date. (this is reference for latest answer)
 * result: True or False for Answer
 */

 export class PollAnswer{
    id: Number;         
    user_id: Number;
    poll_id: Number;
    answer: string;
    createdDate: string;

    constructor(id: Number, user_id: Number, poll_id: Number, answer: string, date: string) { 
        this.id = id;
        this.user_id = user_id;
        this.poll_id = poll_id;
        this.answer = answer;
        this.createdDate = date;
    }
}