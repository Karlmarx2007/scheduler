import React, { Component } from 'react'
import Dropdown from '../dropdown/Dropdown';
import Load from '../load/Load'
import './Schedule.css';
class Schedule extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      error: ''
    }
    this.dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    this.shifts = ["Morning UpStairs","Morning Down Stairs", "Morning Parking Lot",
      "Lunch A", "Lunch B", "Lunch C", "Lunch D", "Afternoon Up Stairs",
      "Afternoon Down Stairs", "Afternoon Parking Lot"];
  }

  handleStaffPosition = (object1, stateData) => {
    const takenArr = stateData.filter(data => {
      if (!!data.selectedValue && data.shift === object1.shift && data.day === object1.day) {
        return data;
      }
    });
    return !!takenArr.length;
  }

  handleLunchSlots = (object1, stateData) => {
    const lunchOccupiedArr = stateData.filter(data => {
      if (data.shift.includes('Lunch') && data.selectedValue === object1.selectedValue && data.day === object1.day) {
        return data;
      }
    });
    return !!lunchOccupiedArr.length;
  }

  handleSelectedOption = (stateFromDropdown) => {
    var array = [...this.state.data];
    //Prints error if staff occupies 2 lunch slots at the same time
    if (this.handleLunchSlots(stateFromDropdown, array)) {
      this.setState(prev => ({ ...prev, error: stateFromDropdown.selectedValue + ' can\'t occupy more than 1 lunch slot' }));
    }
    //Ensures a shift can only be occupied by 1 staff
    else if (this.handleStaffPosition(stateFromDropdown, array)) {
      array.find(arr => !!arr.selectedValue && arr.shift === stateFromDropdown.shift && arr.day === stateFromDropdown.day)
        .selectedValue = stateFromDropdown.selectedValue;
      this.setState(() => ({data: array}))
    }
    else {
      this.setState((prev) => ({
        data: [...prev.data, stateFromDropdown]
      }))
    }
  }

  render() {
    return (
      <div>
        <table className="center">
          <thead>
            <tr>
              <th></th>
              {this.dayOfWeek.map((day, i) => <th key={i}>{ day}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.shifts.map((shift, i) =>
              <tr key={i}>
                <td>{shift}</td>
                {new Array(5).fill(0).map((val, i) => 
                  <td key={i}><Dropdown handleSelectedOption={this.handleSelectedOption} shift={shift} day={i} /></td>
                )}
              </tr>
            )}
          </tbody>
        </table>
        <p style={{color: 'red'}}>{this.state.error}</p>
        <br />
        <p>Load</p>
        <Load data={ this.state.data }/>
      </div>
    )
  }
}
export default Schedule;