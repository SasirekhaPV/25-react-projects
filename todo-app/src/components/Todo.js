import React, { Component } from 'react';
import store from '../index.js';


class Todo extends Component {

    render() {
    let { 
        text,
        edit,
        id,
        onCompleteClick,
        onToggleEditClick,
        onDeleteTodo,
        completed,} = this.props;
        return (
            <div>
            {
            edit ? 
            <div>
            <input ref={ (input) => this.text = input} defaultValue={text} />
            <button onClick={() => {
                store.dispatch({
                            type: 'EDIT_TODO',
                            text: this.text.value,
                            id  
                        })
            }}
            type="submit">Submit</button>
            </div> :
            <div>
                <li
                    onClick={onToggleEditClick}
                    style={{
                            textDecoration:
                            completed ?
                            'line-through' : 'none'
                        }}
                    >{text}</li>
                    <button
                    onClick={onCompleteClick}
                    >
                    {completed ? "Undo" : "Completed" } 
                    </button>
                    <button
                    onClick={onDeleteTodo}
                    >delete</button>
            </div> 
            }
        </div>
        );
    }
}

export default Todo;