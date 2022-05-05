import React, { Component } from "react";
import { Col, ListGroupItem, Row } from "react-bootstrap";
import "./style.css";

class TodoItem extends Component {
  render() {
    const { titleTask, date, time, handleDelete, handleEdit } = this.props;

    return (
      <ListGroupItem className="list-group">
        {" "}
        <Row>
          <Col>
            <div className="title-task d-flex justify-content-start">
              <p className="my-0">
                <span className="fw-bold">{titleTask}</span> At{" "}
                <span className="fw-bold">{time}</span>, Date:{" "}
                <span className="fw-bold">{date}</span>
              </p>
            </div>
          </Col>
          <Col>
            <Row>
              <Col sm md lg={10}></Col>
              <Col sm md lg={1}>
                <span className="text-success">
                  <i
                    className="fa-solid fa-pen-to-square edit-btn "
                    onClick={handleEdit}
                  ></i>
                </span>
              </Col>
              <Col sm md lg={1}>
                <span className="text-danger">
                  <i
                    className="fa-solid fa-trash-can delete-btn"
                    onClick={handleDelete}
                  ></i>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default TodoItem;
