import React from "react";
import styles, { css } from "./styles.scss";
import styled from "styled-components";

const RadioBtn = styled.div`
  background-color: ${props => props.checkedColor};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
  box-shadow: inset 0 0 0 1px lightgrey,
    inset 0 0 0 ${props => (props.checked ? "3px" : "10px")} #fff;
  transition: box-shadow 1s;
`;

const FlexDiv = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-right: 10px;
  cursor: pointer;
`;

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    const { onClick, value } = this.props;
    if (typeof onClick === "function") {
      onClick(value);
    }
  };
  render() {
    const { value, currentValue, children } = this.props;
    const checked = value === currentValue;
    return (
      <FlexDiv onClick={this.onClick}>
        <RadioBtn
          checkedColor="blue"
          className={styles.radioBtn}
          checked={checked}
        />
        {children}
      </FlexDiv>
    );
  }
}

export default Radio;
