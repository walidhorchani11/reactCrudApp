import React, { Component } from 'react';
import AddItem from './components/CourseForm/CourseForm';
import CourseItem from './components/CourseList/CourseItem';

class App extends Component {

  state = {
    courses: [
      {
        id: Math.random(),
        name: 'Html'
      },
      {
        id: Math.random(),
        name: 'CSS'
      },
      {
        id: Math.random(),
        name: 'PHP'
      }
    ],

    current: {
      id: '',
      name: ''
    }
  }

  deleteCourse = (id) => {
    let courses = this.state.courses.filter(course => course.id !== id);
    this.setState({
      courses
    });
  }

  update = (e) => {
    console.log('change in updated block')
    this.setState({
      current: {
        id: Math.random(),
        name: e.target.value
      }
    });
  }

  add = (e) => {
    e.preventDefault();
    let { courses, current } = this.state;

    let exist1 = this.checkExist(current);

    if (exist1 === false) {
      courses.push(current);
      this.setState({
        courses
      })
    }

    this.setState({
      current: {
        id: '',
        name: ''
      }
    });


    console.log("course add");
  }

  checkExist = (course) => {
    let { courses } = this.state;
    let exist1 = false;

    courses.map(elem => {
      exist1 = elem.name === course.name ? true : exist1;
    });

    return exist1;
  }

  editCourse = (index, value) => {
    //tous simplement on prend toutes les courses, ensuite on change le course adequate , enfin on l'affecte les nouveaus courses dans le state
    let { courses } = this.state;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => (
      <CourseItem key={index} course={course} deleteCourse={this.deleteCourse} index={index} editCourse={this.editCourse} />
    ))
    
    const renderBlockApp = (<section>
      <h2>
        Add Course
      </h2>
      <AddItem add={this.add} change={this.update} current={this.state.current} />
      {courseList}
    </section>)

    return (
      <>
      { renderBlockApp }
      </>
    )
  }
}

export default App;
