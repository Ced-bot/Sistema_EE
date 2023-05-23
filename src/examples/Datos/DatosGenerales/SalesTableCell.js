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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import TableCell from "@mui/material/TableCell";

// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";
import ArgonBox from "components/ArgonBox";
import { TextField } from '@mui/material';

function SalesTableCell({ title, noBorder, ...rest}) {
  const divStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
  };
  let template;
  template = (
    <TableCell {...rest} align="center" sx={{ border: noBorder && 0 }}>
      <ArgonBox display="flex" flexDirection="column">
        <div style={divStyle}>
          <ArgonTypography variant="h6">{title}</ArgonTypography>
        </div>
        <div style={divStyle}>
          <TextField label="" type="number" />
        </div>
      </ArgonBox>
    </TableCell>
  );

  return template;
}

// Setting default values for the props of SalesTableCell
SalesTableCell.defaultProps = {
  title: "",
  noBorder: false,
};

// Typechecking props for the SalesTableCell
SalesTableCell.propTypes = {
  title: PropTypes.string.isRequired,
  noBorder: PropTypes.bool,
};

export default SalesTableCell;
