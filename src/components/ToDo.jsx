import React, { Component } from 'react';
import './ToDo.css';

export class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newIdea: "",
            list: [],
        };
    }

    updateInput(key, value){
        this.setState({
            [key]: value
        });
    }

    addIdea(){
        const newIdea = {
            id: 1 + Math.random(),
            value: this.state.newIdea.slice()
        };

        const list = [...this.state.list];

        list.push(newIdea);

        this.setState({
            list,
            newIdea:""
        });
    }

    deleteIdea(id){
        const list = [...this.state.list];

        const updatedList = list.filter(idea => idea.id !== id);

        this.setState({list: updatedList});
    }

    render() {
        return (
            <div className='container'>
                <div className='container__header'>
                    <h1>How you want help</h1> 
                    <h2>the Earth?</h2>
                </div>
                <div className='container__addIdea'>
                    <div className='container__addIdea__input'>
                        <label>Add idea</label>
                        <input
                            type="text"
                            placeholder="Type idea here..."
                            value={this.state.newIdea}
                            onChange={event => this.updateInput("newIdea", event.target.value)}
                        />
                    </div>
                    <button onClick={() => this.addIdea()}>
                        Add
                    </button>
                </div>
                <div className='userIdeas'>
                    <h3>For help the Earth I will...</h3>
                    <ul className='userIdeas__list'>
                        {this.state.list.map(idea => {
                            return (
                                <li key={idea.id}>
                                    {idea.value}
                                    <button 
                                        onClick={() => this.deleteIdea(idea.id)}
                                    >
                                        X
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}