import React, { useState } from 'react';
import '../css/Antecedentes_personales.css';
import * as axios from 'axios';
import { Button,Box,InputLabel,NativeSelect,TextField,Stack,FormControl } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


export default function Antecedentes_Personales() {


    const [Nombre1, setNombre1] = useState('');
    const [Nombre2, setNombre2] = useState('');
    const [Apellido1, setApellido1] = useState('');
    const [Apellido2, setApellido2] = useState('');
    const [Rut, setRut] = useState('');
    const [dv, setDv] = useState('');
    const [Mail, setMail] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [value, setValue] = React.useState(new Date());
    const [RSH, setRSH] = useState('');
    const [es, setEs] = useState('');
    const [getLink, setLink] = useState('')

    const handleChange = (event) => {

        if (event.target.value == 2 || event.target.value == 5) {
            setLink('/antecedentes_conyuge')
        } else {
            setLink('/antecedentes_propiedad')
        }
        setEs(event.target.value)
    };

    const sqlHandler = (event) => {


        axios.post('http://localhost:3001/api/ins/pers',
            {

                nombre_1: Nombre1,
                nombre_2: Nombre2,
                apellido_1: Apellido1,
                apellido_2: Apellido2,
                rut: Rut,
                dv: dv,
                telefono: Telefono,
                mail: Mail,
                nac: value,
                rsh: RSH,
                es: es

            }

        ).then(() => {
        })
    }

    return (

        <div id='form_ant'>

            <h1>Antecedentes Persona</h1>

            <form id='formulario'>
                <Stack spacing={3}>

                    <TextField id="standard-basic" label="Nombres" variant="standard"
                        onChange={(event) => {
                            let splited = event.target.value.split(' ');
                            console.log(splited)
                            setNombre1(splited[0])
                            setNombre2(splited[1])

                        }} />

                    <TextField id="standard-basic" label="Apellidos" variant="standard"
                        onChange={(event) => {
                            let splited = event.target.value.split(' ');
                            console.log(splited)
                            setApellido1(splited[0])
                            setApellido2(splited[1])
                        }} />

                    <TextField id="standard-basic" label="Rut" variant="standard"
                        onChange={(event) => {
                            let splited = event.target.value.split('-');
                            console.log(splited)
                            setRut(splited[0])
                            setDv(splited[1])
                        }} />

                    <TextField id="standard-basic" label="Mail" variant="standard" onChange={(event) => {
                        setMail(event.target.value)
                    }} />

                    <TextField id="standard-basic" label="Telefono" variant="standard" onChange={(event) => {
                        setTelefono(event.target.value)
                    }} />
                    <LocalizationProvider id='datepicker' dateAdapter={AdapterDateFns}>

                        <DesktopDatePicker
                            disableFuture
                            label="Fecha Nacimiento"
                            openTo="year"
                            views={['day', 'month', 'year']}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue.toString().slice(4,-44));
                                console.log(value)
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    </LocalizationProvider>

                    <TextField id="standard-basic" label="Reg. Soc. Hogares" variant="standard" onChange={(event) => {
                        setRSH(event.target.value)

                    }} />

                    <Box id='datos-box' sx={{ minWidth: 120 }} >
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">Estado civil</InputLabel>
                            <NativeSelect

                                onChange={handleChange}
                                defaultValue={0}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}>
                                <option value={0}>Seleccione Opcion</option>
                                <option value={1}>Soltero(a)</option>
                                <option value={2}>Casado(a)</option>
                                <option value={3}>Divorciado(a)</option>
                                <option value={4}>Viudo(a)</option>
                                <option value={5}>AUC</option>



                            </NativeSelect>

                        </FormControl>
                    </Box>

                </Stack>
            </form>
            <div id='nxt_button'>
                <NavLink to={getLink} > <Button onClick={sqlHandler} variant="contained">Siguiente</Button></NavLink>

            </div>
        </div>

    );

}