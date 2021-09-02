import { questionsDate } from "../reducer/type";

export function questions (date){
    
    return {
        type:questionsDate,
        date
    }
}