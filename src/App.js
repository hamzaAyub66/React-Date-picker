import React from 'react';
import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate,'date selected-----');
  }
 
  render() {
    return (
      <div>
        <div className="top-header">
        <a href="https://jsonworld.com"><h2>JSON WORLD</h2></a>
        <a href="https://jsonworld.com/demo/react16-datepicker-example-with-react-datepicker" target="_blank" rel="noopener noreferrer"><span>React 16 Datepicker Example with react-datepicker</span></a>
      </div>
        <div className="text-center">
        <form onSubmit={ this.onFormSubmit }>
          <div className="form-group">
            <DatePicker
                selected={ this.state.startDate }
                onChange={ this.handleChange }
                showTimeSelect
                name="startDate"
                timeIntervals={20}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="form-control"
            />
          </div>
          <button className="btn btn-primary">Choose Date</button>

        </form>
        </div>
      </div>
    );
  }
  
}

export default App;