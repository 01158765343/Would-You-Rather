import React ,{Component} from "react"
import {connect} from "react-redux"
import CreateQS from "./createQS"
import { BrowserRouter as Router, Route ,withRouter} from 'react-router-dom'

class Nev extends Component{
    state={
        id:"",
    }

    userQ=(e,id)=>{
        e.preventDefault()
        this.props.history.push(`/${id}`)
        this.setState({id})
    }
    render (){
        const {user}=this.props

        console.log("user",this.props.user)
        return(
            <div>

                {Object.keys(user).map((a)=>{
                return(<button onClick={(e)=>{this.userQ(e,a)}} key={a}>{user[a].author}</button>)
                })
            }
                <Route path="/:id" render={()=>(
                    <CreateQS 
                    id={this.state.id}
                    />
                )}  />
                
            </div>
        )
    }
}

function mapStateToProps(state ,props) {
    return {
        user :state.questions,
        
    }
}
export default withRouter(connect(mapStateToProps,null)(Nev))





