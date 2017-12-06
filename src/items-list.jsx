import React, {Component} from 'react';

class ItemsList extends Component {
    handleChecked(item) {
        item.checked = !item.checked;
        if(item.checked)
            this.props.addCheckedItem(item);
        else
            this.props.removeUncheckedItem(item);
    }

    render() {
        const list = this.props.list.map((item, index) => (
                <li key={index}>
                    <input type={'checkbox'} checked={item.checked} onClick={this.handleChecked.bind(this, item)}/>
                    <span>{item.content}</span>
                    <button onClick={() => this.props.removeItem(index)}>X</button>
                </li>
            )
        );

        return (
            <ul className={'class'} style={{'padding': 0, 'listStyle': 'none'}}>
                {list}
            </ul>
        );
    }
}

export default ItemsList;
