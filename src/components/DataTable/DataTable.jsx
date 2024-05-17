import PropTypes from "prop-types";
import { Button, Table } from "react-bootstrap";

const DataTable = (props) => {
    return (
        <>
            <Table striped bordered hover variant="dark" className="mt-5">
                <tbody>
                    {Object.keys(props.tableData).map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{item}</td>
                                <td className="text-center">{props.tableData[item]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <Button className="mt-5" variant="primary" onClick={props.onClickBack}>
        Go Back Home
            </Button>
        </>
    );
};

DataTable.propTypes = {
    tableData: PropTypes.object.isRequired,
    onClickBack: PropTypes.func.isRequired,
};

export default DataTable;
