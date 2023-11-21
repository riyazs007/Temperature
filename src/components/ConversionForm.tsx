import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useContext, useState, useMemo } from 'react';
import { TempContext } from '../context/tempContext';
 import { allPoints,unitsGenerator } from '../store/type-store';
 import UnitSelect from './UnitSelecet';
import { TaskType } from '../types';
 //import Conversion from './Conversion';


export default function ConversionForm() {
    const {selectedTask} = useContext(TempContext);

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [input,setInput]=useState<any>()
    const [inputs,setInputs]=useState<any>() 

    let points = useMemo(() => {
        return selectedTask ? allPoints(selectedTask as TaskType) : [];
     }, [selectedTask]);

    // const canShowFare = useMemo(() => {
    //     return selectedTask && from && to;
    // }, [from, to]);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    function handleFromChange(unit: string) {
        setFrom(unit);
    }

    function handleToChange(unit: string) {
        setTo(unit);
    }
    function handleInputChange(inp: number){
        setInput(inp)
    }
    function handleInputsChange(inp: number){
        setInputs(inp)
    }
    const result1 = useMemo(() => unitsGenerator(input, from, to), [input, from, to]);
    const result2 = useMemo(() => unitsGenerator(inputs, to,from), [inputs, to, from]);
    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                    <UnitSelect  points={points} selected={from} onUnitChange={handleFromChange} onInputChange={handleInputChange} data={result2}></UnitSelect>
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <UnitSelect points={points} selected={to} onUnitChange={handleToChange} onInputChange={handleInputsChange} data={result1}></UnitSelect>
                    </Item>
                </Grid>
               
            </Grid>
        </Paper>
    );
}