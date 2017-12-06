import React, {Component} from 'react';

class CheckedItemList extends Component {

    render() {
        let checkedList = this.props.list.map((item) => {
           return (<li key={item.content}>{item.content}</li>);
        });

        return (
            <ul>
                {checkedList}
            </ul>
        );
    }
}

export default CheckedItemList;
