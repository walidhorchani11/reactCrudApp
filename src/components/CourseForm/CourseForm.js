import React from 'react';

const CourseForm = ({add, change, current}) => {
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
