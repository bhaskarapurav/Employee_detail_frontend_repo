import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles/addEmployeeStyles";
import { addEmployee } from "../../actions/employeeAction";
import departmentService from "../../services/departmentService";

const AddEmployee = () => {
  const classes = styles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dept, setDept] = useState([]);
  const [inputs, setInputs] = useState({
    emp_name: "",
    job_name: "",
    hire_date: "",
    dept_id: "",
  });
  const { emp_name, job_name, hire_date, dept_id } = inputs;

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(addEmployee(inputs));
    navigate("/homepage");
  };
  useEffect(() => {
    departmentService.fetchDept().then((allDept) => {
      setDept(allDept);
    });
  }, []);

  return (
    <div className={classes.formStyle}>
      <form onSubmit={handleSubmit}>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Employee Name</label>

          <input
            type="text"
            name="emp_name"
            value={emp_name}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter employee Name"
            required
            data-testid="emp_name"
            onChange={handleChange}
          />

          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Job Name</label>

          <input
            type="text"
            name="job_name"
            value={job_name}
            className="form-control"
            placeholder="Enter Job name"
            required
            data-testid="job_name"
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Hire Date</label>
          <input
            type="date"
            name="hire_date"
            value={hire_date}
            className="form-control"
            placeholder="YYYY-MM-DD"
            required
            data-testid="hire_date"
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="form-group">
          <select
            required
            value={dept_id}
            className="form-control"
            onChange={handleChange}
            name="dept_id"
            data-testid="dept_id"
            id="dept_select"
          >
            <option value="">Select Department</option>
            {dept.map((d, index) => (
              <option key={index} value={d.dept_id}>
                {d.dept_name}
              </option>
            ))}
          </select>
        </div>
        <br />

        <button
          onChange={handleChange}
          type="submit"
          className="btn btn-primary btn-lg"
          data-testid="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
