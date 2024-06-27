import { FormControl, FormGroup, Input, InputLabel } from "@mui/material";
import PropTypes from "prop-types";

const CustomInput = ({
    onChange,
    value,
    touched,
    error,
    id,
    name,
    type,
    label,
}) => {
    return (
        <FormGroup>
            <FormControl>
                <InputLabel htmlFor={"logIn"}>{label}</InputLabel>
                <Input
                    type={type}
                    id={id}
                    onChange={onChange}
                    value={value}
                    name={name}
                    autoComplete={"off"}
                />
                {touched && error ? <div className="error">{error}</div> : null}
            </FormControl>
        </FormGroup>
    );
};

CustomInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    error: PropTypes.string,
    id: PropTypes.any,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    touched: PropTypes.bool,
    type: PropTypes.string.isRequired,
};

export default CustomInput;
