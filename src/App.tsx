 import * as React from 'react';
 import { styled } from '@mui/material/styles';
 import Box from '@mui/material/Box';
 import Paper from '@mui/material/Paper';
 import Grid from '@mui/material/Grid';
 import ButtonAppBar from './components/Headers';
import TaskSelect from './components/TaskSelect';
import { TempContext } from './context/tempContext';
 import { TaskType } from './types';
import ConversionForm from './components/ConversionForm';
// import FareCalculatorForm from './components/FareCalculatorForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App() {
  const [selectedTask, setSelectedTask] = React.useState('');

  function handleTaskChange(taskType: TaskType) {
    setSelectedTask(taskType);
  }

  return (
    <TempContext.Provider value={{selectedTask}}>
    <Box sx={{ flexGrow: 1 }}>
      <ButtonAppBar/>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <TaskSelect task={selectedTask} onTaskChange={handleTaskChange}></TaskSelect>
          </Item>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            {selectedTask && <ConversionForm></ConversionForm>}
          </Item>
        </Grid>
      </Grid>
    </Box>
    </TempContext.Provider>
  );
}
