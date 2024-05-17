import { Form } from "react-bootstrap";
import { random } from "lodash";
import PropTypes from "prop-types";

const Input = ({
    label = null,
    name = "",
    type = "text",
    placeholder = "Please enter data",
    value = "",
    onChange,
    ...otherProps
}) => {
    const controlId = "input-input" + random(0, 999);

    return (
        <Form.Group className="mb-3" controlId={controlId}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...otherProps}
            />
        </Form.Group>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "email", "number"]),
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default Input;
