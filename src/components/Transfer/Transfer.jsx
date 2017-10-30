import React, { Component } from 'react';
import { Box } from "./Box";
import "./styles/index.css";

export class Transfer extends Component {

    state = {
        selected: [1, 3, 5],
        left: [],
        right: [],
    };

    handleLeftBoxChange = key => {
        let { left } = this.state;
        left.includes(key) ? left.splice(left.indexOf(key), 1) : left.push(key);
        this.setState({ left });
    }

    handleRightBoxChange = key => {
        let { right } = this.state;
        right.includes(key) ? right.splice(right.indexOf(key), 1) : right.push(key);
        this.setState({ right });
    }

    handleLeftButtonClick = () => {
        const { selected, right } = this.state;
        this.setState({
            selected: selected.filter(item => !right.includes(item)),
            right: [],
        })
    }

    handleRightButtonClick = () => {
        const { selected, left } = this.state;
        this.setState({
            selected: [...selected, ...left],
            left: [],
        })
    }

    render() {
        const { items } = this.props;
        const { selected, left, right } = this.state;
        return (
            <div className="ym-transfer">
                <Box
                    name="Source"
                    items={items.filter(item => !selected.includes(item.key))}
                    selected={left}
                    onChange={this.handleLeftBoxChange}
                />
                <div className="ym-button">
                    <div className="left" onClick={this.handleLeftButtonClick}>
                        <i></i>
                    </div>
                    <div className="right" onClick={this.handleRightButtonClick}>
                        <i></i>
                    </div>
                </div>
                <Box 
                    name="Target" 
                    items={items.filter(item => selected.includes(item.key))} 
                    selected={right}
                    onChange={this.handleRightBoxChange} 
                />
            </div>
        );
    }
}