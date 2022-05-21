import React from 'react';
import Components from './Components';
import './styling.css'


class Class extends React.Component {
    state = {
        name: '',
        department: '',
        rating: '',
        showForm: true,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployeeHandler(this.state);
        this.setState({
            name:'',
            department:'',
            rating: '',
            showForm: !this.state.showForm,
        });
    }

    handleGoBack = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        return (
            <div className='Form'>
                {
                    this.state.showForm ? (
                        <div className='form-wrapper'>
                            <h1>EMPLOYEE FEEDBACK FORM</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="name">Name: </label>
                                    <input
                                        type="text"
                                        id='name'
                                        autoComplete="off"
                                        className='form-input'
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="department">Department: </label>
                                    <input
                                        type="text"
                                        id='department'
                                        autoComplete="off"
                                        className='form-input'
                                        name='department'
                                        value={this.state.department}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="rating">Rating: </label>
                                    <input
                                        type="number"
                                        id='rating'
                                        autoComplete="off"
                                        className='form-input'
                                        name='rating'
                                        value={this.state.rating}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button type='submit' className='btn'>Submit</button>
                            </form>
                        </div> ) : (
                            <Components employees={this.props.employees}  goBack={this.handleGoBack}/>
                        )
                }
            </div>

        )
    }
}

export default Class