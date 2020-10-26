import React, { Component } from 'react';
import Img from "./Img";
import Personne from './Personne';
import "./ProfileCouleur.css";


class ProfileCouleur extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        color : "white",
        whiteIsNext: true
    };
  }


    handleColor(i)
    {

        this.state.color = this.state.whiteIsNext ? "lavender" : "white";

        this.setState({
          whiteIsNext: !this.state.whiteIsNext
        });

          console.log(this.state.color);
      }

    
    render() {

        const { personne, img } = this.props.user;
        console.log({img});
        let fondCouleur = "defaultContainer"
        if(this.state.color==='white'){
            fondCouleur = "defaultContainer"
        }
        else{
            fondCouleur = "lavenderContainer"
        }

    return(
        <div className={fondCouleur}>
            <Img img={img}/>
            <Personne personne={personne} />
            <button className="bouton" onClick={i => this.handleColor(i)}>
                Change style
            </button>
        </div>
        )
    }
   
}

export default ProfileCouleur;