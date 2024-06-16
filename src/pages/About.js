import React, { Component } from "react";
import "./About.css";
import ousmanediallo from "../assets/ousmanediallo.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={ousmanediallo}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ousmane Diallo</div>
            <div className="brief_description">
            I am an undergraduate student majoring in computer systems pursuing a bachelor  degree. I am the Vice president of finance at the student government. I am a lifelong learner and hard working person who seek beneficial knowledge and share that knowledge to the people in my community. I am the chairman at Speakhire Junior board. I am part of the AI automation club and Muslim Association club at CUNY CIty Tech
            </div>
          </div>
        </div>
      </div>
    );
  }
}
