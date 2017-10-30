import React, { Component } from 'react';

export class Box extends Component {

    handleItemClick = (e, key) => {
        const { onChange } = this.props;
        onChange(key);
    }

    render() {
        const { name, items, selected } = this.props;
        console.log(selected);
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