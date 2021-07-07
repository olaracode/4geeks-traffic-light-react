import React, { useState, useEffect } from "react";

export function Main() {
	// Se crea un estado selected
	const [selected, setSelected] = useState("");

	// Funcion para desactivar y asignar valor a selected
	const handleColor = color => {
		// Si se clickea el color actual
		if (color === selected) {
			// Se deja selected en vacio
			setSelected("");
		} else {
			// Si se clickea otro color, se asigna un nuevo valor
			setSelected(color);
		}
	};

	return (
		<>
			<div className="trafficTop"></div>
			<div className="container">
				<div
					className={
						// Si select no es igual a este
						selected !== "red" ? "red light" : "red light selected"
					}
					onClick={() => handleColor("red")}></div>
				<div
					className={
						selected !== "yellow"
							? "yellow light"
							: "yellow light selected"
					}
					onClick={() => handleColor("yellow")}></div>
				<div
					className={
						selected !== "green"
							? "green light"
							: "green light selected"
					}
					onClick={() => handleColor("green")}></div>
			</div>
		</>
	);
}
