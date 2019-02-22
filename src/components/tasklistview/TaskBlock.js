import React from "react"
import { TaskBlockColorArea } from "./TaskBlockColorArea"
import { TaskBlockTextArea } from "./TaskBlockTextArea"
import { TaskBlockStatusArea } from "./TaskBlockStatusArea"

export default class TaskBlock extends React.Component {

  render() {
    return (
      <article className="task-block">
        <div className='task-block__centered
                        waves-effect
                        waves-light-gray'>
          <div className="task-block__container ">
      
            <div className="flex">
              <TaskBlockColorArea task={this.props.task}/>
              <TaskBlockTextArea task={this.props.task}/>
            </div>
      
            <TaskBlockStatusArea task={this.props.task} />
    
          </div>
        </div>
      </article>
    )
  }

}
