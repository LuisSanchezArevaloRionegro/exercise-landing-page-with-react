//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Card } from "./component/card.js";
import { NavBar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron.js";
import { Footer } from "./component/footer.js";

class Container extends React.Component {
	render() {
		return (
			<div className="container">
				<Jumbotron />
				<div className="row text-center">
					{/* <Card /> <Card /> <Card /> <Card /> */}
					<Card
						imageURL="http://via.placeholder.com/500x325"
						title="Card title"
						cardDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent rutrum, platea interdum fames proin vulputate tortor neque ligula eleifend, nostra magna ridiculus lacus leo habitasse senectus massa."
						buttonURL="#"
						buttonLabel="Button Label"
					/>
					<Card
						imageURL="http://via.placeholder.com/500x325"
						title="Card title"
						cardDescription="Mauris eleifend elementum quam in sociis duis morbi aenean, phasellus suspendisse porta sapien sodales dictum eros, enim est viverra class himenaeos massa vehicula."
						buttonURL="#"
						buttonLabel="Button Label"
					/>
					<Card
						imageURL="http://via.placeholder.com/500x325"
						title="Card title"
						cardDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent rutrum, platea interdum fames proin vulputate tortor neque ligula eleifend, nostra magna ridiculus lacus leo habitasse senectus massa."
						buttonURL="#"
						buttonLabel="Button Label"
					/>
					<Card
						imageURL="http://via.placeholder.com/500x325"
						title="Card title"
						cardDescription="Mauris eleifend elementum quam in sociis duis morbi aenean, phasellus suspendisse porta sapien sodales dictum eros, enim est viverra class himenaeos massa vehicula."
						buttonURL="#"
						buttonLabel="Button Label"
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<div>
		<NavBar />
		<Container />
		<Footer />
	</div>,
	document.querySelector("#app")
);
