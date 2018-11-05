import React, { Component } from "react";
import Input from "../general/Input";
import styles from "./NumberPicker.css"
import Button from "../general/Button";
import PlusIcon from "../general/PlusIcon";
import MinusIcon from "../general/MinusIcon"

class NumberPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    plus() {
        this.setState({
            value: this.state.value + 1
        }, () => {
            this.props.onChange(this.state.value);
        });
    }

    minus() {
        if (this.state.value > 0) {
            this.setState({
                value: this.state.value - 1
            }, () => {
                this.props.onChange(this.state.value);
            });
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        }, () => {
            this.props.onChange(this.state.value);
        });
    }

    render() {
        return (
            <Input id="NumberPicker" className={styles.NumberPicker} value={this.state.value} onChange={this.handleChange} type="number" min={0}/>
        );
    }
}

export default NumberPicker;