import React,{Component} from 'react'
import { Layout, Select } from 'antd';
const { Sider } = Layout;
const Option = Select.Option;

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.localesOps = [{
            name: "English",
            value: "en-US"
        },
        {
            name: "简体中文",
            value: "zh-CN"
        }];
        this.state = {
            currentLocale: this.localesOps[0].value
        };

        ["handleChange"].forEach(m=>this[m] = this[m].bind(this))
    }

    handleChange(val) {
       this.setState({currentLocale: val});
    }

    render() {
        intl.init({
            currentLocale: this.state.currentLocale,
            locales: {
                [this.state.currentLocale]: require(`../../../locales/${this.state.currentLocale}.json`)
            }
        });
        return (
            <Layout>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <div style={{marginLeft: 30,marginTop: 30,marginBottom:30}}>{intl.get('menuBar')}</div>
                        <div>
                            <Select defaultValue="en-US" style={{width: 100,marginLeft:30}}onChange={this.handleChange}>
                                {this.localesOps.map(item => <Option key={item.value} value={item.value}>{item.name}</Option>)}
                            </Select>
                        </div>
                    </Sider>
                    {this.props.children}
                </Layout>
            </Layout>
        )
    }
}
module.exports = App;