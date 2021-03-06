import React, { useState } from "react";
import '../css/mostrar_persona.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineEditNote, MdDelete } from "react-icons/md";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { ImSearch } from "react-icons/im";
import { buscarPersAccion } from '../redux/dropDucks'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'



export default function Mostrar_Persona() {



    let search = ('')
    const dispatch = useDispatch();
    const drops = useSelector(store => store.drops.array)

    return (
        <div id='mostrar_persona'>

            <FormControl id="search">
                <InputLabel >Buscar</InputLabel>
                <OutlinedInput
                    startAdornment={<InputAdornment position="start"><ImSearch /></InputAdornment>}
                    label="Search"
                    onChange={(event) => {

                        if (event.target.value.length === 0) {

                            

                        }else{

                        axios.post('http://localhost:3001/api/insert/searchpers',

                            {
                                ir: event.target.value
                            }

                        ).then(() => {
                        })
                        dispatch(buscarPersAccion())
                    }}}

                />
            </FormControl>


            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                
                    {drops.map((val) => (

                        <ListItem alignItems="flex-start" key={val.idpersona}>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HMcXMq2gtNWrWcF2b6vhrb3ownaU7QKrVwGC3nT6QoTkWSdJFclbkjgiaT_E3RALfEM&usqp=CAU" />
                            </ListItemAvatar>
                            <ListItemText id='search_result'
                                primary={val.nombre_1 + " " + val.apellido_1}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Direccion:
                                            <br />
                                        </Typography>
                                        {"Calle #2525"}
                                        <br />
                                        {"Comuna, Region"}
                                        <br />
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Contacto:
                                        </Typography>
                                        {val.telefono}
                                        <br />
                                        {val.email}
                                    </React.Fragment>

                                }


                            />

                            <IconButton aria-label="add" size="large" color="primary" >
                                <IoIosAddCircleOutline />
                            </IconButton>

                            <IconButton aria-label="edit" size="large" color="primary" >
                                <MdOutlineEditNote />
                            </IconButton>

                            <IconButton aria-label="delete" size="large" color="primary" >
                                <MdDelete />
                            </IconButton>

                        </ListItem>
                    ))}
            </List>
        </div>
    );
}