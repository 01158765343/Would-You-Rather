import React ,{Component} from "react"
import {connect} from "react-redux"


class CreateQS extends Component{

    render (){
        console.log("a",this.props.prop)
        const {optionOne,optionTwo}=this.props
        return (
            <div>
                <h1> create a new question </h1>
                <div>
                    <h1>would you rether</h1>
                    <form>
                        <input type="teaxt" placeholder="rether 1" />
                        <input type="teaxt" placeholder="rether 2" />
                        <input type="submit" value="add question" />
                    </form>


                    { <div>
                        <h1>{optionOne}</h1>
                        <h1>{optionTwo}</h1>
                    </div>}
                </div>
            </div>
        )
    }
} 

function mapStateToProps({questions,User} ,props) {
    // const  { id } = props.match.params;
    const a =props.id
    return {
        user :User,
        prop:props  ,
        optionOne: !questions[a]
        ? []
        : questions[a].optionOne.text,
        optionTwo: !questions[a]
        ? []
        :questions[a].optionTwo.text

    }
}
export default connect(mapStateToProps,null)(CreateQS)