import React ,{Component} from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {addId} from "../action/user"

class signin extends Component{

    state ={
        id:null
    }
    login=(e)=>{
        e.preventDefault()
            // alert("plesa selact usar")
            
        console.log("ss",this.state.id)
        this.props.addId(this.state.id)
        this.props.history.push("/dashporder/unanswers")
        
    }
    changState =(e)=>{
        this.setState({id:e.target.value})
        console.log(this.state.id)
    }
    render (){
        console.log(this.state.id)
        const {user }=this.props
        return (
            <div className="conteniner">
                <h1 className="signin">sign in </h1>
                <form className=" cont" onSubmit={this.login}>
                    
                    <select className="select" onClick={(e)=>this.changState(e) } name="selct">
                        <option  default value="null"></option>
                        {Object.keys(user).map((x)=>(
                                <option value={user[x].id}
                                 key={user[x].id}>{user[x].name}</option>
                            ))}
                    </select>
                    <input className="btn" htmlFor="selct" type="submit" value="login"></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps=({User})=>{

    return {
        user:User
    }
}
export default withRouter(connect(mapStateToProps,{addId})(signin))