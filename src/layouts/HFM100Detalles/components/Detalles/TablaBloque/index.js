import React from 'react';
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
import { Space, Table, Tag } from 'antd';


function Tabla({condTermica, flujoCalor, tempInf, tempSup}) {
  const columns = [
    {
      title: 'T Sup. (°C)',
      dataIndex: 'tempSup',
      key: 'tempSup',
      align: 'center',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'T Inf. (°C)',
      dataIndex: 'tempInf',
      key: 'tempInf',
      align: 'center',
    },
    {
      title: 'Q avg (W/m²)',
      dataIndex: 'qAvg',
      key: 'qAvg',
      align: 'center',
    },
    {
      title: 'λ (W/mK)',
      dataIndex: 'condTerm',
      key: 'condTerm',
      align: 'center',
    },
  ];
  const data = [];
  for (let i = 0; i < tempSup.length; i++) {
    var diccionario = {
      key: 'i'+i,
      tempSup: tempSup[i],
      tempInf: tempInf[i],
      qAvg: flujoCalor[i],
      condTerm: condTermica[i],
    };
    data.push(diccionario);
  };

  return ( <Table columns={columns} dataSource={data} pagination={false} size="small" />);
}
// Setting default values for the props of GradientLineChart
Tabla.defaultProps = {
};
// Typechecking props for the CategoriesList
Tabla.propTypes = {
    condTermica: PropTypes.array,
    flujoCalor: PropTypes.array,
    tempInf: PropTypes.array,
    tempSup: PropTypes.array,
};
export default Tabla;