import React, {Component} from 'react';
import InputForm from './input-form.jsx';
import ItemsList from './items-list.jsx';
import CheckedItemList from './CheckedItemList';


class App extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            checkedList: []
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(content, event) {
        const contentObject = {
            content: content,
            checked: false
        };

        this.setState({list: [...this.state.list, contentObject]});
        if (event) {
            event.preventDefault();
        }
    }

    removeItem(index) {
        const list = [...this.state.list];
        let item = list[index];
        list.splice(index, 1);
        const checkedList = this.state.checkedList;
        let ind =  checkedList.findIndex(x => x.content === item.content);
        checkedList.splice(ind, 1);
        this.setState({list: list, checkedList: checkedList});
    }

    handleAddCheckedItem(item){
        let checkedList = this.state.checkedList;
        checkedList.push(item);
        let list = this.state.list;
        this.setState({list: list, checkedList: checkedList})
    }

    handleRemoveUncheckedItem(item){
        let checkedList = this.state.checkedList;
        let index = checkedList.findIndex((x) => (item.content === x.content));
        checkedList.splice(index, 1);
        let list = this.state.list;
        this.setState({list: list, checkedList: checkedList})
    }


    render() {
        return (
            <div>
                <h2>Add To Do Here</h2>
                <InputForm
                    addItem={this.addItem}
                />

                <hr/>
                <h2>ToDo List</h2>

                <ItemsList
                    list={this.state.list}
                    removeItem={this.removeItem}
                    addCheckedItem={this.handleAddCheckedItem.bind(this)}
                    removeUncheckedItem={this.handleRemoveUncheckedItem.bind(this)}
                />
                <hr/>
                <h2>Checked Todos</h2>
                <CheckedItemList list={this.state.checkedList}/>
            </div>
        );
    }
}

export default App;
