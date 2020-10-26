import React, { Component } from 'react';
import ProfileCouleur from './ProfileCouleur';
import Post from './Post';
import "./App.css";




class App extends Component {

  state = {
    profiles: [
      {
        id: 1,
        personne: {nom: "L'Eponge", prenom: "Bob", dateNaiss:"14/11/1997"},
        img: "https://assets.stickpng.com/images/5874ccc242e4d628738559d9.png",
        post:
        {
          content:"Je suis Bob.",
          like:0
        }
      },
      {
        id: 2, 
        personne: {nom: "Etoile", prenom: "Patrick", dateNaiss:"21/10/1999"}, 
        img:"https://i.pinimg.com/originals/fe/af/57/feaf57dab24b1da14425c098f37805e1.png",
        post:
        {
          content:"Je suis Patrick.",
          like:0
        }
      },
      {id: 3, 
        personne: {nom: "Tentacule", prenom: "Carlo", dateNaiss:"23/12/1990"}, 
        img:"https://risibank.fr/cache/stickers/d1195/119583-full.png",
        post:
        {
          content:"Je suis Carlo.",
          like:0
        }
      }
    ],
    profile_a_jour: 
    {
      id: 1,
      personne: {nom: "L'Eponge", prenom: "Bob", dateNaiss:"14/11/1997"},
      img:"https://assets.stickpng.com/images/5874ccc242e4d628738559d9.png",
      post:
      {
        content:"Je suis Bob.",
        like:0
      }
    },
  }

  handleChoice(id) {
    const profiles = this.state.profiles.slice();
    this.setState({profile_a_jour: profiles.find(profile => profile.id === id)});
  }


  render() {
    return (
      <div className="container_pp">
        <div className="button_container">
          {this.state.profiles.map(profile => (
            <button className="boutons" onClick={()=> this.handleChoice(profile.id)}>{profile.personne.prenom}</button>
          ))}
        </div>
          <ProfileCouleur user={this.state.profile_a_jour}/>
          <Post user={this.state.profile_a_jour}/>
          <button className="jaime">C'est super !</button>
      </div>
    );
  }
}

export default App;