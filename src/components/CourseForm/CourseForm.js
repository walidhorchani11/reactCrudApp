import React from 'react';

const CourseForm = (props) => {
  let {add, change, current} = props;
    return (
      <div>
        <form onSubmit={add} >
          <input type="text" placeholder="enter a course name" onChange={change} value = {current.name} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
}

export default CourseForm;
