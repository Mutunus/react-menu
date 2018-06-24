import React, { Component } from 'react';
import logo from './chie.png';
import './App.css';
import { Menu } from './components/menu/menu'

const backgroundColor = { backgroundColor: 'red' }
const img = { height: '300px' }
const circleImg = { clipPath: 'circle(120px)' }
const skewImg = { transform: 'skew(0, 20deg)' }

class App extends Component {
	render() {

		return (
			<div style={backgroundColor}>
				<img style={{...circleImg, ...img}} src={logo}/>
				<img style={{...img, ...skewImg}} src={logo}/>
				<Menu/>
			</div>
		);
	}sasa
}

export default App;
