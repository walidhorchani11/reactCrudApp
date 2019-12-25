import React, { Component } from 'react'

export class CourseItem extends Component {
  state = {
    isEdit: false,
  }

  //toggle state isEdit
  toggleIsEdit = () => {
    let {isEdit} = this.state;
    this.setState(
      {
        isEdit : !isEdit
      }
    )
  }

  //appel lors du submit
  updateCourse = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleIsEdit();
  }

  //renderCourse
  renderCourse = () => {
    let {course, deleteCourse} = this.props;
    return (
      <div>
          {course.name}
          <button id= {course.id} onClick={this.toggleIsEdit}>Edit</button>
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
        </div>
    )
  }

  //renderUpdateForm
  renderUpdateForm = () => {
    let {course, update} = this.props;
    return (
      <form onSubmit={this.updateCourse} >
        {/* defaultValue permet de mettre dans l'input une valeur par defauls */}
        {/* pour sauvgarder la nouvelle valeur entré par user on utilise "ref" pcq on a besoin de cet valeur dans la fct editCourse qui sera appele par updateCourse */}
          <input type="text" defaultValue={course.name} onChange = {update} ref={(v) => {this.input = v}} />
          <button>update course</button>
        </form>
    )
  } 

  render() {
    let { isEdit } = this.state;
    return (
      <>
       { isEdit ? this.renderUpdateForm() : this.renderCourse() }
      </>
    )
  }
}

export default CourseItem

