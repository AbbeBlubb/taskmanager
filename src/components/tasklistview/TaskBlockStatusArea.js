import React from 'react'
import checked from '../../assets/checked.png'
import clock from '../../assets/clock.png'
import * as PropTypes from 'prop-types'

export function TaskBlockStatusArea(props) {
  return (
    <div className='flex'>
      {props.task.completed
        ?
        <div className='task-block-status-area'>
          <img className='icon--small' src={checked} alt='This task is done'
               title='This task is done'/>
          <div className='task-block-status-area__status-text'>
            Done
          </div>
        </div>
        :
        <div className='task-block-status-area'>
          <img className='icon--small' src={clock} alt='This task is pending'
               title='This task is pending'/>
          <div className='task-block-status-area__status-text'>
            Pending
          </div>
        </div>
      }
    </div>
  )
}

TaskBlockStatusArea.propTypes = { task: PropTypes.any }
