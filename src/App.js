import React, { Component } from "react";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";

// import DropdownExampleSelection from "./dropdown";

const SpecialismOptions = [
  {
    key: "Jenny Hess",
    text: "Cardiologist",
    value: "cardiologist",
    image: {
      avatar: true,
      src:
        "https://image.shutterstock.com/image-vector/doodle-icon-human-heart-vector-450w-552333052.jpg"
    }
  },
  {
    key: "Elliot Fu",
    text: "Thoracic Surgeon",
    value: "thorasic surgeon",
    image: {
      avatar: true,
      src:
        "https://i.pinimg.com/originals/67/19/52/671952c91e427f1f96cb9fcc2cfd9d8b.jpg"
    }
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: {
      avatar: true,
      src:
        "https://image.shutterstock.com/image-vector/doodle-icon-human-heart-vector-450w-552333052.jpg"
    }
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: {
      avatar: true,
      src:
        "https://image.shutterstock.com/image-vector/doodle-icon-human-heart-vector-450w-552333052.jpg"
    }
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: {
      avatar: true,
      src:
        "https://image.shutterstock.com/image-vector/doodle-icon-human-heart-vector-450w-552333052.jpg"
    }
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: {
      avatar: true,
      src:
        "https://image.shutterstock.com/image-vector/doodle-icon-human-heart-vector-450w-552333052.jpg"
    }
  }
];
export default class PersonList extends React.Component {
  state = {
    name: "",
    message: ""
  };

  // handleCatChange = event => {
  //   this.setState({ name: event.target.value });
  //   console.log(this.state);
  // };

  handleCatChange = (e, { value }) => {
    this.setState({ name: value });
    console.log(this.state);
  };

  handleMesChange = event => {
    this.setState({ message: event.target.value });
    console.log("set message");
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      message: this.state.message
    };

    axios.post(`http://127.0.0.1:1880/MyDoc`, { user }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleCatChange} />
          </label> */}

          <Dropdown
            placeholder="Select Subject"
            name="subject"
            onChange={this.handleCatChange}
            selection
            options={SpecialismOptions}
            value={value}
          />
          <Form.TextArea
            value={this.value}
            placeholder="What You would Like to ask..."
            onChange={this.handleMesChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
