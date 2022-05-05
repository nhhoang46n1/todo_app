import React, { Component } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import TodoItem from "../TodoItem";
import "./style.css";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit, editItem } = this.props;
    console.log(items);

    return (
      <Card style={{ width: "100%" }} className="card mt-4">
        <CardHeader>
          <Row>
            <Col xs={10} sm={10} md={10} lg={10}>
              <span className="fw-bolder fs-6 d-flex justify-content-start fst-italic text-secondary">
                My Tasks
              </span>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2}>
              <span className="fw-bolder fs-6 d-flex justify-content-center fst-italic text-secondary">
                Action
              </span>
            </Col>
          </Row>
        </CardHeader>

        <ListGroup variant="flush">
          {items.map((item) => {
            return (
              <TodoItem
                editItem={editItem}
                key={item.id}
                titleTask={item.titleTask}
                date={item.date}
                time={item.time}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              ></TodoItem>
            );
          })}
        </ListGroup>

        <Button
          disabled={items ? false : true}
          onClick={clearList}
          className="btn btn-danger"
        >
          Clear All
        </Button>
      </Card>
    );
  }
}

export default TodoList;
