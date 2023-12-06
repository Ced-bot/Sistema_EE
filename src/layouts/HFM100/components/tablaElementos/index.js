import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table, Alert } from 'antd';
import Icon from "@mui/material/Icon";

import { Link } from 'react-router-dom';
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

import * as XLSX from 'xlsx';
// RECOIL
import { useRecoilValue, useRecoilState } from 'recoil';
import { elementosHFM100, datosGraficos } from 'layouts/HFM100/components/Recoil';

  
const Tabla = () => {
  // Recoil
  const [datGraficos, setDatGraficos] = useRecoilState(datosGraficos);

  // Datos para exportar
  const [exportData, setExportData] = useState([]);
  const [showAlertExport, setShowAlertExport] = useState(false);

  // Recoil datos de la tabla
  const elemHFM100 = useRecoilValue(elementosHFM100);
  const data = []
  for (let i = 0; i < elemHFM100.length; i++) {
    var reg_id = elemHFM100[i].registro_id.S;
    var diccionario = {
        key: elemHFM100[i].nombreMuestra.S + i,
        nombre: elemHFM100[i].nombreMuestra.S,
        tempInf: elemHFM100[i].tempInferior.S,
        tempSup: elemHFM100[i].tempSuperior.S,
        condc: parseFloat(elemHFM100[i].condTermica.S).toFixed(4),
        espesor: elemHFM100[i].espesor.S,
        duracion: elemHFM100[i].duracion.S,
        detalles: (
          //<Link to="/HFM-100-Detalles">
          <Link to={`/HFM-100-Detalles/${encodeURIComponent(reg_id)}`}>
            <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">navigate_next</Icon>
          </Link>),
    };
    data.push(diccionario);
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Check box
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);

    // Cambiar los datos que se exportaran
    //console.log(data);
    const resultadosFiltrados = data.filter(diccionario => {
      return newSelectedRowKeys.includes(diccionario.key);
    });
    setExportData(resultadosFiltrados);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Descargar los datos de la tabla
  const exportToExcel = () => {
    if (selectedRowKeys.length == 0){
      setShowAlertExport(true);
    }
    else {
      //console.log(exportData);
      var fileName = "export_data"
      const ws = XLSX.utils.json_to_sheet(exportData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Tabla 1');
      XLSX.writeFile(wb, `${fileName}.xlsx`);
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Graficar con los elementos seleccionados
  const graficarSelec = () => {
    setDatGraficos(exportData);
  };

  /////////////////////////////////////////////////////////////////////////
  // Paginación
  //setLoading(true);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
      pageSizeOptions: ['5', '10', '30','50'],
      locale: {items_per_page: " elm. / página"},
      showSizeChanger: true
    },
  });
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  // Boton seleccionar todo
  const selTodo = () => {
    setSelectedRowKeys((keys) =>
      keys.length === data.length ? [] : data.map((r) => r.key)
    );
    setExportData(data);
  };

  // Mas elementos
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Buscar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Limpiar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Deshacer
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            cerrar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'NOMBRE DE LA MUESTRA',
      dataIndex: 'nombre',
      key: 'nombre',
      align: 'center',
      width: '17%',
      ...getColumnSearchProps('nombre'),
      sorter: (a, b) => a.nombre.length - b.nombre.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'TEMP. INFERIOR (°C)',
      dataIndex: 'tempInf',
      key: 'tempInf',
      align: 'center',
      ...getColumnSearchProps('tempInf'),
      sorter: (a, b) => a.tempInf - b.tempInf,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'TEMP. SUPERIOR (°C)',
      dataIndex: 'tempSup',
      key: 'tempSup',
      align: 'center',
      ...getColumnSearchProps('tempSup'),
      sorter: (a, b) => a.tempSup - b.tempSup,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'COND. TÉRMICA (W/MK)',
      dataIndex: 'condc',
      key: 'condc',
      align: 'center',
      ...getColumnSearchProps('condc'),
      sorter: (a, b) => a.condc - b.condc,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'ESPESOR (MM)',
      dataIndex: 'espesor',
      key: 'espesor',
      align: 'center',
      ...getColumnSearchProps('espesor'),
      sorter: (a, b) => a.espesor - b.espesor,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'DURACIÓN (MINS)',
      dataIndex: 'duracion',
      key: 'duracion',
      align: 'center',
      ...getColumnSearchProps('duracion'),
      sorter: (a, b) => a.duracion - b.duracion,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '',
      dataIndex: 'detalles',
      key: 'detalles',
      align: 'center',
    },
  ];
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
      {/* Alerta de error*/}
      {showAlertExport && (  
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Alert
            style={{ position: "fixed", marginTop: '200px', zIndex: 2 }}
            message="Advertencia"
            description="No se ha seleccionado ningún registro."
            type="warning"
            showIcon
            closable
            afterClose={() => {setShowAlertExport(false);}} 
          />
        </div>
      )}
      <Grid container spacing={3}>
        <Grid item>
          <ArgonButton variant="outlined" color="primary"  onClick={selTodo}>
            Seleccionar todo
          </ArgonButton>
        </Grid>
        <Grid item>
          <ArgonTypography variant="h6" style={{ marginLeft: '6px', marginTop: '6px'}}>
            Elementos seleccionados {hasSelected ? `(${selectedRowKeys.length})` : '(0)'}
          </ArgonTypography>
        </Grid>
        <Grid item>
          <ArgonButton variant="outlined" color="info" onClick={exportToExcel}>
            <Icon sx={{ fontWeight: "bold" }}>download</Icon>
            &nbsp;Exportar
          </ArgonButton>
        </Grid>
        <Grid item style={{ marginLeft: 'auto' }}>
          <ArgonButton variant="gradient" color="success" onClick={graficarSelec}>
            Generar gráficos
          </ArgonButton>
        </Grid>
      </Grid>
    
      </div>
      <Table 
        rowSelection={rowSelection} 
        columns={columns} 
        dataSource={data} 
        size="middle" 
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        locale={{ 
          triggerDesc: 'Ordenar de forma descendente',
          triggerAsc: 'Ordenar de forma ascendente', 
          cancelSort: 'Deshacer'
        }}
        
      />
    </div>
  );
};

export default Tabla;