import React from "react";
// import { NavBar } from "./navbar.js";
import { Card } from "./card.js";
// import { Footer } from "./footer.js";
import { Jumbotron } from "./jumbotron.js";
// import { NavBar } from "./navbar.js";

const texts = [
	"Lorem ipsum dolor sit amet consectetur adipiscing elit praesent rutrum, platea interdum fames proin vulputate tortor neque ligula eleifend, nostra magna ridiculus lacus leo habitasse senectus massa.",
	"Mauris eleifend elementum quam in sociis duis morbi aenean, phasellus suspendisse porta sapien sodales dictum eros, enim est viverra class himenaeos massa vehicula.",
	"Lorem ipsum dolor sit amet consectetur adipiscing elit praesent rutrum, platea interdum fames proin vulputate tortor neque ligula eleifend, nostra magna ridiculus lacus leo habitasse senectus massa.",
	"Mauris eleifend elementum quam in sociis duis morbi aenean, phasellus suspendisse porta sapien sodales dictum eros, enim est viverra class himenaeos massa vehicula."
];

// var Cards = texts.map(text => (
// 	<Card
// 		imageURL="http://via.placeholder.com/500x325"
// 		title="Card title"
// 		cardDescription={text}
// 	/>
// ));

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Card
					imageURL="http://via.placeholder.com/500x325"
					title="Card title"
					cardDescription="Aqui va el texto"
					buttonURL="#"
					buttonLabel="Button Label"
				/>
			</div>
		);
	}
}
