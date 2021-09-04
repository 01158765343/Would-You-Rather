import {UserDate ,questionsDate ,REMOV_ID,Add_ID, LOGIN} from "../action/type"
import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import {AddVote} from "./addVote"

function User(state={}, action ){


    switch(action.type ){
        case questionsDate  :
            let stat =action.date
            console.log(stat)
            return stat

        default :
            return state
    }

}



function questions(state={}, action ){


    switch(action.type){
        case UserDate :
            let a= action.date
            return a

        default :
            return state
    }

}

function rootId (state={},action){
    switch(action.type){
        case Add_ID :
            let a ={...state}
            a.id=action.id
            return a
        case  LOGIN :
            let l={...state}
            l.loggedIn=true
            return l

        case REMOV_ID :
            let r = {...state}
            r.loggedIn=false
            r.id=action.id
            return r

        default :
            return state
    }
}

let rootReducer= combineReducers(
    {
        User,
        questions,
        rootId,
        AddVote,
        loadingBar: loadingBarReducer,
    }
)


// let rootReducer =Date()
export default rootReducer