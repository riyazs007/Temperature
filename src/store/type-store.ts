import { UnitPoint } from "../types"; //Amount, CityType, 
import { TaskType } from "../types";
// const BASIC_FARE = Amount.INR(10);

const TaskStore = {
    "Temperature": {
        "Celcius": { name: "Celcius"},
        "Fahrenheit": { name: "Fahrenheit" },
          
    },
    "Area": {
        "Square Yard": { name: "Square Yard" },
        "Square Meter": { name: "Square Meter"},
        
       
    },
    "Mass": {
            "Milli Gram": { name: "Milli Gram" },            
            "Micro Gram": { name: "Micro Gram" },
           
    },
}

export function allTasks(): TaskType[] {
    return Object.keys(TaskStore) as TaskType[];
}

export function allPoints(task: TaskType): UnitPoint[] {
    return Object.values(TaskStore[task]);
 }


export function unitsGenerator(input:number,from:string,to:string){
    if(from=='Celcius'){
        if(to=='Fahrenheit'){
            return (input*9/5)+32;
        }
    }
    else if(from=='Fahrenheit'){
        if(to=='Celcius'){
            return (5 / 9) * (input - 32)
        }
    }
    else if(from=='Micro Gram'){
        if(to=='Milli Gram'){
            return input/1000
        }
    }
    else if(from=='Milli Gram'){
        if(to=='Micro Gram'){
            return input*1000
        }
    }
    else if(from=='Square Yard'){
        if(to=='Square Meter'){
            return input/1.196
        }
    }
    else if(from=='Square Meter'){
        if(to=='Square Yard'){
            return input*1.196
        }
    }
}