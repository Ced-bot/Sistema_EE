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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI contexts
import { useArgonController } from "context";

// Recoil
import { useRecoilState } from 'recoil';
import { resIndicador } from 'layouts/resultados/components/Recoil';

function IndicadorEM110({ name,conclusion,titulos, elementos, noGutter }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [res, setRes] = useRecoilState(resIndicador);
  // Variables
  const palabra = conclusion ? 'Si se cumple' :'No se cumple';
  const color = conclusion ? 'green' :'red';
  // Funciones
  const handleClick = () => {
    setRes(name);
  };
  return (
    <ArgonBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
      sx={({ palette: { grey, background } }) => ({
        backgroundColor: darkMode ? background.default : grey[100],
      })}
    >
      <ArgonBox width="100%" display="flex" flexDirection="column"
      component={Link}
      color={"dark"}
      to={""}
      onClick={handleClick}
      sx={{
        lineHeight: 0,
        transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
        p: 0.5,

        "&:hover, &:focus": {
          transform: "translateX(5px)",
        },
      }}>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={1}
        >
          <ArgonTypography variant="button" fontWeight="medium" >
            <span style={{ color: 'black' }}>{name} </span> <span style={{ color: color }}>({palabra})</span>
          </ArgonTypography>

          {/* <ArgonBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            <ArgonTypography
              component={Link}
              variant="button"
              color={"dark"}
              to={"/"}
              sx={{
                lineHeight: 0,
                transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
                p: 0.5,

                "&:hover, &:focus": {
                  transform: "translateX(5px)",
                },
              }}
            >
              <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon> 
            </ArgonTypography>
            <ArgonBox mr={1}>
              <ArgonButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;Delete
              </ArgonButton>
            </ArgonBox>
            <ArgonButton variant="text" color="dark">
              <Icon>edit</Icon>&nbsp;Edit
            </ArgonButton>
          </ArgonBox> */}
        </ArgonBox>

        {elementos.map((item, index) => (
          <ArgonBox key={index} mb={1} lineHeight={0}>
            <ArgonTypography variant="caption" color="text">
              {titulos[index]}:&nbsp;&nbsp;&nbsp;
              <ArgonTypography variant="caption" fontWeight="medium">
                {item}
              </ArgonTypography>
            </ArgonTypography>
          </ArgonBox>
        ))}

      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of Bill
IndicadorEM110.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
IndicadorEM110.propTypes = {
  name: PropTypes.string.isRequired,
  conclusion: PropTypes.bool,
  titulos: PropTypes.array,
  elementos: PropTypes.array,
  noGutter: PropTypes.bool,
};

export default IndicadorEM110;
