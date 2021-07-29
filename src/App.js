import React,{Component} from 'react';
import Header from "./components/Header";
import Movies from './components/Movie/Movies';



export default class App extends Component{
  constructor(){
    super();
    this.state = {
      title:"Movie Card"
    };
  }

  render(){
    return(
      <div>
        <Header title={this.state.title}/>
        <div className="mt-6">
          <Movies/>
        </div>
      </div>
    );
  }
}