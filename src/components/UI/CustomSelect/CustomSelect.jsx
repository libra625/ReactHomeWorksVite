import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

const CustomSelect = ({ status, onSelect, id, view }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id={id}>Status</InputLabel>
            <Select
                disabled={view}
                id={id}
                value={status}
                label={"status"}
                onChange={onSelect}
            >
                <MenuItem value={"Not-Completed"}>In process</MenuItem>
                <MenuItem value={"Pending"}>Pending</MenuItem>
                <MenuItem value={"Complete"}>Complete</MenuItem>
            </Select>
        </FormControl>
    );
};

CustomSelect.propTypes = {
    status: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
    view: PropTypes.any,
    onSelect: PropTypes.func,
};

export default CustomSelect;
