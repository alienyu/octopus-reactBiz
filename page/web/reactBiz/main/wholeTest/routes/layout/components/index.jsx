import React,{Component} from 'react'
import { Layout } from 'antd';
const { Sider } = Layout;

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        this is menuBar
                    </Sider>
                    {this.props.children}
                </Layout>
            </Layout>
        )
    }
}
module.exports = App;