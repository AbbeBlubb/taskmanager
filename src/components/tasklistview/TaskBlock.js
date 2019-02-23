import React from 'react'
import { TaskBlockColorArea } from './TaskBlockColorArea'
import { TaskBlockTextArea } from './TaskBlockTextArea'
import { TaskBlockStatusArea } from './TaskBlockStatusArea'
import { TOGGLE_TODO } from "../../store/actions"
import { connect } from "react-redux"

class TaskBlock extends React.Component {

  render() {
    return (
      <article className='task-block'>
        <div
          onClick={() => this.props.toggleTodo(this.props.task.userId, this.props.task.id)}
          className='task-block__centered
                     waves-effect
                     waves-light-gray'>
          <div className='task-block__container '>
      
            <div className='flex'>
              <TaskBlockColorArea task={this.props.task} />
              <TaskBlockTextArea task={this.props.task} />
            </div>
      
            <TaskBlockStatusArea task={this.props.task} />
    
          </div>
        </div>
      </article>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  toggleTodo: (userId, taskId) => dispatch({type: TOGGLE_TODO, payload: {userId, taskId} })
})

export default connect(null, mapDispatchToProps)(TaskBlock)
