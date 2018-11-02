import React, { Component } from "react";
import Select from "../general/Select";
import * as constants from "../../constants";
import TimeIncrementPicker from "../TimeIncrementPicker";

class TimeOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeIncrement: ""
        };
    }

    render() {
        let options;
        let picker;
        
        const { mode } = this.props;

        if (mode === constants.EVERY) {
            options = [
    
            ]
        } else if (mode === constants.AT) {
            options = [
                
            ]
        } else {
            options = [
                {name: "minutes", value: constants.MINUTES},
                {name: "seconds", value: constants.SECONDS},
                {name: "hours", value: constants.HOURS},
                {name: "days", value: constants.DAYS},
                {name: "years - really?", value: constants.YEARS}
            ]
            picker = <TimeIncrementPicker value={this.props.timeIncrement} onChange={this.props.onChangeTimeIncrement} />;
        }
    
        return (
            <div>
                {picker}
            <Select onChange={this.props.onChangeIncrementType} options={options} />
            </div>
        );
    }
}

export default TimeOptions;