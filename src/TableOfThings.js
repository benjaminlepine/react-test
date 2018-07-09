// How use in App.js : <HelloUser user='Benjamin'/>
import React, {Component} from 'react'

class TableOfThings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;
        return <div>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
            </table>
        </div>
    };
}

export default TableOfThings