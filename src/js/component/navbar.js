import React from "react";

export class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link disabled" href="#">
							About
						</a>
						<a className="nav-item nav-link disabled" href="#">
							Services
						</a>
						<a className="nav-item nav-link disabled" href="#">
							Contact
						</a>
					</div>
				</div>
			</nav>
		);
	}
}
