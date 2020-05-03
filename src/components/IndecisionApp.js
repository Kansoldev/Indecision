import React, { Component } from 'react';
import Header from './Header';
import Options from './Options';
import Button from './Button';
import HandleAddOptions from './HandleAddOptions';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
  state = {
    options: [],
    isSelected: undefined
  }

  handleChoose = () => {
    const option = Math.floor(Math.random() * this.state.options.length);

    const wow = this.state.options[option];

    this.setState(() => ({
      isSelected: wow
    }))
  }

  handleRemoveModal = () => {
    this.setState(() => ({
      isSelected: undefined
    }))
  }

  handleRemoveAll = () => {
    this.setState(() => ({
      options: []
    }))
  }

  handleRemove = (item) => {
    const newOptions = this.state.options.filter(option => option !== item);

    this.setState(() => ({
      options: newOptions
    }))
  }

  handleAdd = (value) => {
    if (value === "") {
      return "You haven't entered anything";
    } else if (this.state.options.indexOf(value) > -1) {
      return "The option already exists!";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(value)
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const options = JSON.stringify(this.state.options);
      localStorage.setItem("options", options);
    }
  }

  componentDidMount() {
    const getOptions = localStorage.getItem("options");

    const options = JSON.parse(getOptions);

    if (options) {
      this.setState(() => ({
        options
      }))
    }
  }

  render() {
    return (
      <div>
        <Header />
        <HandleAddOptions AddOptions={this.handleAdd} />
        <OptionModal choose={this.state.isSelected} removeModal={this.handleRemoveModal} />
        <Options value={this.state.options} handleRemove={this.handleRemove} />
        <Button
          handleChoose={this.handleChoose}
          options={this.state.options}
          handleRemoveAll = {this.handleRemoveAll}
        />
      </div>
    )
  }
}

export default IndecisionApp;