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
                    <Breadcrumb.Item>{intl.get("welcome.index")}</Breadcrumb.Item>
                    <Breadcrumb.Item>{intl.get("welcome.title")}</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    {intl.get("welcome.text")}
                    <Button type="primary" onClick={this.goToPageA}>pageA</Button>
                    <Button type="primary" onClick={this.goToPageB}>pageB</Button>
                </Content>
            </Layout>
        )
    }
}
module.exports = Welcome;