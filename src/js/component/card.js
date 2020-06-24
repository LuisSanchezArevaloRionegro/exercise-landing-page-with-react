import React from "react";
import PropTypes from "prop-types";

export class Card extends React.Component {
	render() {
		return (
			// <div className="card" style="width: 18rem;">
			// 	<img
			// 		className="card-img-top"
			// 		src={this.props.imageURL}
			// 		alt="Card image cap"
			// 	/>
			// 	<div className="card-body">
			// 		<h5 className="card-title">{this.props.title}</h5>
			// 		<p className="card-text">{this.props.cardDescription}</p>
			// 		<a href={this.props.buttonURL} className="btn btn-primary">
			// 			{this.props.buttonLabel}
			// 		</a>
			// 	</div>
			// </div>
			// <div className="card">
			// 	<div className="card-body">
			// 		This is some text within a card body.
			// 	</div>
			// </div>
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top"
						src={this.props.imageURL}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h4 className="card-title">{this.props.title}</h4>
						<p className="card-text">
							{this.props.cardDescription}
						</p>
					</div>
					<div className="card-footer">
						<a
							href={this.props.buttonURL}
							className="btn btn-primary">
							{this.props.buttonLabel}
						</a>
					</div>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	imageURL: PropTypes.string,
	title: PropTypes.string,
	cardDescription: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string
};
