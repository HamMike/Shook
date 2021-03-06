import React, { Component } from "react";
import {Slider, Slide} from "react-materialize";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Hero extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Slider indicators={false}>
        <Slide
          // src="http://lorempixel.com/580/250/nature/1"
          title="1. Make a Shake">
          Hold your friends and family accountable to their word.
        </Slide>
        <Slide
          // src="http://lorempixel.com/580/250/nature/2"
          title="2. Enforce the Shake"
          placement="left">
          Don't let your friends renege on a bet. Don't let your kids get out of the chores they said they'd do.
        </Slide>
        <Slide
          // src="http://lorempixel.com/580/250/nature/3"
          title="3. Rinse + Repeat"
          placement="right">
          But most of all, have some fun.
        </Slide>
      </Slider>
    )
  }
}

export default Hero;
