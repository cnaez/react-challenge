import React from "react";
import { SketchOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="container">
      <div className="thumbnail">
        <img className="heroPic" src={props.pic} alt="product" />
        <div className="lable">باز</div>
        <div className="lable2">A+ در حد نو</div>
      </div>
      <div className="heroText">
        <div>
          <div className="heroTitle">{props.title}</div>
          <div>{props.lastSeen}</div>
        </div>

        <a href="#">
          <SketchOutlined />
          کارنامه
          <ArrowLeftOutlined />
        </a>
      </div>
    </div>
  );
};

export default Hero;
