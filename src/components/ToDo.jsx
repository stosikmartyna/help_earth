import React, { Component } from 'react';

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

        const updatedList = list.filter(idea => idea.id != id);

        this.setState({list: updatedList});
    }

    render() {
        return (
            <>
                <h1>How you want help the Earth</h1>
                <label> Add idea
                    <input
                            type="text"
                            placeholder="Type idea here..."
                            value={this.state.newIdea}
                            onChange={event => this.updateInput("newIdea", event.target.value)}
                    />
                </label>
                <button onClick={() => this.addIdea()}>
                    Add idea
                </button>
                <ul>
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
            </>
        );
    }
}