import React,{Component} from 'react'

export class pageA extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>这是pageA
                {this.props.children}
            </div>
        )
    }
}

module.exports = pageA;