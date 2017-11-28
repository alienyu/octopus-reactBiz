import React,{Component} from 'react'

export class subPagea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{intl.get("subPageA")}</div>
        )
    }
}

module.exports = subPagea;