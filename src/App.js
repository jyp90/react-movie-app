import React from "react";

class App extends React.Component {
  state = { isLoading: true, movies: [] };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 4000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Ready for action"}</div>;
  }
}

export default App;
