 
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
  