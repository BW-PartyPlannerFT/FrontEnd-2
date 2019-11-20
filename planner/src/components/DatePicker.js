import React, { Component } from 'react';
import {connect} from 'react-redux';
import {rxAddParty} from '../redux/parties/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from './icon';
import {Form, Input, FormGroup, Container, Label} from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';
import styled from "styled-components";

const Card = styled.div`
width: 40%;
padding: 10px;
box-shadow: 1px 1px 5px black;
border-radius: 10px;
margin: 20px auto;
display: flex;
justify-content: space-between;
`;

const CardImg = styled.img`
width: 200px;
height: 200px
`;

const CardInfo = styled.div`
tex-align: left;
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 50%;
`;

const Status = styled.div`
tex-align: left;
background: dodgerblue;
height: 50px;
vertical-align: middle;
color: white;
padding: 1px;
border-radius: 5px;
`;


const CardStyle = styled.div `    
    background: lightblue;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    transition: transform 0.2s ease-in;
     border: 5px solid black;
    &:hover {
      transform: translate(-5px) scale(1.05);
    }

    `;

const CardTitleSize = styled.h2 `
font-size: 30px;

`;


class DatePicker extends Component {
  
  constructor(props) {
    console.log('DatePicker props', props)
    super(props);
    this.state ={
      date: null,
      focused: null
    }
  }

  handleChanges = e => {
    e.preventDefault();
    this.props.setNote({
      ...this.props.note,
      [e.target.name]: e.target.value
    });
  }

  render(props) {
    return (
      <div>
       <Card> 
         <Container>
          <Form>
            <CardStyle>
              <FormGroup>
            <CardTitleSize><Label for="host">Host: </Label></CardTitleSize>
              <Input type="text" name="host" placeholder='Who is hosting?' onChange={this.handleChanges}value={props.parties.host}/>
            </FormGroup>
            </CardStyle>
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
           <CardStyle><FormGroup>
            <CardTitleSize><Label for="title">Party Title: </Label></CardTitleSize>
              <Input type="text" name="title" placeholder="Enter title of event.." onChange={this.handleChanges} value={props.parties.party_name}/>
            </FormGroup></CardStyle>
            
            
            
            <FormGroup>
              <Label for="theme">Theme: </Label>
              <Input type="text" name="theme" placeholder="Theme of you bash" onChange={this.handleChanges} value={props.parties.theme}/>
            </FormGroup>
            
            
            
            <FormGroup>
              <Label for="guests">Number of expected guests: </Label>
              <Input type="number" name="guests" placeholder="Estimated number of guests" onChange={this.handleChanges} value={props.parties.guests}/>
            </FormGroup>
            
            
            
            <FormGroup>
              <Label for="budget">Budget: </Label>
              <Input type="number" name="budget" placeholder="How much do can you spend?" onChange={this.handleChanges} value={props.parties.budget}/>
            </FormGroup>
            <div>Category:</div>
      <select class="form-control form-control-lg">
        <option>Category</option>
        <option>Adult Birthday Party</option>
        <option>Dinner Party</option>
        <option>Anniversary Party</option>
        <option>Kid's Birthday Party</option>
        <option>Charity Party</option>
        <option>Other</option>
        </select>
        <label></label>
          </Form>
        </Container></Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parties: state.parties,
  }
}


export default connect(mapStateToProps, {rxAddParty})(DatePicker); 