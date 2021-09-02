import React, {Component} from "react"
import { connect } from "react-redux"
import {Link } from "react-router-dom"
import {removeId} from "../action/user"
class NevBar extends Component {

    logaute=()=>{
        this.props.removeId(null)
    }
    render (){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/dashporder" className="navbar-brand">dashporder</Link>
                
                    <Link to="/add" className="navbar-brand">add question</Link>
                
                    <Link to="/user" className="navbar-brand">user</Link>
                    <Link to="/login" className="navbar-brand"><button onClick={this.logaute}> x</button></Link>

                </div>
            </nav>
        )
    }
}
export default connect(null,{removeId})(NevBar)