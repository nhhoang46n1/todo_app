import React, { Component } from "react";
import { Col, ListGroupItem, Row } from "react-bootstrap";
import "./style.css";

class TodoItem extends Component {
  render() {
    const { titleTask, date, time, handleDelete, handleEdit, editItem } =
      this.props;

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
              <Col xs={6} sm={8} md={8} lg={8}></Col>
              <Col xs={3} sm={2} md={2} lg={2}>
                <button
                  className={
                    editItem
                      ? "text-secondary btn-action"
                      : "text-success btn-action"
                  }
                  disabled={editItem ? true : false}
                  onClick={handleEdit}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </Col>
              <Col xs={3} sm={2} md={2} lg={2}>
                <button
                  className="text-danger btn-action"
                  onClick={handleDelete}
                >
                  <i className="fa-solid fa-trash-can delete-btn"></i>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default TodoItem;
