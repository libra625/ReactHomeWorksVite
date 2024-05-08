import React from "react";
import classnames from "classnames";
import FormTable from "../FormTable/FormTable.jsx";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            acceptedRules: false,
            formIsActive: false,
        };
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleAddressChange = (event) => {
        this.setState({ address: event.target.value });
    };

    handleCityChange = (event) => {
        this.setState({ city: event.target.value });
    };

    handleCountryChange = (event) => {
        this.setState({ country: event.target.value });
    };

    handleAcceptedRulesChange = (event) => {
        this.setState({ acceptedRules: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({ formIsActive: !this.state.formIsActive });
    };

    render() {
        const myFormClass = classnames({ "d-none": this.state.formIsActive });
        const formTableClass = classnames({ "d-none": !this.state.formIsActive });

        return (
            <>
                <form
                    name="myForm"
                    className={myFormClass}
                    onSubmit={this.handleFormSubmit}
                >
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
              Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Email address"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">
              Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">
              Address
                        </label>
                        <textarea
                            itemType="text"
                            className="form-control"
                            name="address"
                            id="address"
                            placeholder="1234 Main St"
                            value={this.state.address}
                            onChange={this.handleAddressChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">
              City
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            id="city"
                            value={this.state.city}
                            onChange={this.handleCityChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">
              Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            className="form-control"
                            value={this.state.country}
                            onChange={this.handleCountryChange}
                        >
                            <option value="">Choose</option>
                            <option value="argentina">Argentina</option>
                            <option value="usa">USA</option>
                            <option value="china">China</option>
                        </select>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">
                                <input
                                    id="rules"
                                    type="checkbox"
                                    name="acceptRules"
                                    className="form-check-input"
                                    checked={this.state.acceptedRules}
                                    onChange={this.handleAcceptedRulesChange}
                                />
                Accept Rules
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        onSubmit={this.handleFormSubmit}
                    >
            Sign in
                    </button>
                </form>

                <div className={formTableClass}>
                    <FormTable
                        className="mb-3"
                        email={this.state.email}
                        password={this.state.password}
                        address={this.state.address}
                        city={this.state.city}
                        country={this.state.country}
                        acceptedRules={this.state.acceptedRules}
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleFormSubmit}
                    >
            Back
                    </button>
                </div>
            </>
        );
    }
}

export default MyForm;
