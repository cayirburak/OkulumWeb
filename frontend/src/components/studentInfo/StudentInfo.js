import React,{Component} from "react";
import {Button, Table} from "react-bootstrap";
import axios from "axios";
import './StudentInfo.css';
import {Link} from "react-router-dom";

export class StudentInfo extends Component {

    state = {
        students: []
    }

    async componentDidMount() {
        try{
            axios.get(`http://192.168.1.37:8080/StudentsAPIProject/students/all`)
                .then(res => {
                    console.log(res.data);
                    this.setState({students: res.data});
                })
        }
        catch (err){
            console.log("Error fetching data-----------", err);
        }

    }

    deleteStudent(id){
        console.log("silme butonuna tıklandi : "+id)

        try{
            axios.delete(`http://192.168.1.37:8080/StudentsAPIProject/students/Studentdelete/`+ id)
                .then(res => {
                    try{
                        axios.get(`http://192.168.1.37:8080/StudentsAPIProject/students/all`)
                            .then(res => {
                                console.log(res.data);
                                this.setState({students: res.data});
                            })
                    }
                    catch (err){
                        console.log("Error fetching data-----------", err);
                    }
                })
        }
        catch (err){
            console.log("Error delete operation-----------", err);
        }
    }

    renderStudents = (students, index) => {
        return(
            <tr key={index}>
                <td>{students.name}</td>
                <td>{students.surname}</td>
                <td>{students.trid}</td>
                <td>{students.studentno}</td>
                <td>
                    <Button className="btn-table btn-primary">
                        <i className="fa fa-edit"></i>
                    </Button>
                    <Button onClick={this.deleteStudent.bind(this, students.id)} className="btn-table btn-danger">
                        <i className="fa fa-trash-o"></i>
                    </Button>
                </td>
            </tr>
        )
    }
    render(){
        return(
            <div className="container-table">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Tr Id</th>
                        <th>Student No</th>
                        <th>Actions</th>
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