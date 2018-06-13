import React from "react"
import "./task.css"

export default class Task extends React.Component {

  render() {
    return (
      <div className="task">
        <div className="container borderbox">

          <div className="firsthalf">
            <div className="first">
              <div className="icon">
                Ikon
              </div>
            </div>

            <div className="second">
              <div className="medium">
                {this.props.title}
              </div>
            </div>
          </div>

          <div className="secondhalf">
            <div className="third">
              <div className="icon">
                Ikon
              </div>
              <div className="tiny gray">
                Klar / ej klar
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}
