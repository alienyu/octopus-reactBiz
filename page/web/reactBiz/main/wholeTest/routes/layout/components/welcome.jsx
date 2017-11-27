import React,{Component} from 'react'
import { hashHistory } from 'react-router'
import { Layout, Breadcrumb, Button } from 'antd';
const { Content } = Layout;

export class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    goToPageA() {
        hashHistory.push("/pageA")
    }

    goToPageB() {
        hashHistory.push("/pageB")
    }

    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>欢迎</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    欢迎使用react纯净版框架
                    <Button type="primary" onClick={this.goToPageA}>pageA</Button>
                    <Button type="primary" onClick={this.goToPageB}>pageB</Button>
                </Content>
            </Layout>
        )
    }
}
module.exports = Welcome;