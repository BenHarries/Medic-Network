import React, { Component } from "react";
import axios from "axios";
import { Form, Dropdown, Card, Image, Button, Input } from "semantic-ui-react";
// import "./app1.css";

// import DropdownExampleSelection from "./dropdown";

const RankOptions = [
  {
    key: "F1",
    text: "F1",
    value: "F1"
  },
  {
    key: "F2",
    text: " F2",
    value: "F2"
  },
  {
    key: "Registra",
    text: "Registra",
    value: "Registra"
  }
];
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
    key: "Paediatrician",
    text: "Paediatrician",
    value: "Paediatrician",
    image: {
      avatar: true,
      src:
        "https://www.ouh.nhs.uk/paediatricorthopaedics/assets/images/home1.jpg"
    }
  }
];
export default class PersonList extends React.Component {
  state = {
    name: "",
    message: "",
    number: "",
    full_name: "",
    Rank: ""
  };

  handleCatChange = (e, { value }) => {
    this.setState({ name: value });
    console.log(this.state);
  };

  handleMesChange = event => {
    this.setState({ message: event.target.value });
    console.log("set message");
  };
  handleNumChange = event => {
    this.setState({ number: event.target.value });
    console.log("set message");
  };
  handleNamChange = event => {
    this.setState({ full_name: event.target.value });
    console.log("set message");
  };
  handleRankChange = (e, { value }) => {
    this.setState({ Rank: value });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      message: this.state.message,
      number: this.state.number,
      full_name: this.state.full_name,
      Rank: this.state.Rank
    };

    axios.post(`http://127.0.0.1:1880/MyDoc`, { user }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <section>
          <Card>
            <Image src="https://i.ibb.co/j6DzQYj/quesion1.png" />
            <Card.Content>
              <Form>
                <form onSubmit={this.handleSubmit}>
                  <Dropdown
                    // style={{
                    //   position: "absolute",
                    //   left: "50%",
                    //   top: "60%",
                    //   transform: "translate(-50%, -60%)"
                    // }}
                    placeholder="Select Specialist"
                    name="subject"
                    onChange={this.handleCatChange}
                    selection
                    fluid
                    search
                    options={SpecialismOptions}
                    value={value}
                  />
                  <Form.TextArea
                    value={this.value}
                    placeholder="What do you need help with?"
                    onChange={this.handleMesChange}
                  />
                  <Form.Group widths="equal">
                    <Input
                      // control={Input}
                      style={{ width: "60%" }}
                      size="large"
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      onChange={this.handleNamChange}
                      fluid
                      padded
                    />
                    <br />
                    <Input
                      padded
                      style={{ width: "40%" }}
                      control={Input}
                      size="large"
                      type="text"
                      placeholder="Number"
                      onChange={this.handleNumChange}
                      fluid
                    />
                  </Form.Group>
                  <Dropdown
                    onChange={this.handleRankChange}
                    selection
                    fluid
                    defaultValue="F1"
                    options={RankOptions}
                    value={value}
                  />
                  <div
                  // style={{
                  //   position: "absolute",
                  //   left: "50%",
                  //   top: "90%",
                  //   transform: "translate(50%, -80%)"
                  // }}
                  >
                    <Button type="submit" color="blue">
                      Send
                    </Button>
                  </div>
                </form>{" "}
              </Form>
            </Card.Content>
          </Card>
        </section>
      </div>
    );
  }
}
