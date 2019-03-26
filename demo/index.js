
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 拾色器","code":"/**\n*\n* @title 拾色器\n* @description 提供预制色板的拾色器组件\n*\n*/\nimport React, { Component } from 'react';\nimport { ColorPicker } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    state = {\n        value : \"#E14C46\"\n    }\n\n    handleChange = (value) => {\n        console.log(value);\n        this.setState({\n            value: value\n        })\n    }\n    render () {\n        return (\n            <ColorPicker \n                value={this.state.value} \n                onChange={this.handleChange}\n                label=\"颜色\"\n            />\n        )\n    }\n}\n","desc":" 提供预制色板的拾色器组件"},{"example":<Demo2 />,"title":" 设置必输项","code":"/**\r\n*\r\n* @title 设置必输项\r\n* @description `required`参数设置是否必填\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { ColorPicker } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n    state = {\r\n        value : \"#E14C46\"\r\n    }\r\n\r\n    handleChange = (value) => {\r\n        console.log(value);\r\n        this.setState({\r\n            value: value\r\n        })\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker \r\n                className=\"demo2\"\r\n                value={this.state.value} \r\n                onChange={this.handleChange}\r\n                label=\"颜色\"\r\n                required={true}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" `required`参数设置是否必填"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} id={title.trim()}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
