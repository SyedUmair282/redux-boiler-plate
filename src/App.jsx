import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { set_data } from './store/action';

class App extends React.Component{
  render(){
    
    return (
      <div className="App">
        <h1>Chat App</h1>
        <button onClick={()=>this.props.set_data("pakistan","New York")}>get</button>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
  
}
const mapstateToProps=(state)=>({
  name:[state.khan,<br/>,state.name,<br/>,state.email,<br/>,state.country,<br/>,state.new,<br/>,state.umair]
})
const mapDispatchToProps=(dispatch)=>({
  set_data:(e,d)=>dispatch(set_data(e,d))
})
export default connect(mapstateToProps,mapDispatchToProps)(App);
