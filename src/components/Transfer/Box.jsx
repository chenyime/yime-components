import React, { Component } from 'react';

export class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: [],
        };
    }

    handleItemClick = (e, key) => {
        const { selected } = this.state;
        const { onChange } = this.props;
        if (selected.includes(key)) {
            selected.splice(selected.indexOf(key), 1);
        } else {
            selected.push(key);
        }
        this.setState({ selected });
        onChange(selected);
    }

    render() {
        const { name, items } = this.props;
        const { selected } = this.state;
        return (
            <div className="ym-transfer-box">
                <div className="top">
                    <input type="checkbox" />
                    <span className="items-num">{selected.length + "/" + items.length}</span>
                    <span className="name">{name}</span>
                </div>
                <div className="items">
                    {items.map(item => (
                        <div className="item" key={item.key} onClick={(e) => this.handleItemClick(e, item.key)}>
                            <input type="checkbox" checked={selected.includes(item.key) ? true : false} />
                            <div className="content">{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}