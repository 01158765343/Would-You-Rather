import React ,{Component} from "react"
import {connect} from "react-redux"
import { BrowserRouter as Router, Route ,Redirect, Switch, withRouter} from 'react-router-dom'
import NevBar from "./nevBar"
import User from "./user"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashporder from "./dashporder"
import Add from "./add"
import QuestionAnswer from "./questionAnswer"
import UnAnswers from "./unanswers"
import Privet from "./privet"
import ProtectedRoute from "./ProtectedRoute"
import Vote from "./vote"
import  {_saveQuestionAnswer} from '../_DATA'

class Aapp extends Component{


    userQ=(e,id)=>{
        e.preventDefault()
        this.props.history.push(`/tweet/${id}`)
    }
    render (){
        const {user}=this.props

        console.log("b",this.props.user)
        return(
            <div>
                
                    <NevBar />
                    {/* <Switch> */}
                    <ProtectedRoute path="/dashporder" component={Dashporder} />
                    <ProtectedRoute path="/user" component={User} />
                    <ProtectedRoute path="/add" component={Add}  />
                    <ProtectedRoute exact path="/dashporder/unanswers" render={()=>(
                        <UnAnswers id ={this.props.id} />
                    )} />
                    <ProtectedRoute path="/dashporder/questionAnsers" render={()=>(
                        <QuestionAnswer id ={this.props.id} />
                    )} />
                    <Route path="/login" component={Privet} />
                    <Redirect  to="/login" />
                    {/* </Switch> */}
                    <ProtectedRoute  path='/dashporder/unanswers/:id' render={()=>(
                    <Vote id={this.props.qid}/>
                    )} />

            </div>
        )
    }
}

function mapStateToProps(state ,props) {
    let c= []
    // if(state.User.johndoe === true){
       Object.keys(state.User).map((x)=>{
           c.push(x)
       })
    // }
    
    let b = c[0]
    return {
        user : b  ,
        id:state.rootId.id,
        qid:state.AddVote.qid
    }
}
export default connect(mapStateToProps,null)(Aapp)