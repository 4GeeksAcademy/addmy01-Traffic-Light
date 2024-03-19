import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red")
	return (

		<div className="container traffic-light m-5">
			<div className="card position-absolute top-5 start-50">
				<div className="top rounded-top">
				</div>
				<div className="rounded bg-dark" >
					<div onClick={() => setColor("red")} className={`red light m-2 ${color === "red" ? " glow" : ""}`}></div>
					<div onClick={() => setColor("yellow")} className={`yellow light m-2 ${color === "yellow" ? "glow" : ""}`}></div>
					<div onClick={() => setColor("green")} className={`green light m-2 ${color === "green" ? "glow" : ""}`}></div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;






// import React from "react";



// export default class TrafficLight extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//           clickedLight: null,
//         };
//       }
// 	render(){
//         console.log(this.state);
//         let redExtraClass = '';
//         if(this.state.clickedLight == 'red') redExtraClass = 'selected';
//         let yellowExtraClass = '';
//         if(this.state.clickedLight == 'yellow') yellowExtraClass = 'selected';
//         let greenExtraClass = '';
//         if(this.state.clickedLight == 'green') greenExtraClass = 'selected';
// 		return  <div className="wholeLight">
//         <div id="traffictop"></div>
//         <div id="container">
//             <div className={"red light " + redExtraClass} onClick={() => this.setState({ clickedLight: 'red'})}></div>
//             <div className={"yellow light " + yellowExtraClass} onClick={() => this.setState({ clickedLight: 'yellow'})}></div>
//             <div className={"green light " + greenExtraClass} onClick={() => this.setState({ clickedLight: 'green'})}></div>
//         </div>
//     </div>
    
// 	}
// }