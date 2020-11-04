import React,{Component} from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

export class StudentInfo extends Component {

    state = {
        students: []
    }

    async componentDidMount() {
        try{
            axios.get(`http://localhost:8080/StudentsAPIProject/students/all`)
                .then(res => {
                    console.log(res.data);
                    this.setState({students: res.data});
                })
        }
        catch (err){
            console.log("Error fetching data-----------", err);
        }

    }

    renderStudents = (students, index) => {
        return(
            <tr key={index}>
                <td>{students.name}</td>
                <td>{students.surname}</td>
                <td>{students.trid}</td>
                <td>{students.studentno}</td>
            </tr>
        )
    }
    render(){
        return(
            <div className="row">
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Tr Id</th>
                        <th>Student No</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map(this.renderStudents)}
                    </tbody>
                </Table>
            </div>
        )
    }
}