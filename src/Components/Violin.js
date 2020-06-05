/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Violin extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[{
                 
                 name: 'Men', 
                 type: 'bar', 
                 x: [600, 623, 653, 650, 670, 578, 541, 360, 312, 170], 
                 y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
                 marker: {color: 'powderblue'}, 
                 
                 orientation: 'h'
               },
               {
                name: 'Women', 
                type: 'bar', 
                x: [-600, -623, -653, -650, -670, -578, -541, -411, -322, -230], 
                y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
                marker: {color: 'seagreen'}, 
                
                orientation: 'h'
            }
            
        ]}
        
        layout={ {width: 750, height: 520, title: 'Violin', barmode: 'relative'} }
      />
        <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Violin </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Similar to a box plot but more effective with complex distributions (data that cannot be summarised with simple average).</td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Bar </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Men </th>
            <td> 
            <tr> x: [600, 623, 653, 650, 670, 578, 541, 360, 312, 170]
            </tr> 
             <tr> y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Women </th>
            <td> 
            <tr> x: [-600, -623, -653, -650, -670, -578, -541, -411, -322, -230]
            </tr> 
             <tr> y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Orientation   </th>
            <td> h </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    

        );
  }
}
export default Violin;