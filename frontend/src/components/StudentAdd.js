import React,{Component} from "react";
import {Button, Form} from "react-bootstrap";
import axios from 'axios';
import './StudentAdd.css';

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

            <div className="container">
                <div className="jumbotron">
                    <Form name="blog_post" className="form-inline col-12" onSubmit={this.handleSubmit}>

                        <div className="form-group">
                        <Form.Label className="label-form" htmlFor="name">Adı</Form.Label>
                        <Form.Control id="name" name="name" type={Text} placeholder={"Adını giriniz"} onChange={this.handleChange.bind(this)} value={this.state.name}/>
                        </div>

                        <div className="form-group">
                        <Form.Label className="label-form" htmlFor="surname">Soyadı</Form.Label>
                        <Form.Control id="surname" name="surname" type={Text} placeholder={"Soyadını giriniz"} onChange={this.handleChange.bind(this)} value={this.state.surname}/>
                        </div>

                        <div className="form-group">
                        <Form.Label className="label-form" htmlFor="trid">Tc No</Form.Label>
                        <Form.Control id="trid" name="trid" type={Text} placeholder={"Tc No giriniz"} onChange={this.handleChange.bind(this)} value={this.state.trid}/>
                        </div>

                        <div className="form-group">
                        <Form.Label className="label-form" htmlFor="studentno">Öğrenci No</Form.Label>
                        <Form.Control id="studentno" name="studentno" type={Text} placeholder={"Öğrenci No giriniz"} onChange={this.handleChange.bind(this)} value={this.state.studentno}/>
                        </div>
                        <div className="form-group">
                        <Button type={"submit"}>Öğrenci Ekle</Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}