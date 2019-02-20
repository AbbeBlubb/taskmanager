import React from "react"
import document from "../../assets/document.png"
import checked from "../../assets/checked.png"
import clock from "../../assets/clock.png"

export default class Task extends React.Component {

  render() {
    return (
      <article className="task">
        <div className="task__container waves-effect
                        waves-light-gray">

          <div className="task__stretch">
            <div className="task__color">
              <img
                className={this.props.task.completed
                  ? "icon--small icon--done"
                  : "icon--small icon--pending"}
                src={document}
                alt="Task: blue for pending, green for done"
                title="Task: blue for pending, green for done" />
            </div>

            <div className="task__content">
              <p className="task__text">
                {this.props.task.title}
              </p>
            </div>
          </div>

          <div className="task__stretch">
            {this.props.task.completed
              ?
              <div className="task__status">
                <img className="icon--small" src={checked} alt="This task is done" title="This task is done" />
                <div className="task__status-description">
                  Done
                </div>
              </div>
              :
              <div className="task__status">
                <img className="icon--small" src={clock} alt="This task is pending" title="This task is pending" />
                <div className="task__status-description">
                  Pending
                </div>
              </div>
            }
          </div>

        </div>
      </article>
    )
  }

}
