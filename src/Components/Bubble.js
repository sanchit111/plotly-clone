/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Bubble extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
            {
             x: [1,2,3,4],
             y: [1,3,7,6],
             text: ['A<br>size: 40', 'B<br>size: 100', 'C<br>size: 70', 'D<br>size: 20'],
             mode: 'markers',
             marker: {
             color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
             size: [40,100,70,20]
              }
            }
        ]}
        layout={ {width: 750, height: 520, title: 'Bubble Chart'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Bubble Chart </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Like a scatterplot, but adds additional detail by sizing  the circles according to a third variable.</td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Bubble </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data </th>
            <td> 
            <tr> x: [1,2,3,4]
            </tr> 
             <tr> y: [1,3,7,6] 
              </tr>
             </td>
          </tr>
          <tr>
            <th> Marker size  </th>
            <td> [40,100,70,20] </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}
export default Bubble;