import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from './icon';
import {Form, Input, FormGroup, Container, Label} from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state ={
      date: null,
      focused: null
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Form>
            <FormGroup>
              <Label for="host">Host: </Label>
              <Input type="text" name="host" />
            </FormGroup>
            <FormGroup>
            <SingleDatePicker
                          // showClearDate={true}
                          customInputIcon={
                            <svg className="icon icon-small">
                              <Icon
                                icon="ICON_CALENDER"
                                className="icon icon-large"
                              />
                            </svg>
                          }
                          inputIconPosition="after"
                          small={true}
                          block={false}
                          numberOfMonths={1}
                          date={this.state.date}
                          onDateChange={date => this.handleDateChange(date)}
                          focused={this.state.focused}
                          onFocusChange={({ focused }) =>
                            this.setState({ focused })
                          }
                          openDirection="up"
                          hideKeyboardShortcutsPanel={true}
                        />
            </FormGroup>
            <FormGroup>
              <Label for="title">Party Title: </Label>
              <Input type="text" name="title" />
            </FormGroup>
            <FormGroup>
              <Label for="theme">Theme: </Label>
              <Input type="text" name="theme" />
            </FormGroup>
            <FormGroup>
              <Label for="number">Number of expected guests: </Label>
              <Input type="text" name="number" />
            </FormGroup>
            <FormGroup>
              <Label for="budget">Budget: </Label>
              <Input type="text" name="budget" />
            </FormGroup>
            <div>Category:</div>
      <select class="form-control form-control-lg">
        <option>Category</option>
        <option>Adult Birthday Party</option>
        <option>Dinner Party</option>
        <option>Anniversary Party</option>
        <option>Kid's Birthday Party</option>
        <option>Charity Party</option>
        </select>
        <label></label>
          </Form>
        </Container>
      </div>
    );
  }
}

export default DatePicker;