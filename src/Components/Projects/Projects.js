import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';
import firebase from '../Services/Firebase';
import { db } from '../Services/Firebase';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  //function to update the projects addet to the data base
  componentDidMount() {
    db.collection('projects')
      .get()
      .then(
        snapShots => {
          this.setState({
            projects: snapShots.docs.map(item => {
              return { id: item.id, data: item.data() };
            })
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div>
        {this.state.projects && this.state.projects !== undefined
          ? this.state.projects.map((item, key) => {
              console.log(item.data, key);
              console.log(item.data.AddProject.date);
              const projectsDB = item.data.AddProject;
              console.log(projectsDB.project);
              return (
                <Col m={6} s={12}>
                  <Card
                    key={key}
                    className="white"
                    textClassName="black-text"
                    title={projectsDB.project}
                    actions={[
                      <div>
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>{' '}
                      </div>
                    ]}
                  >
                    <p>{projectsDB.date}</p>
                    <p>{projectsDB.description}</p>
                  </Card>
                </Col>
              );
            })
          : null}
      </div>
    );
  }
}

export default Projects;
