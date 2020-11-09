import React,{Component} from "react";
import {Button, Form, Table} from "react-bootstrap";
import axios from "axios";
import './StudentInfo.css';
import {Link} from "react-router-dom";

export class StudentInfo extends Component {

    state = {
        students: [],
        editMode: false,
        id : '',
        name: '',
        surname: '',
        trid: '',
        studentno: ''
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const id = this.state.id
        axios.put(`http://192.168.1.37:8080/StudentsAPIProject/students/Studentupdate/` + id , {
            name: this.state.name,
            surname: this.state.surname,
            trid: this.state.trid,
            studentno: this.state.studentno
        })
            .then(res => {
                this.getStudents()
                this.setState({editMode: false})
            })
    }

    async componentDidMount() {
        this.getStudents()
    }

    getStudents(){
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

    getStudentById(id){
        if(this.state.editMode === false){
            this.setState({
                editMode : true
            })
        }
        try{
            axios.get(`http://192.168.1.37:8080/StudentsAPIProject/students/Students/`+ id)
                .then(res => {
                    console.log(res.data);
                    this.setState({id:res.data.id})
                    this.setState({name:res.data.name})
                    this.setState({surname:res.data.surname})
                    this.setState({trid:res.data.trid})
                    this.setState({studentno:res.data.studentno})
                })
        }
        catch (err){
            console.log("Error fetching data-----------", err);
        }
    }

    closeUpdateMode = () => {
        this.setState({
            editMode : false
        })
    }

    deleteStudent(id){

        try{
            axios.delete(`http://192.168.1.37:8080/StudentsAPIProject/students/Studentdelete/`+ id)
                .then(res => {
                    this.getStudents()
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
                    <Button onClick={this.getStudentById.bind(this, students.id)} className="btn-table btn-primary">
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
        let editMode = this.state.editMode;
        return(
            <div className="container-table">
                { editMode ? <div className="jumbotron">

                    <div className="col-12">
                        <Button onClick={this.closeUpdateMode} className="close-button btn-table btn-danger">
                            <i className="fa fa-times"></i>
                        </Button>
                        <Form name="blog_post" className="form-horizontal col-4" onSubmit={this.handleSubmit}>

                            <Form.Label>Adı</Form.Label>
                            <Form.Control name="name" type={Text} placeholder={"Adını giriniz"} onChange={this.handleChange.bind(this)} value={this.state.name}/>

                            <Form.Label>Soyadı</Form.Label>
                            <Form.Control name="surname" type={Text} placeholder={"Soyadını giriniz"} onChange={this.handleChange.bind(this)} value={this.state.surname}/>

                            <Form.Label>Tc No</Form.Label>
                            <Form.Control name="trid" type={Text} placeholder={"Tc No giriniz"} onChange={this.handleChange.bind(this)} value={this.state.trid}/>

                            <Form.Label>Öğrenci No</Form.Label>
                            <Form.Control name="studentno" type={Text} placeholder={"Öğrenci No giriniz"} onChange={this.handleChange.bind(this)} value={this.state.studentno}/>

                            <br/>
                            <Button type={"submit"}>Öğrenci Güncelle</Button>
                        </Form>
                    </div></div> : <div></div>}
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