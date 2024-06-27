import { Button, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = ({ onClick, type, color, variant, id, text, icon }) => {
    const handleClick = (event) => {
        event.preventDefault();
        if (onClick) {
            onClick(event.target.id);
        }
    };

    return (
        <FormGroup>
            <Button
                type={type}
                color={color}
                variant={variant}
                id={id}
                onClick={handleClick}
            >
                {text || icon}
            </Button>
        </FormGroup>
    );
};

CustomButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.string,
    id: PropTypes.any,
    text: PropTypes.string,
    icon: PropTypes.any,
    color: PropTypes.string,
};

export default CustomButton;
