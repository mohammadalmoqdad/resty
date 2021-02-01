import React from 'react';
import '../scss/form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: 'this is default',
      method: "get"
    }
  }



  handleChange = (e) => {
    let words = e.target.value;
    // update this.state.words with new words
    // this.state is immutable (you can not change it directly)
    this.setState({ words });

  }


  handleClick = (e) => {
    let words = this.state.words;
    this.setState({ words });
  }

  handleCheckChange = (event) => {
    let method = event.target.value;
    this.setState({ method })
  }

  
  handleCheck = (event) => {
    let method = this.state.method;
    this.setState({ method })
  }



  render() {
    return (
      <div className="form-div">
        <form>
          <div>
            <label> URL
        <input type="url" id="url" onChange={this.handleChange} placeholder="http://localhost:3001/category" />
            </label>
            <button onClick={this.handleClick}>GO!</button>
          </div>
          <div>
            <label> GET
          <input type="radio" checked={this.handleCheck} onChange={this.handleCheckChange} name="method" id="method" value="GET" />
            </label>

            <label> POST
          <input type="radio" onChange={this.handleCheck} onChange={this.handleCheckChange} name="method" id="method" value="PUT" />
            </label>

            <label> PUT
          <input type="radio" onChange={this.handleCheck} onChange={this.handleCheckChange} name="method" id="method" value="POST" />
            </label>

            <label> DELETE
          <input type="radio" onChange={this.handleCheck} onChange={this.handleCheckChange} name="method" id="method" value="delete" />
            </label>
          </div>

        </form>
        <section className="result-section">{this.state.method} {this.state.words}</section>
      </div>
    )
  }
}

export default Form;
