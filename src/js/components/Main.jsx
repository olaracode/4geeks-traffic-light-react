import React, { useState, useEffect } from "react";

export function Main() {
	const [selected, setSelected] = useState("");
	const setColor = color => {
		if (color === selected) {
			setSelected("");
		} else {
			setSelected(color);
		}
	};

	return (
		<>
			<div className="trafficTop"></div>
			<div className="container">
				<div
					className={
						selected !== "red" ? "red light" : "red light selected"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						selected !== "yellow"
							? "yellow light"
							: "yellow light selected"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						selected !== "green"
							? "green light"
							: "green light selected"
					}
					onClick={() => setColor("green")}></div>
			</div>
		</>
	);
}
