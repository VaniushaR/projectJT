import React, { Component } from 'react';
import { db } from '../Services/Firebase';
import firebase from '../Services/Firebase';
import { Col, Card } from 'react-materialize';
import './Projects.css';

class Projects extends Component {
  state = {
    items: [],
    inputProject: '',
    inputDescription: '',
    user: '',
    date: '',
    edit: false,
    id: ''
  };

  componentDidMount() {
    //reading from the db
    db.collection('SquadProjectsApp').onSnapshot(
      snapShots => {
        this.setState({
          items: snapShots.docs.map(doc => {
            return { id: doc.id, data: doc.data() };
          })
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  //Edition of the name of the project selected
  changeValue = e => {
    this.setState({
      inputProject: e.target.value
    });
  };
  //Edition of the project description
  changeDescription = e => {
    this.setState({
      inputDescription: e.target.value
    });
  };
  //getting current date and user
  action = () => {
    const { inputProject, inputDescription, edit } = this.state;
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
    //bolean to edit or add
    !edit
      ? db
          .collection('SquadProjectsApp')
          .add({
            project: inputProject,
            description: inputDescription,
            date: today,
            user: firebase.auth().currentUser.displayName
          })
          .then(() => {
            console.log('Added');
          })
          .catch(() => {
            console.log('something was wrong');
          })
      : this.update(today);
  };

  //getting an existind id of project and settinf the state
  getProject = id => {
    let docRef = db.collection('SquadProjectsApp').doc(id);
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          this.setState({
            inputProject: doc.data().project,
            inputDescription: doc.data().description,
            edit: true,
            id: doc.id
          });
        } else {
          console.log('The doc does not exist!');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  //updating from and to the database:
  update = today => {
    const { id, inputProject, inputDescription } = this.state;
    db.collection('SquadProjectsApp')
      .doc(id)
      .update({
        project: inputProject,
        description: inputDescription,
        date: today,
        user: firebase.auth().currentUser.displayName
      })
      .then(() => {
        console.log('updated');
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteItem = id => {
    db.collection('SquadProjectsApp')
      .doc(id)
      .delete();
  };

  render() {
    const { items, inputProject, inputDescription } = this.state;
    return (
      <section className="panel">
        <Col m={6} s={10}>
          <Card
            className="blue lighten-5"
            textClassName="black-text"
            title="Agregar nuevo"
            actions={[
              <a onClick={this.action}>{this.state.edit ? 'Update' : 'Add'}</a>
            ]}
          >
            <input
              placeholder="Project's Name"
              value={inputProject}
              onChange={this.changeValue}
            />
            <input
              placeholder="Description"
              value={inputDescription}
              onChange={this.changeDescription}
            />
          </Card>
        </Col>
        {items && items !== undefined
          ? items.map((item, key) => (
              <Col key={key} m={6} s={10}>
                <Card
                  key={key}
                  className="white"
                  textClassName="black-text"
                  title={item.data.project}
                  actions={[
                    <div>
                      <a
                        key={key}
                        onClick={() => {
                          this.getProject(item.id);
                        }}
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          this.deleteItem(item.id);
                        }}
                      >
                        Delete
                      </a>
                    </div>
                  ]}
                >
                  <br />
                  <p className="description">{item.data.description}</p>
                  <br />
                  <p>Added at {item.data.date}</p>
                  <br />
                  <p>
                    by<a> {item.data.user}.</a>
                  </p>
                </Card>
              </Col>
            ))
          : null}
      </section>
    );
  }
}

export default Projects;

/*
<Col m={6} s={12}>
                  <Card
                    className="blue lighten-5"
                    textClassName="black-text"
                    title="Agregar nuevo"
                    actions={[<a>ADD</a>]}
                  >
                    <input placeholder="Project's Name" id="input-n" />
                    <input placeholder="Description" />
                  </Card>
                </Col>

*/
