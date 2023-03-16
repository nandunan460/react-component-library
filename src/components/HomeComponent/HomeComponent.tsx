import React from "react";
import "./HomeComponent.scss"
export interface HomeProps {
  heading: string;
  content:string,
  buttonText:string
}

const HomeComponent = (props: HomeProps) => {
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      <button className="btn">{props.buttonText}</button>
    </div>
  );
};

export default HomeComponent;