import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { allTasks } from '../store/type-store';
import { TaskType } from '../types';

export default function TaskSelect({task, onTaskChange}: {task:string, onTaskChange: (taskType: TaskType) => void}) {
  const tasks = React.useMemo(allTasks, []);

  const handleChange = (event: SelectChangeEvent) => {
    onTaskChange as any as (taskType: TaskType) => void;
    onTaskChange(event.target.value as TaskType);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-city">Units</InputLabel>
        <Select
          labelId="select-task-label"
          id="select-task-select"
          value={task}
          label="Tasl"
          onChange={handleChange}
        >
          {
            tasks.map((taskType) => (<MenuItem  value={taskType}>{taskType}</MenuItem>))
          }
        </Select>
      </FormControl>
    </Box>
  );
}
