// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="heading">Alert Notifications</h1>

    <Notification>
      <div className="inner-part">
        <AiFillCheckCircle className="icon" />
        <h1 className="inner-heading">Success</h1>
      </div>

      <p className="description">You can access all the files in the folder</p>
    </Notification>

    <Notification>
      <div className="inner-part">
        <RiErrorWarningFill className="icon" />
        <h1 className="inner-heading">Error</h1>
      </div>

      <p className="description">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </Notification>

    <Notification>
      <div className="inner-part">
        <MdWarning className="icon" />
        <h1 className="inner-heading">Warning</h1>
      </div>

      <p className="description">
        Viewers of the file can see comments and suggestions
      </p>
    </Notification>

    <Notification>
      <div className="inner-part">
        <MdInfo className="icon" />
        <h1 className="inner-heading">Info</h1>
      </div>

      <p className="description">Anyone on the internet can view these file</p>
    </Notification>
  </div>
)

export default AlertNotifications
