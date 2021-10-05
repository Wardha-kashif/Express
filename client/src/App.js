import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callApi = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
  }

  componentDidMount() {
    this.callApi()
  }

  render() {
    return (
      <div>
        <p>The Fetch data will be coming Here {this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App