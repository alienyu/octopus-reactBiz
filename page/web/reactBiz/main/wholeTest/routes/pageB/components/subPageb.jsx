import React,{Component} from 'react'

export class subPageb extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{intl.get("subPageB")}</div>
        )
    }
}

module.exports = subPageb;