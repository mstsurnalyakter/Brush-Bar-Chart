# Brush Bar Chart | Rechart
 ### In this project, I created a basic bar chart using Recharts in ReactJS.  
- [![image](https://github.com/mstsurnalyakter/Brush-Bar-Chart/assets/117344596/ee5ae685-8fa0-418a-aad2-65cd6495c5fe)
]

### How to create a Brush Bar Chart using Recharts?

1) Create a React application using the following command.
   ````
      npm create vite@latest
   ````

2) After creating your project folder i.e. folder name, move to it using the following command.
  ````
   cd Brush-Bar-Chart
 ````

3) After creating the ReactJS application, Install the required modules using the following command.
   ````
   npm install --save recharts
   ````

### src/Components/BrushBarChart.jsx

   ````js
     import React from 'react';
     import { BarChart, Bar, Brush, XAxis, YAxis, CartesianGrid} from 'recharts';
    import { data } from './data';

   const BrushBarChart = () =>{

     return(
        <BarChart width={500} height={700} data={data}>
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Brush dataKey="name" height={30} stroke='#8884d8' />
            <Bar dataKey="x" fill='green' />
        </BarChart>
     )
 }

 export default BrushBarChart;

   ````

### src/Components/data.js

````js
   export const data = [
    {name:'A', x:861},
    {name:'B', x:862},
    {name:'C', x:343},
    {name:'D', x:454},
    {name:'E', x:435},
    {name:'F', x:653},
    {name:'G', x:734},
    {name:'H', x:845},
    {name:'I', x:932},
    {name:'J', x:133},
    {name:'K', x:222},
    {name:'L', x:332},
    {name:'M', x:554},
    {name:'N', x:554},
    {name:'O', x:633},
    {name:'P', x:722},
    {name:'Q', x:638},
    {name:'R', x:229},
    {name:'S', x:321},
    {name:'T', x:222},
    {name:'U', x:573},
    {name:'V', x:464},
    {name:'W', x:565},
    {name:'X', x:656},
    {name:'Y', x:764},
    {name:'Z', x:348},
  ];
    
````

### src/App.jsx

````js
  import React from 'react'
import BrushBarChart from './Components/AreaChart'

function App() {
  return (
    <>
    <h1>Create a Brush Bar Chart using Recharts in ReactJS</h1>
     <BrushBarChart />
    </>
  )
}

export default App;
````


### src/main.jsx
````js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

````


