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
import ProtectedRoute from "../ProtectedRoute"
import Vote from "./vote"
import  {_saveQuestionAnswer} from '../_DATA'
import Signin from "./signin"
import { addId ,loginA } from "../action/user"

class AllApp extends Component{

    state ={
        id:""
    }
    userQ=(e,id)=>{
        e.preventDefault()
        this.props.history.push(`/tweet/${id}`)
    }
    login=(e)=>{
        e.preventDefault()
        // if (this.state.id ===null){
            // alert("plesa selact usar")
            
        // }else {
        this.props.loginA()
        this.props.history.push(`/dashporder/unanswers`)
        // }
    }
    onupdeat=(e)=>{
        console.log("e",e.target.value)
        this.setState({id:e.target.value})
        console.log("e",this.state.id)
        this.props.addId(e.target.value)
    }
    render (){
        const {user}=this.props

        console.log("b",this.props.user)
        return(
            <div>
                
                    <NevBar />
                    
                    <ProtectedRoute path="/dashporder" component={Dashporder} />
                    <ProtectedRoute path="/user" component={User} />
                    <ProtectedRoute path="/add" component={Add}  />
                    <ProtectedRoute exact path="/dashporder/unanswers" render={()=>(
                        <UnAnswers id ={this.props.id} />
                    )} />
                    <ProtectedRoute path="/dashporder/questionAnsers" render={()=>(
                        <QuestionAnswer id ={this.props.id} />
                    )} />
                    <Route path="/login"  render={()=>(
                        <Signin
                        onupdeat={this.onupdeat}
                        login={this.login} />
                    )} />
                    <Redirect  to="/login" />
                    
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
        qid:state.rootId.qid,
        
    }
}
export default withRouter(connect(mapStateToProps,{addId ,loginA})(AllApp))