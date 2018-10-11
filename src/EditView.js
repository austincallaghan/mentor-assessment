import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { deleteTask, editTask, markCompleted } from './reducer';

import { connect } from 'react-redux';

class EditView extends Component {
    render() {
        return (
            <div className='editView'>
          <div>
            <label>Task</label>
            <input></input>
            <button>Complete</button>
            <label>Description</label>
            <input></input>
            <div className='buttonBox'>
              <button>Save</button>
              <button>Cancel</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      tasks:state.tasks
    } 
  }
  
  const mapDispatchToProps = {
    deleteTask, markCompleted, editTask
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditView)