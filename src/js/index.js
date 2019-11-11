//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calander">
				<i className="far fa-clock" />
			</div>
			<div className="four">{props.counterFour % 10}</div>
			<div className="three">{props.counterThree % 10}</div>
			<div className="two">{props.counterTwo % 10}</div>
			<div className="one">{props.counterOne % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	counterFour: PropTypes.number,
	counterThree: PropTypes.number,
	countertTwo: PropTypes.number,
	countertOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	//render your react application
	counter++;
	ReactDOM.render(
		<SimpleCounter
			countertOne={one}
			counterTwo={two}
			counterThree={three}
			counterFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
ReactDOM.render(<SimpleTimmer />, document.querySelector("#app"));
