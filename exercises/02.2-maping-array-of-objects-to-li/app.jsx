import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */

var planList = planets.map(function (planeta,indice) {
	return <li className= "list-group-item" key={indice} >{planeta}</li>;
});
console.log(planList);
// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{planList}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
