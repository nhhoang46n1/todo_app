import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Nav from "./components/TodoNav";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    date: "",
    time: "",
    editItem: false,
  };

  handleChangeItem = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleChangeTime = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      titleTask: this.state.item,
      date: this.state.date,
      time: this.state.time,
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      date: "",
      time: "",
      id: uuidv4(),
      editItem: false,
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    console.log(filteredItems);
    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItems = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItems.titleTask,
      date: selectedItems.date,
      time: selectedItems.time,
      id: id,
      editItem: true,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <>
        <Nav />

        <Container className="text-center mt-4">
          <Row>
            <Col></Col>
            <Col>
              <TodoForm
                item={this.state.item}
                date={this.state.date}
                time={this.state.time}
                handleChangeItem={this.handleChangeItem}
                handleChangeDate={this.handleChangeDate}
                handleChangeTime={this.handleChangeTime}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col sm md lg={2}></Col>
            <Col sm md lg={8}>
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </Col>
            <Col xs md lg={2}></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
