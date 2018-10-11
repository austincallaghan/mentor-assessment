import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchTasks, createTask, deleteTask, markCompleted } from './reducer';

import routes from './routes'

import { connect } from 'react-redux';
// import './App.css';


class MainView extends Component {
  constructor() {
    super();
    this.state = {
      showEdit: false,
      inpTitle:''
    }
  }

  
  componentDidMount() {
    this.props.fetchTasks() 
  }
  handleTitle = (e) => {
    // console.log(e.target.value)
    this.setState({inpTitle: e.target.value})
  }
  onSubmit (e) {
    e.preventDefault();  
  }
  

  render() {
    console.log(this.props.tasks)
    const { tasks } = this.props
    let tasklist = tasks.map((task, index) => {
      return <div key={index}>
          <Link to={`/edit/${task.id}`}><h3>{task.title}</h3></Link>
          {/* <button onClick={() => this.props.markCompleted(task.id)}>Complete</button> */}
          <h1 onClick={() => this.props.deleteTask(task.id)}>X</h1>
        </div>
    })
    return (
      
      <div className="App">
      {routes}
        <div className='todoView'> 
            <form onSubmit={(e) => this.onSubmit(e)} className='head'>
                <h1>TO-DO:</h1>
                <input onChange={(e) => this.handleTitle(e)}></input>
                <button onClick={() => this.props.createTask(this.state.inpTitle)}>Add new To-do</button>
            </form>
            <div className='listBody'>
              {tasklist}
            </div>
        </div>
        
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    tasks:state.tasks
  } 
}

const mapDispatchToProps = {
  fetchTasks, createTask, deleteTask, markCompleted
}


export default connect(mapStateToProps, mapDispatchToProps)(MainView)