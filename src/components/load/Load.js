import React, { Component } from 'react';
import './Load.css';

class Load extends Component {
  constructor() {
    super();
    this.allStaffs = ["X1", "X2", "X3", "X4", "X5", "X6", "x7"];
    this.dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  }

  filterByStaffAndDay = (staff, day) => this.props.data.filter(
    (data) => data.selectedValue === staff && data.day === day).length;

  countTotalShiftForStaff = (staff) => this.props.data.filter((data) => data.selectedValue === staff).length


  render() {
    return (
      <div>
        <table className="center">
          <thead>
            <tr>
              <th>Staff Member</th>
              {this.dayOfWeek.map((item, i) => <th key={i}>{ item}</th>)}
              <th>Totals</th>
            </tr>
          </thead>
          <tbody>
            {this.allStaffs.map((staff, i) =>
              <tr key={i}>
                <td>{staff}</td>
                <td>{ this.filterByStaffAndDay(staff, 0)}</td>
                <td>{this.filterByStaffAndDay(staff, 1)}</td>
                <td>{this.filterByStaffAndDay(staff, 2)}</td>
                <td>{this.filterByStaffAndDay(staff, 3)}</td>
                <td>{this.filterByStaffAndDay(staff, 4)}</td>
                <td>{ this.countTotalShiftForStaff(staff)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Load;