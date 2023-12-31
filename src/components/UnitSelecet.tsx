import  { ChangeEvent, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import { UnitPoint } from '../types';

function UnitSelect({ points,selected,onUnitChange,onInputChange,data}: { points: UnitPoint[]; selected: string; onUnitChange: (unit: string) => void; onInputChange: (input: number) => void;data:any}) {
  
  const [res,setRes]=useState<number>(data);
  console.log(res)
  const handleChange = (event: SelectChangeEvent) => {
    onUnitChange(event.target.value as string);
  };

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setRes(Number(event.target.value))
    onInputChange(Number(event.target.value) )
  }

  useEffect(() => {
    setRes(data);
  }, [data]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            type="number"
            variant="outlined"
            value={res}
            onChange={handleInputChange}
            style={{ marginBottom: 16 }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="point-select-input-label">Unit</InputLabel>
            <Select
              labelId="point-select-label"
              id="point-select"
              value={selected}
              label="Unit"
              onChange={handleChange}
            >
              {
              points.map((unit) => (
                <MenuItem key={unit.name} value={unit.name}>
                  {unit.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default UnitSelect;