
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Overview page components
import Header from "layouts/dashboard2/components/Header";


function Dimensiones() {
  const renderChart = (
    <ArgonBox p={2}>
      <Header />
    </ArgonBox>
    
  );

  return <Card>{renderChart}</Card>;
}


export default Dimensiones;
