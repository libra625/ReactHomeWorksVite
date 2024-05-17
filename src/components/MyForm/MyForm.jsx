import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { cloneDeep } from "lodash";
import PropTypes from "prop-types";
import Input from "../UI/Input";

const formInitialValues = {
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
    rules: "off",
};

const fields = [
    {
        label: "Email address",
        name: "email",
        type: "email",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
    },
    {
        label: "City",
        name: "city",
        type: "text",
    },
];

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData
                ? { ...props.formData }
                : { ...formInitialValues },
        };
    }

    handleChange = (e) => {
        const previousData = cloneDeep(this.state.formData);

        if (e.target.name === "rules" && previousData[e.target.name] === "on") {
            previousData[e.target.name] = "off";
        } else if (
            e.target.name === "rules" &&
      previousData[e.target.name] === "off"
        ) {
            previousData[e.target.name] = "on";
        } else {
            previousData[e.target.name] = e.target.value;
        }

        this.setState({ formData: previousData });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.formData);
        this.setState({ formData: { ...formInitialValues } });
    };

    render() {
        const { address } = this.state.formData;

        return (
            <Form onSubmit={this.handleSubmit}>
                <h4 className="text-center">Form</h4>

                {fields.map((field, index) => {
                    return (
                        <Input
                            key={index}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            value={this.state.formData[field.name]}
                            onChange={this.handleChange}
                        />
                    );
                })}

                <Input
                    label={"Address"}
                    type={"text"}
                    name={"address"}
                    value={address}
                    onChange={this.handleChange}
                    as={"textarea"}
                />

                <Form.Label>Country</Form.Label>
                <Form.Select
                    className={"mb-3"}
                    aria-label={"Country"}
                    name={"country"}
                    onChange={this.handleChange}
                >
                    <option value="">Choose</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="China">China</option>
                </Form.Select>

                <Form.Check
                    className={"mb-3"}
                    type={"switch"}
                    label={"I have read Terms & Conditions"}
                    id={"disabled-custom-switch"}
                    name={"rules"}
                    onClick={this.handleChange}
                />

                <Button variant="primary" type="submit">
          Submit form
                </Button>
            </Form>
        );
    }
}

MyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object,
};

export default MyForm;
