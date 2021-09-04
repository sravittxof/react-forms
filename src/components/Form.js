import React from 'react';

class Form extends React.Component {




  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let formData = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //   };
  //   let dataArray = this.state.submittedData.concat(formData);
  //   this.setState({ submittedData: dataArray }, console.log(this.state));
  // };

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map((data, idx) => {
  //     return (
  //       <div key={idx}>
  //         <span>{data.firstName}</span> <span>{data.lastName}</span>
  //       </div>
  //     );
  //   });
  // };


  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={(event) => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={(event) => this.props.handleChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    );
  }
}

export default Form;