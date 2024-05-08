import React from "react";

class FormTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { email, password, address, city, country, acceptedRules } =
      this.props;

        return (
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>acceptRules</td>
                        <td>{acceptedRules.toString()}</td>
                    </tr>

                    <tr>
                        <td>address</td>
                        <td>{address}</td>
                    </tr>

                    <tr>
                        <td>city</td>
                        <td>{city}</td>
                    </tr>

                    <tr>
                        <td>country</td>
                        <td>{country}</td>
                    </tr>

                    <tr>
                        <td>email</td>
                        <td>{email}</td>
                    </tr>

                    <tr>
                        <td>password</td>
                        <td>{password}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default FormTable;
