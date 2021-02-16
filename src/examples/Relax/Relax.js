import React from 'react'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import AlarmIcon from '@material-ui/icons/Alarm';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BackupIcon from '@material-ui/icons/Backup';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import './Relax.css';

const Relax = () => {
  return (
    <div className="relax-container">
      <div className="relax-circle"></div>
      <div className="relax-line"></div>
      <div className="relax-info">
        What Yoga and meditation can help you?
      </div>

      <div className="relax-textBg">
      <div className="relax-text relax"><h2>RE
        <div>L</div><div>AX</div></h2></div>
      <div className="relax-text focus"><h2>FO
        <div>C</div><div>US</div></h2></div>
      </div>
        <div className="menu-relax">
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-violet">
            <AccessibilityNewIcon style={{ fontSize: 40 }} />
            <p className="btn-text">BODY</p>
          </div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-neonsilver">
            <AirlineSeatIndividualSuiteIcon style={{ fontSize: 40 }} />
            <p className="btn-text">SLEEP</p>
            </div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-darksilver">
            <AlarmIcon style={{ fontSize: 40 }} />
            <p className="btn-text">TIME</p>
            </div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-silver">
            <AllInclusiveIcon style={{ fontSize: 40 }} />
            <p className="btn-text">MIND</p>
            </div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-violet">
            <AutorenewIcon style={{ fontSize: 40 }} />
            <p className="btn-text">RECOVER</p>
            </div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-neonpink">
            <BackupIcon style={{ fontSize: 40 }} />
            <p className="btn-text">SOUL</p>
            </div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-pink">
            <CallSplitIcon style={{ fontSize: 40 }} />
            <p className="btn-text">RELATION</p>
            </div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-lightpink">
            <AttachMoneyIcon style={{ fontSize: 40 }} />
            <p className="btn-text">MONEY</p>
            </div>
        </div>
    </div>
  )
}

export default Relax

