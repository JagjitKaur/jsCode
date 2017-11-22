import React, { Component } from 'react';
import axios from 'axios'; 
export class Questions extends Component {
	constructor(props) {
    super(props);

    this.state = {
      text: []
    };
  }
        componentDidMount(){
          this.callService();
        }
        callService(){
			var self = this;
          //$.get('../data/questions.json',function(data){ console.log(data) });
		  axios.get('../data/questions.json')
  .then(function (response) {
	  console.log("data is",response.data.questions);
    self.setState({text:response.data.questions});
  })
  .catch(function (error) {
    console.log(error);
  });
        }
    render() {
        return (
            <div className="questions">
			<h1>JS interview questions</h1>
	<ul className="list-group">
          {this.state.text.map(function(listValue){
            return <li className="list-group-item">{listValue}</li>;
          })}
        </ul>
            </div>
        );
    }
}

export default Questions;