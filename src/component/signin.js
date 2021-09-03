import React ,{Component} from "react"
import { connect } from "react-redux"
import {addId} from "../action/user"

class signin extends Component{

    state ={
        id:null
    }
    login=(e)=>{
        e.preventDefault()
        if (this.state.id ===null){
            alert("plesa selact usar")
            
        }else {
        this.props.addId(this.state.id)
        }
    }
    render (){
        console.log(this.state.id)
        const {user }=this.props
        return (
            <div className="conteniner">
                <h1 className="signin">sign in </h1>
                <form className=" cont" onSubmit={this.login}>
                    
                    <select className="select" onClick={(e)=>this.setState({id:e.target.value}) } name="selct">
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
export default connect(mapStateToProps,{addId})(signin)