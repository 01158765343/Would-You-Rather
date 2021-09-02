import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter ,Route} from "react-router-dom"
import Vote from "./vote"
import  {_saveQuestionAnswer} from '../_DATA'
import { Voteqid } from "../action/user"
class UnAnswers extends Component {
    state={
        id:""
    }
    vote=(e,id)=>{
        e.preventDefault()
        console.log(id)
        this.setState({id})
        this.props.Voteqid(id)
        this.props.history.push(`/dashporder/unanswers/${id}`)
    }
    render (){
        const {questions,User ,myid}=this.props
        return (
            <div>
                <ul>
                    {
                        myid.map((x)=>(
                            <li key={x}>
                                <div>{questions[x].optionOne.text}</div>
                                <div>{questions[x].optionTwo.text}</div>
                                <button onClick={(e)=>this.vote(e,x)}>vote</button>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        )
    }
}

function mapStateToProps ({questions, User} , props){
    const {id}=props
    let idAnswer =[];
    let idqustion=[];
    let myid =[]
    Object.keys(User[id].answers).map((x)=>{
        idAnswer.push(x)
    })
    Object.keys(questions).map((x)=>{
        idqustion.push(x)
    })
    idqustion.filter((x)=>{
        if(idAnswer.indexOf(x)===-1 ){
            myid.push(x)
        }
    })
    return {
        questions,
        User,
        myid,
    }
}

export default withRouter(connect (mapStateToProps,{Voteqid})(UnAnswers))