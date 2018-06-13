import React from "react"
import "./task.css"
import document from "../../media/document.png"
import checked from "../../media/checked.png"
import clock from "../../media/clock.png"

export default class Task extends React.Component {

  render() {
    return (
      <div className="task">
        <div className="container borderbox">

          <div className="firsthalf">
            <div className="first">
              <div className="icon">
                <img src={document} alt="Task" />
              </div>
            </div>

            <div className="second">
              <div className="medium">
                {this.props.title}
              </div>
            </div>
          </div>

          <div className="secondhalf">


          {this.props.completed
            ? <div className="third">
                <div className="icon">
                  <img src={checked} alt="The task is done" />
                </div>
                <div className="tiny gray">
                  Done
                </div>
              </div>
            : <div className="third">
                <div className="icon">
                  <img src={clock} alt="The task is done" />
                </div>
                <div className="tiny gray">
                  Pending
                </div>
              </div>
          }




          </div>

        </div>
      </div>
    )
  }

}
