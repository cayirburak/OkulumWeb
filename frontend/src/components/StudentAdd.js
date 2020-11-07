import React,{Component} from "react";
import {Button, Form} from "react-bootstrap";
import axios from 'axios';

export class StudentAdd extends Component {

    state = {
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

        axios.post(`http://192.168.1.37:8080/StudentsAPIProject/students/post`, {
            name: this.state.name,
            surname: this.state.surname,
            trid: this.state.trid,
            studentno: this.state.studentno
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    render(){
        return(
            <div className="row">
                <div className="col-12">
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
                        <Button type={"submit"}>Öğrenci Ekle</Button>
                    </Form>
                </div>
            </div>
        )
    }
}