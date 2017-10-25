import React, { Component } from 'react';
import { Box } from "./Box";
import "./styles/index.css";

export class Transfer extends Component {

    state = {
        selected: [1, 3, 5],
        left: [],
        right: [],
    };

    handleLeftBoxChange = items => {
        this.setState({ left: items });
    }

    handleRightBoxChange = items => {
        this.setState({ right: items });
    }

    render() {
        const { items } = this.props;
        const { selected } = this.state;
        return (
            <div className="ym-transfer">
                <Box name="Source" items={items.filter(item => !selected.includes(item.key))} onChange={this.handleLeftBoxChange} />
                <div className="ym-button">
                    <div className="left">
                        <i></i>
                    </div>
                    <div className="right">
                        <i></i>
                    </div>
                </div>
                <Box name="Target" items={items.filter(item => selected.includes(item.key))} onChange={this.handleRightBoxChange} />
            </div>
        );
    }
}