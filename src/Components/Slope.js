/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Slope extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
           {
              x: [1, 5],
              y: [17, 6],
              type: 'scatter' 
           },
           {
             x: [6, 2],
             y: [16, 5],
             type: 'scatter'
           },
        ]}
        layout={ {width: 750, height: 520, title: 'Slope Plot'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Slope  Plot</td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Perfect for showing how ranks have changed over time or vary between categories. </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Scatter </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Line 1 </th>
            <td> 
            <tr> x: [1, 5]
            </tr> 
             <tr> y: [17, 6]
              </tr>
             </td>
          </tr>
           <tr>
            <th> Line 2 </th>
            <td> 
            <tr> x: [6, 2]
            </tr> 
             <tr> y: [16, 5]
              </tr>
             </td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
  }
}
export default Slope;