
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
// Argon Dashboard 2 MUI Examples
import BubbleChart from "examples/Charts/BubbleChart2";

function ScatterChart (datosPunto) {
	const dats = [parseFloat(datosPunto["datosPunto"][0]),parseFloat(datosPunto["datosPunto"][1]),parseFloat(datosPunto["datosPunto"][2])];
	return (
		<BubbleChart
		title="Puntos de prueba de la muestra"
		chart={{
			labels: ["0gg", "10gg", "20gg", "30gg", "40gg", "50gg", "60gg", "70gg", "80gg", "90gg"],
			datasets: [
			{
				label: "Dataset 1",
				color: "info",
				data: [
				{ x: (dats[1]+dats[2])/2, y: dats[0], r: 10 },
				],
			},
			{
				label: "Dataset 2",
				color: "dark",
				data: [],
			},
			],
		}}
		/>
	);
}

export default ScatterChart;