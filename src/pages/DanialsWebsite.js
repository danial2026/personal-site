import React, { Component , useEffect, useRef, useState} from 'react'
import './web19201.css';
import ProjectsPage from '../pages/Projects.js'
import ResumePage from '../components/ContactMe.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';


class DanialsWebsite extends Component{
  constructor(props) {
    super(props);

    this.state  = {
      projectsPage: false,
      resumePage: false,
    }
  }

  rectangle1Onclick = async() =>{

    console.log("rectangle1");
  }

  rectangle2Onclick = async() =>{

    console.log("rectangle2");
    this.setState(
      {
        resumePage: !this.state.resumePage
      }
    );
  }

  rectangle3Onclick = async() =>{

    console.log("rectangle3");
    this.setState(
      {
        projectsPage: !this.state.projectsPage
      }
    );
  }

  rectangle4Onclick = async() =>{

    console.log("rectangle4");
  }

  render() {
    return (
      <div className="App">
      <header title={this.state}>
      </header>
      <body>

          <div data-layer="b6c615b4-dbce-41af-bbfd-cc757ccbdd4d" className="web19201">       
              <svg data-layer="a5693d9b-f253-4465-8308-bea6cfd26e70" preserveAspectRatio="none" viewBox="-0.75 -0.75 251.5 251.5" className="x20211017114501">
                <path d="M 125 0 C 194.0355834960938 0 250 55.96440887451172 250 125 C 250 194.0355834960938 194.0355834960938 250 125 250 C 55.96440887451172 250 0 194.0355834960938 0 125 C 0 55.96440887451172 55.96440887451172 0 125 0 Z" fill="url(#img-x20211017114501)" />
              </svg>
              
              <div className="image0"></div>

              <svg data-layer="0604f424-e40f-417e-a12a-fb2ab35fedf9" preserveAspectRatio="none" viewBox="-0.5 0 1 985" className="line1"><path d="M 0 0 L 0 985"  /></svg>
              <div data-layer="9a284063-c54d-476f-aaaa-9f07d261d902" className="aboutme"></div>
              <div data-layer="71fac4ce-c577-4610-ad04-386fd209c8d2" className="danialMohammadzadeh"></div>
              <div data-layer="1e18ec85-ff83-45c7-9da2-cd0b24e569ab" className="rectangle1" onClick={this.rectangle1Onclick}></div>
              <div data-layer="770798ca-3341-4e8d-b1d1-25033f89fed3" className="projects">Projects</div>
              <div data-layer="3a8d3e2f-03a3-48dc-a51a-90fe09a735df" className="rectangle2" onClick={this.rectangle2Onclick}></div>
              <div data-layer="07d62963-df71-4784-90f0-29e9befe9025" className="resume">Resume</div>
              <div data-layer="3a494f46-83ca-4345-abbb-b516d3715698" className="rectangle3" onClick={this.rectangle3Onclick}></div>
              <div data-layer="cfc7c6da-5618-4d9c-9d17-00464c991134" className="cv">CV</div>
              <div data-layer="a038649e-e372-4556-a346-ca25019ab261" className="rectangle4" onClick={this.rectangle4Onclick}></div>
              <div data-layer="8d0f27ca-42f3-4b4a-9517-a3510b4eb207" className="contactMe">Contact Me</div>
              <div data-layer="de2deda8-40ec-4536-982f-809ba6da9134" className="image1"></div>
              <div data-layer="2a59e931-bc0f-4e36-81c6-12038b2847f9" className="image2"></div>
              <div data-layer="a5e0c57d-d026-4e17-8cf5-6a619eb15ed7" className="image3"></div>
              <div data-layer="fef4bb5a-c0d4-4ef7-8c16-f02f5382c512" className="image4"></div>
            {
              this.state.projectsPage ? 
              ReactDOM.render(
                <BrowserRouter>
                    <ProjectsPage />
                </BrowserRouter>, 
                document.getElementById('root')
              )
              : null
            }
            {
              this.state.resumePage ? 
              <ResumePage
              />
              : null
            }
          </div>  

        </body>
      </div>
    );
  }
}

export default DanialsWebsite;
