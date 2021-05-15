import React, { Component, useState } from 'react'
import styled from 'styled-components';
import Switch from "./Switch";
import Switch2 from "./Switch2";
import Switch3 from "./Switch3";
import Switch4 from "./Switch4";

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

// Create 4 independent switches for the "ACTIONS" category in the table
var toggleSwitch = <div className="toggle-switch">
    <Switch
      // isOn={value}
      // onColor="#EF476F"
      // handleToggle={() => setValue(!value)}
    />
  </div>
var toggleSwitch2 = <div className="toggle-switch">
    <Switch2
      // isOn={value}
      // onColor="#EF476F"
      // handleToggle={() => setValue(!value)}
    />
  </div>
var toggleSwitch3 = <div className="toggle-switch">
<Switch3
  // isOn={value}
  // onColor="#EF476F"
  // handleToggle={() => setValue(!value)}
/>
</div>
var toggleSwitch4 = <div className="toggle-switch">
<Switch4
  // isOn={value}
  // onColor="#EF476F"
  // handleToggle={() => setValue(!value)}
/>
</div>

class Home extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         clients: [
            { Name: "General Test 01", Status: "🟧 Paused", Spent: "$150",
              Return: "$4.1K", Cost_Conversion: "$12.54",  Cost_Click: "$0.29", 
              Ctr: "3.5%", Actions: toggleSwitch },
              { Name: "General Test 02", Status: "🟩 Done", Spent: "$150",
              Return: "$4.1K", Cost_Conversion: "$12.54",  Cost_Click: "$0.29", 
              Ctr: "3.5%", Actions: toggleSwitch2 },
              { Name: "General Test 03", Status: "🟥 Removed", Spent: "$150",
              Return: "$4.1K", Cost_Conversion: "$12.54",  Cost_Click: "$0.29", 
              Ctr: "3.5%", Actions: toggleSwitch3 },
              { Name: "General Test 04", Status: "🟧 Paused", Spent: "$150",
              Return: "$4.1K", Cost_Conversion: "$12.54",  Cost_Click: "$0.29", 
              Ctr: "3.5%", Actions: toggleSwitch4 },
         ]
      }
   }

   renderTableHeader() {
        let header = Object.keys(this.state.clients[0])
        return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
        })
    }

   renderTableData() {
    return this.state.clients.map((client, index) => {
       const { Name, Status, Spent, Return, Cost_Conversion, 
               Cost_Click, Ctr, Actions } = client //destructuring
       return (
          <tr style={{ textAlign: "left" }} key={Name}>
             <td>{Name}</td>
             <td>{Status}</td>
             <td>{Spent}</td>
             <td>{Return}</td>
             <td>{Cost_Conversion}</td>
             <td>{Cost_Click}</td>
             <td>{Ctr}</td>
             <td >{Actions}</td>
          </tr>
       )
    })
 }

 render() {
  return (
    <Wrapper>
     <div>
        <h3 id='title'><b>Sales Breakdown</b></h3><br />
        <table id='clients'>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
    </Wrapper>
  )
}
}

export default Home; //exporting a component (Home) including table