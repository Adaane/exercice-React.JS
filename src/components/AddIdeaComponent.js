import React, { Component } from 'react';

export class AddIdeaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput : "",
      idea: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      idea: "Idée pour " + this.props.name + ": " + this.input.value 
    }) 
    this.input.value = "";
  }

  updateInput(){
    this.setState({
      valueInput :  this.input.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Ajouter une idée pour {this.props.name}: </h2>
        <input ref={(input) => this.input = input} onChange={this.updateInput} placeholder="Entrée votre idée ici" />
        <button>Ajouter</button>
      </form>
    )
  }
}
