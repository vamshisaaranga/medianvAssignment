import { Component } from "react";
import Home from "./Components/Home";
import ReactContext from "./Components/Context/reactContext"
import './App.css';

class App extends Component {
  state = {activeTab : "BID"}

  clickedTheTab = (tabName) => {
    this.setState({activeTab : tabName})
  } 

  render(){
    const {activeTab} = this.state
    return (
      <ReactContext.Provider value={{activeTab,clickedOnTab : this.clickedTheTab}}>
          <Home/>

      </ReactContext.Provider>
      
    )
  }
}

export default App;
