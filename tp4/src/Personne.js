import React, { Component } from 'react';

class Personne extends Component 
{
  render() 
  {
    const personne = this.props.personne;

    return (
      <div className="presentation">
          <p><strong>Nom:</strong> {personne.nom}  <strong>   Prénom:</strong>{personne.prenom}</p>
          <p><strong>Date de Naissance:</strong> {personne.dateNaiss}</p>
      </div>
    );
  }
}

export default Personne;