import React, { Component , useEffect, useRef, useState} from 'react'
import './web19203.css';


class ContactMe extends Component{
  constructor(props) {
    super(props);

    this.state  = {
      projectsPage: "",
      resumePage: "",
      nameInput: "",
      emailInput: "",
      descriptionInput: "",
    }
  }

  updateNameInput = async(inputArg) =>{

    this.setState(
      {
        nameInput: inputArg,
      }
    );
  }

  updateEmailInput = async(inputArg) =>{

    this.setState(
      {
        emailInput: inputArg,
      }
    );
  }

  updateDescriptionInput = async(inputArg) =>{

    this.setState(
      {
        descriptionInput: inputArg,
      }
    );
  }

  rectangle1Onclick = async() =>{

    console.log("rectangle1");
  }

  render() {
    return (
      <div class="web19202">       
            <svg reserveAspectRatio="none" viewBox="-0.75 -0.75 251.5 251.5" className="x20211017114501">
                <path d="M 125 0 C 194.0355834960938 0 250 55.96440887451172 250 125 C 250 194.0355834960938 194.0355834960938 250 125 250 C 55.96440887451172 250 0 194.0355834960938 0 125 C 0 55.96440887451172 55.96440887451172 0 125 0 Z" fill="url(#img-x20211017114501)" />
            </svg>
            
            <div className="image0"></div>
            

            <svg preserveAspectRatio="none" viewBox="-0.5 0 1 985" className="line1"><path d="M 0 0 L 0 985"  /></svg>

            <div class="aboutme"></div>
            <div class="danialMohammadzadeh"></div>
            
            <div class="title1-contactMe"></div>
            <div class="component component-name">           
              <input 
                  placeholder="Name"
                  class='input'
                  onChange={e => this.updateNameInput({ ...this.state.nameInput, name: e.target.value })}
                />
            </div>
            <div class="title2-contactMe"></div>
            <div class="component component-email">           
              <input 
                  placeholder="Email"
                  class='input'
                  onChange={e => this.updateEmailInput({ ...this.state.emailInput, name: e.target.value })}
                />
            </div>
            <div class="title3-contactMe"></div>
            <div class=" component component-description">           
              <input 
                  placeholder="Description"
                  class='input'
                  onChange={e => this.updateDescriptionInput({ ...this.state.descriptionInput, name: e.target.value })}
                />
            </div>
        </div> 
    );
  }
}

export default ContactMe;
