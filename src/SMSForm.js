import React, { Component } from "react";
import "./SMSForm.css";

class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: "",
        body: "",
      },
      submitting: false,
      error: false,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onHandleChange(event) {
    const name = event.target.getAttribute("name");
    this.setState({
      message: { ...this.state.message, [name]: event.target.value },
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="sign-up__form">
        <label className="sign-up__label" htmlFor="to">
          Enter number:
        </label>{" "}
        <input
          className="sign-up__input"
          type="tel"
          name="to"
          id="to"
          value={this.state.message.to}
          onChange={this.onHandleChange}
        />
        <button
          className="sign-up__btn"
          type="submit"
          disabled={this.state.submitting}
        >
          Get News
        </button>
      </form>
    );
  }

  getNews() {
    fetch("https://api.smartable.ai/coronavirus/news/US", {
      method: "GET",
      headers: {
        "Subscription-Key": "API_KEY",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.news);
        const news = data.news.slice(0, 1);
        const msgm = `${news[0].excerpt}`;
        console.log(msgm);
        this.sendSMS(msgm);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }

  sendSMS(msgm) {
    fetch("https://afternoon-hollows-91856.herokuapp.com/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...this.state.message, body: msgm }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: "",
              body: "",
            },
          });
        } else {
          this.setState({
            error: true,
            submitting: false,
          });
        }
      });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state.message);
    this.setState({ submitting: true });
    this.getNews();
  }
}

export default SMSForm;
