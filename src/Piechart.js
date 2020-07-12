import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Course 1',
		'Course 2',
		'Course 3'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

function PieChart(){
    return (
      <div style={{width:'50%', height:'50%' ,margin: '0 auto',
      textAlign: "center",}}>
      <h2>Pie Chart</h2> 
        <Pie data={data} /> 
      
      </div>
    );
  }

export default PieChart;
