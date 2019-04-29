import React from "react";
import ReactDOM from "react-dom";
import Radio from "./components/Buttons/Radio";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "Yes"
    };
  }
  onClickRadio = value => {
    this.setState({
      currentValue: value
    });
  };

  render() {
    const { currentValue } = this.state;
    return (
      <AppWrapper className="App">
        <Radio
          value="Yes"
          currentValue={currentValue}
          onClick={this.onClickRadio}
        >
          Yes
        </Radio>
        <Radio
          value="No"
          currentValue={currentValue}
          onClick={this.onClickRadio}
        >
          No
        </Radio>
      </AppWrapper>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
