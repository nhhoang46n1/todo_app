import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";

import "./style.css";

class TodoForm extends Component {
  render() {
    const {
      item,
      date,
      time,
      handleChangeItem,
      handleChangeDate,
      handleChangeTime,
      handleSubmit,
      editItem,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit} className="form-container">
        <FormGroup className="mb-4">
          <FormLabel className=" fw-bolder">Title Task</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter my task"
            name="titleTask"
            value={item}
            onChange={handleChangeItem}
            required
          ></FormControl>
        </FormGroup>

        <FormGroup className="mb-4">
          <FormLabel className="fw-bolder">Date</FormLabel>
          <FormControl
            type="date"
            name="date"
            value={date}
            onChange={handleChangeDate}
            required
          ></FormControl>
        </FormGroup>

        <FormGroup className="mb-4">
          <FormLabel className="fw-bolder">Time</FormLabel>
          <FormControl
            type="time"
            name="time"
            value={time}
            onChange={handleChangeTime}
            required
          ></FormControl>
        </FormGroup>
        <Button
          disabled={item ? false : true}
          type="submit"
          className={editItem ? "btn btn-primary px-5" : "btn btn-success px-5"}
        >
          {editItem ? "Edit Task" : "Add Task"}
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
