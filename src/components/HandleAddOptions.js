import React, { Component } from 'react';

class HandleAddOptions extends Component {
  state = {
    errors: undefined
  }

  handleSubmit = e => {
    e.preventDefault();

    const userInput = e.target.firstElementChild;

    const errors = this.props.AddOptions(userInput.value);

    this.setState(() => ({
      errors
    }))

    if (userInput.value) {
      userInput.value = "";
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter your indecision" />
          <input type="submit" value="Add" />
        </form>
        {this.state.errors && <p className = "error">{this.state.errors}</p>}
      </div>
    )
  }
}

export default HandleAddOptions;
