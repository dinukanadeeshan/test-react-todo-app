import React, {Component} from 'react';

class InputForm extends Component {
    constructor() {
        super();
        this.state = {value: ''};
    }

    render() {
        return (
            <form onSubmit={(event) => {
                this.props.addItem(this.state.value, event);
                this.setState({value: ''});
            }}>
                <input type={'text'} value={this.state.value} onChange={(event) => {
                    this.setState({value: event.target.value})
                }
                }/>
                <input
                    type={'submit'} value={'+'}
                    // onClick={() => this.props.addItem(this.state.value)}
                />
            </form>
        );
    }
}

export default InputForm;
