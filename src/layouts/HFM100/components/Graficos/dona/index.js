// Argon Dashboard 2 PRO MUI examples
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";

// Recoil
import { useRecoilValue } from 'recoil';
import { elementosHFM100 } from 'layouts/HFM100/components/Recoil';
function DonutChart () {
    // Datos 
	const elemHFM100 = useRecoilValue(elementosHFM100);
	const data = [];

	for (let i = 0; i < elemHFM100.length; i++) {
		var diccionario = {
			x: (parseFloat(elemHFM100[i].tempInferior.S) + parseFloat((elemHFM100[i].tempSuperior.S)))/2,
			y: parseFloat(elemHFM100[i].condTermica.S),
			r: 10,
		};
		data.push(diccionario);
		
	};

	return (
        <DefaultDoughnutChart
            title="Elementos agrupados"
            chart={{
                labels: ["Creative Tim", "Github", "Bootsnipp", "Dev.to", "Codeinwp"],
                datasets: {
                label: "Projects",
                backgroundColors: ["info", "dark", "error", "secondary", "primary"],
                data: [15, 20, 12, 60, 20],
                },
            }}
            />
    );
}
    
export default DonutChart;