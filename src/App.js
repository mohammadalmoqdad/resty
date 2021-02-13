
import './App.scss';
import React from "react"
import Header from "./components/header";
import Form from "./components/form";
import Footer from "./components/footer";
import Result from './components/results';
import LeftSideBar from "./components/leftSideBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: {},
      results: [],
      operations: []
    }
  }

  formHandler = (headers, results) => {
    // when it is called in the form it wil set the
    this.setState({ headers, results })
  }

  operationsHandler = (operations) => {
    this.setState({ operations })
  }

  historyHandler(){
    
  }

  render() {
    return (
      <div className="App">
        <div className="main-content">
          <Header />
          <Form handler={this.formHandler} operationsHandler={this.operationsHandler} />
          <Result data={this.state.results} headers={this.state.headers} />
          <Footer />
        </div>
        <div className="left-side-bar">
          <LeftSideBar data={this.state.operations} />
        </div>
      </div>
    );
  }
}

export default App;
