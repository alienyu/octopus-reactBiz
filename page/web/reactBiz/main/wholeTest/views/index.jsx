import React,{Component} from 'react'
import {render,findDOMNode} from 'react-dom'
import {Link} from 'react-router'
export class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: require("biz-imgs/test.png")
        };
        fetch("/a/b", {
            method: 'POST',
            body: JSON.stringify({name: "fdsfd"})
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <div>
                <div className="icon"></div>
                <img src={this.state.imgUrl} />
                <div className="imgTest"></div>
                <ul role="nav">
                    <li><Link to="/pageA">pageA</Link></li>
                    <li><Link to="/pageB">pageB</Link></li>
                </ul>
            </div>
        )
    }
}
module.exports = Index;