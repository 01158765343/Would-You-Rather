import React, { Component } from "react"
import { Route } from "react-router"
import privet from "./privet"
import ProtectedRoute from "./ProtectedRoute"
import Aapp from "./app"
class Api extends Component{

    render (){
        return(
            <div>
                <Route path='/xx' component={privet} />
                <ProtectedRoute component={Aapp} />
            </div>
        )
    }
}
export default Api