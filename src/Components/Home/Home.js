import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';
import './Home.css';
import Projects from '../Projects/Projects';
import firebase from '../Services/Firebase';
import { db } from '../Services/Firebase';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      project: null,
      user: null,
      description: null,
      date: null
    };
  }

  componentDidMount() {
    //stting date and current user in the state
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;

    this.setState({
      user: firebase.auth().currentUser.displayName,
      date: today
    });
  }

  projectName = event => {
    this.setState({
      project: event.target.value
    });
  };

  projectDescription = event => {
    this.setState({
      description: event.target.value
    });
  };

  addNewProject = () => {
    //variables to keep the state on the promises
    console.log('add');
    const AddProject = this.state;
    const newProject = this.state.project;
    const currentUser = this.state.user;
    //create and keep the order in the collection orders in firestore db
    db.collection('projects')
      .add({ AddProject })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
        //confirm the project has been sended
        alert(
          'Ready! Your project ' +
            newProject +
            ' has been saved.' +
            ' Nice job ' +
            currentUser +
            '!!'
        );
        const eraseInputN = document.getElementById('input-n');
        const eraseInputD = document.getElementById('input-d');
        eraseInputN.value = '';
        eraseInputD.value = '';
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  render() {
    //if the User have an a succesful login:
    return (
      <div>
        <Row>
          <Col s={6} m={6} l={6}>
            <h2>My projects</h2>
          </Col>
          <Col s={5} m={5} l={5}>
            <h2 className="user-name">
              {firebase.auth().currentUser.displayName}
            </h2>
          </Col>
          <Col s={1} m={1} l={1}>
            <img
              alt="user picture"
              src={firebase.auth().currentUser.photoURL}
              className="user-pic"
            />
          </Col>
        </Row>
        <section className="panel">
          <Col m={6} s={12}>
            <Card
              className="blue lighten-5"
              textClassName="black-text"
              title="Agregar nuevo"
              actions={[<a onClick={this.addNewProject.bind()}>ADD</a>]}
            >
              <input
                placeholder="Project's Name"
                id="input-n"
                onChange={this.projectName.bind(this)}
              />
              <input
                placeholder="Description"
                id="input-d"
                onChange={this.projectDescription.bind(this)}
              />
            </Card>
          </Col>
          <Projects />
        </section>
      </div>
    );
  }
}

export default Home;
