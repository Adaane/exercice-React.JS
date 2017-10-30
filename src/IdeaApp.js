import React, { Component } from 'react';


export class IdeaApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actual: "Engie",
      company: ["Crédit Agricole", "Engie", "Mamie Nova"],
      ideas:[]
    };
    this.addNewIdea = this.addNewIdea.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);

  }

  addNewIdea(idea){
    this.setState({
      ideas: this.state.ideas.concat([idea])
    });
  }

  handleChangeCompany(key) {
    this.setState({
      actual: this.state.company[key]
    })
  }

  render() {
    return(
      <div>
        <h1>Bienvenue dans la plateforme de partage d'idée de braineet. </h1>
k        <h3>Cliquer pour choisir une marque :</h3>

          <ul>
            {this.state.company.map( (company, i) => {
              let change = this.handleChangeCompany.bind(this, i);
              return <li key={company} onClick={change}>{company}</li>
              })}
          </ul>

        <h3 className={this.state.ideas.length ? '' : 'hidden'}>Idées: </h3>
        <ul>
          {this.state.ideas.map( (idea,i) => <li key={i}>{idea.idea}</li> )}
        </ul>
        <AddIdeaComponent onSubmit={this.addNewIdea} name={this.state.actual} />
      </div>
    )
  }
}


class AddIdeaComponent extends Component {
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



