import React,{Component} from "react"
import {Link, withRouter} from  "react-router-dom"
class Dashporder extends Component {

    userQ=(e)=>{
        e.preventDefault()
        this.props.history.push(`/dashporder/unanswers`)
    }

    userAnser=(e)=>{
        e.preventDefault()
        this.props.history.push(`/dashporder/questionAnsers`)
    }

    render (){
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="eldeeb" className="navbar-brand">
                        <button onClick={this.userQ}>unanswer question</button></Link>
                
                    <Link to="add-question" className="navbar-brand">
                        <button onClick={this.userAnser}>qustion answer</button></Link>
                </div>
            </nav>

            </div>
        )
        
    }
}


export default withRouter(Dashporder)