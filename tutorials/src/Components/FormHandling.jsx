import React, { Component } from "react";

class FormHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      submitted: false,
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.handleUserNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={this.handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <h1>
          The username and password is <i> {this.state.username} </i> and
          password is <i>{this.state.comments}</i>
        </h1>

        {this.state.submitted && <h1>The form has been sumbitted</h1>}
      </div>
    );
  }
}

export default FormHandling;
