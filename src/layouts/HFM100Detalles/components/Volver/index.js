/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Link } from 'react-router-dom';
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";


function Volver() {

  return (
    <Card id="delete-account">
      <ArgonBox p={2}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8} lg={10}>
            <Link to="/HFM-100">
              <ArgonButton variant="gradient" color="info" style={{ width: "100%" }} >
                <Icon sx={{ fontWeight: "bold" }}>arrow_back</Icon>
                &nbsp;Volver
              </ArgonButton>
            </Link>
          </Grid>
        </Grid> 
      </ArgonBox>
    </Card>
  );
}
// Setting default values for the props of GradientLineChart
Volver.defaultProps = {
};
// Typechecking props for the CategoriesList
Volver.propTypes = {
};

export default Volver;
