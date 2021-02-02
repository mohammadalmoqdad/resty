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


  handleClick = async (e) => {
    let words = this.state.words;
    this.setState({ words });

    e.preventDefault();
    let raw = await fetch(this.state.words);
    let data = await raw.json();
    let count = data.count;
    // count, people : share this data
    this.props.handler(count, data.results);
  }


  handleCheck = (event) => {
    let method = event.target.value;
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
          <input type="radio" onChange={this.handleCheck} name="method" id="method" value="GET" />
            </label>

            <label> POST
          <input type="radio" onChange={this.handleCheck} name="method" id="method" value="PUT" />
            </label>

            <label> PUT
          <input type="radio" onChange={this.handleCheck} name="method" id="method" value="POST" />
            </label>

            <label> DELETE
          <input type="radio" onChange={this.handleCheck} name="method" id="method" value="delete" />
            </label>
          </div>

        </form>
        <section className="result-section">{this.state.method} {this.state.words}</section>
      </div>
    )
  }
}

export default Form;
