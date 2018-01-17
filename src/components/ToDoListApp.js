import React from "react";

import ToDoList from "./toDoList/ToDoList";
import AddToDo from "./AddToDo";
import Footer from "./footer/Footer"
import ClearCash from "./ClearCash";

export default (params) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <AddToDo/>
                    </td>
                    <td>
                        <ClearCash/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ToDoList filter={params.match.params.filter || 'all'}/>
                        <Footer/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}