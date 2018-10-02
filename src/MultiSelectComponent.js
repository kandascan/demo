import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const classes = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


class MultiSelectComponent extends Component {
  state = {
    button: "Click me",
    inputOne: "Text field One",
    inputTwo: "Input Two",
    name: []
  }
  onHandlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onHandlerButtonClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">Choose actors</InputLabel>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.name.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          <br />
          <Input
            defaultValue={this.state.inputOne}
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            name="inputOne"
            onChange={this.onHandlerChange}
          />
          <br />
          <Input
            defaultValue={this.state.inputTwo}
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            name="inputTwo"
            onChange={this.onHandlerChange}
          />
          <br />
          <Button variant="contained" color="primary" onClick={this.onHandlerButtonClick} >
            {this.state.button}
          </Button>
        </FormControl>
      </div>
    );
  }
}
          
export default MultiSelectComponent;
