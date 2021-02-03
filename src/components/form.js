import React from 'react';
import '../scss/form.scss';
import superagent from "superagent";
class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: 'this is default',
      method: "",
      body: ""
    }
  }


  handleChange = (e) => {
    let url = e.target.value;
    // update this.state.url with new url
    // this.state is immutable (you can not change it directly)
    this.setState({ url });

  }


  handleClick = async (e) => {
    e.preventDefault();
    let url = this.state.url;
    this.setState({ url });

    let raw = await superagent(this.state.url).set(JSON.parse(this.state.body));
    let body = raw.body
    let headers = raw.headers
    // count, people : share this data
    this.props.handler(headers, body);

  }


  handleCheck = (event) => {
    let method = event.target.value;
    this.setState({ method })
  }


  bodyHandler = (event) => {
    let body = event.target.value;
    this.setState({ body })

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
          <input type="text" id="body" name="body" placeholder="BODY" onChange={this.bodyHandler} />
        </form>
        <section className="result-section">{this.state.method} {this.state.url}</section>
      </div>
    )
  }
}

export default Form;
