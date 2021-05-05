
/**
 * id : Poll ID 
 * user_id: User ID
 * question: Question Title
 * status: Status of Poll - Live or End of Poll.
 */

 export class Tenant{
    id: Number;         
    poll_id: Number;


    constructor(id: Number, poll_id: Number) { 
        this.id = id;
        this.poll_id = poll_id;
    }
}