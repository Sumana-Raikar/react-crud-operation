import React, { Component } from 'react';


class Department extends Component {
    constructor(props) {
      super();
        this.state = {
            departmentName: ['HR', 'Engineering'],
            hrDeptOptions: ["1", "3", "5", "7"],
            engDeptOptions: ["2", "4", "6", "8"],
            selectedDeptName: ""
        }
    }

    onChangeDeptNames = (deptName) => {
        console.log("hhhhhhhhh");
        console.log(this.props);
        this.setState({
            selectedDeptName: deptName
        })
    }

    onChangeDeptOptions = (options) => {
        this.setState({
            selectedDeptOptions: options
        })
    }

    getDetails = () => {
        console.log("qqqqqqqq");
        console.log(this.state)
    }

    render() {
        const buttonStyle = {
            marginTop: '40px',
          };
        return (
            <div style={buttonStyle}>
                <div className="row">
                    <div className="col-md-4">
                        <select onChange={(e) => this.onChangeDeptNames(e.target.value)}>
                            <option>select Department</option>
                            {this.state.departmentName.map((deptName) => <option key={deptName} value={deptName}>{deptName}</option>)}
                        </select>
                    </div>
                    <div className="col-md-4">
                        {(this.state.selectedDeptName === "HR") ? <select onChange={(e) => this.onChangeDeptOptions(e.target.value)}>
                            <option>select HR Employees</option>
                            {this.state.hrDeptOptions.map((hrDept) => <option key={hrDept} value={hrDept}>{hrDept}</option>)}
                        </select> : ""}
                    </div>
                    <div className="col-md-4">
                        {(this.state.selectedDeptName === "Engineering") ? <select onChange={(e) => this.onChangeDeptOptions(e.target.value)}>
                            <option>select Engineering Employees</option>
                            {this.state.hrDeptOptions.map((hrDept) => <option key={hrDept} value={hrDept}>{hrDept}</option>)}
                        </select> : ""}
                    </div>
                </div>
                <div style={buttonStyle}>
                    <button onClick={this.getDetails}>Get Details</button>
                </div>
            </div>
        )
    }
}

export default Department;