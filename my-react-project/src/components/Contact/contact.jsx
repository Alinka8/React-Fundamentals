import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/your-profile">
            Your LinkedIn Profile
          </a>
        </p>
      </section>
    );
  }
}

export default Contact;
