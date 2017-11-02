import React, { Component } from 'react';
import { AddIdeaComponent } from './components/AddIdeaComponent.js';


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
        <h3>Cliquez pour choisir une marque :</h3>
        <ul>
          {this.state.company.map( (company, i) => {
            let change = this.handleChangeCompany.bind(this, i);
            return (
              <label>
              <input key={i} type='radio' value={company} onClick={change} />
              {company}
              </label>
              )
            })}
        </ul>

        <AddIdeaComponent onSubmit={this.addNewIdea} name={this.state.actual} />

        <h3 className={this.state.ideas.length ? '' : 'hidden'}>Idées: </h3>
        <ul>
          {this.state.ideas.map( (idea,i) => <li key={i}>{idea.idea}</li> )}
        </ul>
      </div>
    )
  }
}





