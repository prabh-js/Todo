import React from 'react';
import Input from './Input';
import Button from './Button';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        }
    }
    handleOnChange = (event) => {
       event.persist() // to set state asynchronously
        this.setState({
            text:   event.target.value
        })
   
    }
    onAdd = () => {
        this.setState({
            items:  [...this.state.items, this.state.text],
            text: ''
        });
    }
    renderList = () => {
        return (
            <ul>
                {this.state.items.map((item, index) => {
                  return  <li key={index}>{item}</li>
                })}
            </ul>
        )
    }
    render() {
        return (
            <div>
                <div>Please enter the Todo's</div>
                <Input
                type="text"
                value={this.state.text}
                placeholder="Type todo's"
                onChange={(e)=>this.handleOnChange(e)}
                />
                <Button
                onClick={this.onAdd}
                >
                    Add
                </Button>
                {
               this.renderList()
                }
                
            </div>
        )
    }
}
export default Todo;
