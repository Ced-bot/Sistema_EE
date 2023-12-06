// Argon Dashboard 2 PRO MUI examples
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";

function DonutChart () {
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