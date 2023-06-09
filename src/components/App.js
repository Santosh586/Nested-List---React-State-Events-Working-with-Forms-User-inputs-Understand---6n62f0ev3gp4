import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];
const State = ({ name, cities, id }) => {
	const [showState, setShowState] = useState(false);
	return showState ? (
		<>
			<li
				id={id}
				onClick={() => {
					setShowState(!showState);
				}}>
				{name}
			</li>
			{cities.map((city, idx) => (
				<ul key={Math.random()}>
					<City
						id={'city' + (idx + 1)}
						name={city.name}
						towns={city.towns}
					/>
				</ul>
			))}
		</>
	) : (
		<li
			id={id}
			onClick={() => {
				setShowState(!showState);
			}}>
			{name}
		</li>
	);
};
const City = ({ name, id, towns }) => {
	const [showCity, setShowCity] = useState(false);

	return showCity ? (
		<>
			<li
				onClick={() => {
					setShowCity(!showCity);
				}}>
				{name}
			</li>
			{towns.map((town, idx) => (
				<ul key={Math.random()}>
					<Town id={'town' + (idx + 1)} name={town.name} />
				</ul>
			))}
		</>
	) : (
		<li
			id={id}
			onClick={() => {
				setShowCity(!showCity);
			}}>
			{name}
		</li>
	);
};
const Town = ({ name, id }) => {
	return <li id={'town' + (id + 1)}>{name}</li>;
};
function App() {
	return (
		<div id="main">
			{states.map((state, idx) => (
				<ul key={Math.random()}>
					<State
						id={'state' + (idx + 1)}
						name={state.name}
						cities={state.cities}
					/>
				</ul>
			))}
		</div>
	);
}
export default App;