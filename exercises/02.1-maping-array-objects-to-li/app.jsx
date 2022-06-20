import React from "react";
import ReactDOM from "react-dom";

const animals = [{ label: "Horse" }, { label: "Turtle" }, { label: "Elephant" }, { label: "Monkey" }];

/**
 * change the content of the map function
 **/
const animalsInHTML = animals.map((singleAnimal, i) => {
	return <li>hello</li>;
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));

// // Lo que tienes
// var oficiales = [
// 	{ id: 20, nombre: 'Capitán Piett' },
// 	{ id: 24, nombre: 'General Veers' },
// 	{ id: 56, nombre: 'Almirante Ozzel' },
// 	{ id : 88, nombre: 'Comandante Jerjerrod' }
//   ];
// const animals = animals.map(animals => animals.length);