import React,{Component} from 'react'

export class pageB extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>这是pageB
                {this.props.children}
            </div>
        )
    }
}

module.exports = pageB;