// Argon Dashboard 2 MUI Examples
import BubbleChart from "examples/Charts/BubbleChart";

// Recoil
import { useRecoilValue } from 'recoil';
import { elementosHFM100 } from 'layouts/HFM100/components/Recoil';

function ScatterChart (data) {
	
	// Datos 
	const elemHFM100 = useRecoilValue(elementosHFM100);
	const dataX = [];
	const dataY = [];

	for (let i = 0; i < elemHFM100.length; i++) {
		var diccionario = {
			x: (parseFloat(elemHFM100[i].tempInferior.S) + parseFloat((elemHFM100[i].tempSuperior.S)))/2,
			y: parseFloat(elemHFM100[i].condTermica.S),
			r: 10,
		};
		if(i % 2 === 0){dataX.push(diccionario);}
		else{dataY.push(diccionario);}
		
	  };

	return (
		<BubbleChart
		title="Conductividad térmica VS Temperatura promedio"
		chart={{
			labels: ["0gg", "10gg", "20gg", "30gg", "40gg", "50gg", "60gg", "70gg", "80gg", "90gg"],
			datasets: [
			{
				label: "Dataset 1",
				color: "info",
				data: dataX,
			},
			{
				label: "Dataset 2",
				color: "dark",
				data: dataY,
			},
			],
		}}
		/>
	);
}

export default ScatterChart;