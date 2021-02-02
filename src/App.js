
import './App.scss';
import React from "react"
import Header from "./components/header";
import Form from "./components/form";
import Footer from "./components/footer";
import Result from './components/results';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: []
    }
  }

  formHandler = (count, results) => {
    // when it is called in the form it wil set the
    this.setState({ count, results })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form handler={this.formHandler} />
        <Result data={this.state.results} count={this.state.count} />
        <Footer />
      </div>
    );
  }
}

export default App;
