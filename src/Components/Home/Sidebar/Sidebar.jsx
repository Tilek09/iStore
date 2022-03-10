import React from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { productContext } from '../../../Contexts/ProductsContext';
import { useState } from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Slider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Sidebar = () => {
    const search = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const { getProducts } = useContext(productContext) 
    const [ type, setType ] = useState(search.get("type") || "")
    const [ price, setPrice ] = useState(search.get("price_lte") || "")
    
    const filterProducts = (key, value) => {
        search.set(key, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get("type") || " ")
        setPrice(search.get("price_lte" || ""))
        getProducts()
        
    }
    
    const handleChangeType = (e, value) => {
        search.set(e, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType (search.get("type")|| "")
        getProducts()    
    }
    
    const resetFilter = () => {
        navigate("/")
        setType("")
        setPrice("")
        getProducts("")
    }
    
    return (
        <Box sx={{ flexGrow: 1}} style={{marginLeft: "45vh"}}>
            <Grid container spacing={2}>
                <Grid item md={9}>
                    <Paper elevation={2}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">
                                Apple
                            </FormLabel>
                            <RadioGroup 
                                className='editSide'
                                row
                                aria-label="restuarant"
                                name="restuarant"
                                value={type} 
                                onChange={(e) => handleChangeType("type", e.target.value)}
                                >
                                <FormControlLabel 
                                    value="iPhone" 
                                    control={<Radio/>}
                                    label="iPhone"
                                />
                                <FormControlLabel 
                                    value="Apple Watch" 
                                    control={<Radio/>}
                                    label="Apple Watch"
                                />
                                <FormControlLabel 
                                    value="AirPods" 
                                    control={<Radio/>}
                                    label="AirPods"
                                />
                                <FormControlLabel 
                                    value="MacBook" 
                                    control={<Radio/>}
                                    label="MacBook"
                                />
                                <FormControlLabel 
                                    value="iPad" 
                                    control={<Radio/>}
                                    label="iPad"
                                />
                                <FormControlLabel 
                                    value="iMac" 
                                    control={<Radio/>}
                                    label="iMac"
                                />
                                 <FormControlLabel 
                                    value="Гаджеты" 
                                    control={<Radio/>}
                                    label="Гаджеты"
                                />
                            </RadioGroup>
                        </FormControl>
                        <Grid>
                            <Slider 
                                onChange={(e) => filterProducts("price_lte", e.target.value)}
                                valueLabelDisplay="auto"
                                max={10000}
                                step={1}
                            />
                        </Grid>
                        <Button onClick={resetFilter} variant="contained" color="warning">
                            Сбросить
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Sidebar;