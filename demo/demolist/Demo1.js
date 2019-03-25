/**
*
* @title 拾色器
* @description 提供预制色板的拾色器组件
*
*/
import React, { Component } from 'react';
import ColorPicker from '../../src';

class Demo1 extends Component {
    state = {
        value : "#E14C46"
    }

    handleChange = (value) => {
        console.log(value);
        this.setState({
            value: value
        })
    }
    render () {
        return (
            <ColorPicker 
                value={this.state.value} 
                onChange={this.handleChange}
                label="颜色"
            />
        )
    }
}
export default Demo1