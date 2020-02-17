import { Link } from "react-router-dom";
import React from "react";
import Select, { components } from "react-select";
import { colourOptions, programmingLanguages } from "../data";

const IndicatorsContainer = props => {
  return (
    <div style={{ background: colourOptions[2].color }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

export default class SkillComboBox extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
    console.log(this.props)
    this.props.change(selectedOption)
  };

  render() {
    const { selectedOption } = this.state;
    const { skills, change } = this.props;

    return (
      <Select
        onChange={this.handleChange}
        closeMenuOnSelect={false}
        components={{ IndicatorsContainer }}
        defaultValue={[]} //{[colourOptions[4], colourOptions[5]]}
        isMulti
        options={programmingLanguages}
      />
    );
  }
}
