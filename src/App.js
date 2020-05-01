import React, { Component } from "react";
import "./style.css";
import SMSForm from "./SMSForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      greeting: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then((response) => response.json())
      .then((state) => this.setState(state));
  }

  render() {
    return (
      <div>
        <section className=" main">
          <section className="title">
            <div className="title__container">
              <h1 className="title__main">COVID NEWS SMS</h1>
              <h2 className="title__subtitle">
                Get News about Corona Virus on your phone!
              </h2>
            </div>
          </section>

          <section className="sign-up">
            <h2>Enter your phone number to get news:</h2>
            <SMSForm />
          </section>
        </section>

        <footer className="footer">
          <p className="footer__text">
            a project by{" "}
            <a
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://pachi.dev"
            >
              @pachicodes
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
