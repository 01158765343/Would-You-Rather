import { Add_ID, ADD_VTOE, LOGIN, REMOV_ID, UserDate } from "./type";


export function user(date){
    return{
        type:UserDate,
        date
    }

}

export function addId (id) {
    return {
        type :Add_ID,
        id,
    }
}
export function removeId(id){
    return {
        type:REMOV_ID,
        id,
    }
}


export function Voteqid (qid){
    return {
        type:ADD_VTOE,
        qid
    }
}

export function logg (){
    return {
        type:LOGIN
    }
}