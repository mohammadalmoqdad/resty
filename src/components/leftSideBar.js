import "../scss/leftSideBar.scss"
import React from "react";
import List from "./listOfOperations";
import superagent from "superagent";

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleItemClick(event) {
        let method = event.target.id;
        let url = event.target.className
        // let raw = await superagent(url).set(JSON.parse(this.state.body));
        // let body = raw.body
        // let headers = raw.headers


    }
    render() {
        let items = []
        let methodAndBody;
        this.props.data.forEach((item, i) => {
            methodAndBody = item['method'] + "+" + item["body"]
            items.push(<li onClick={this.handleItemClick} className={item["url"]} id={methodAndBody} key={i}>
                <span className="method"> {this.props.data[i]["method"]} </span>
                {this.props.data[i]["url"]}
            </li>)
        })
        return (
            <List>{items}</List>
        )
    }




}

export default SideBar;