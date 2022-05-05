import React, { Component } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import TodoItem from "../TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    console.log(items);

    return (
      <Card style={{ width: "100%" }} className="mt-4">
        <CardHeader>
          <Row>
            <Col>
              <span className="fw-bolder fs-6 d-flex justify-content-start fst-italic text-secondary">
                My Tasks
              </span>
            </Col>
            <Col>
              <span className="fw-bolder fs-6 d-flex justify-content-end fst-italic text-secondary">
                Action
              </span>
            </Col>
          </Row>
        </CardHeader>

        <ListGroup variant="flush">
          {items.map((item) => {
            return (
              <TodoItem
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
