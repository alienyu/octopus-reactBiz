import React,{Component} from 'react'
import { hashHistory } from 'react-router'
import { Layout, Breadcrumb, Button } from 'antd';
const { Content } = Layout;

export class pageA extends React.Component {
    constructor(props) {
        super(props);
    }

    goToSubPagea() {
        hashHistory.push("/pageA/subPagea")
    }

    goToSubPageb() {
        hashHistory.push("/pageA/subPageb")
    }

    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>pageA</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <div>这是pageA
                        {this.props.children}
                    </div>
                    <Button type="primary" onClick={this.goToSubPagea}>subPageA</Button>
                    <Button type="primary" onClick={this.goToSubPageb}>subPageB</Button>
                </Content>
            </Layout>
        )
    }
}

module.exports = pageA;