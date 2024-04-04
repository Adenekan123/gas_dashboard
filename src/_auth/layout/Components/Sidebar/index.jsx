import { faAngleDown, faAngleUp, faBriefcase, faCog, faDashboard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'


function Sidebar() {

  const [resellerOpen,setResellerOpen] = useState(false);
  const toggleReseller = () => setResellerOpen(!resellerOpen);

  const [settingOpen, setSettingOpen] = useState(false);
  const toggleSetting = () => setSettingOpen(!settingOpen);

  const [helpOpen, setHelpOpen] = useState(false);
  const toggleHelp = () => setHelpOpen(!helpOpen);

  return (
    <div className=" bg-gray-800 text-white col-span-2">
    <div className="logo mb-4 p-3">
      <h1 className="text-2xl font-bold">
        <a href="#"> GAS</a>
      </h1>
    </div>

    {/* Menu */}
    <div className="text-gray-500 text-lg font-serif cursor-pointer mr-8">
      <div className="flex hover:bg-gray-950 mt-3 p-3 hover:text-red-600 rounded-r-full">
        <FontAwesomeIcon
          icon={faDashboard}
          className="fa-1x mr-1 bg-gray-950 p-2.5 rounded-full"
        />
        <h1>Dashboard</h1>
      </div>

      <div className="flex hover:bg-gray-950 mt-3 p-3 hover:text-red-600 rounded-e-full">
        <FontAwesomeIcon
          icon={faBriefcase}
          className="fa-1x mr-1 bg-gray-950 p-2.5 rounded-full"
        />
        <ul>
          <li className="cursor-pointer" onClick={toggleReseller}>
            Reseller 
            <FontAwesomeIcon
              icon={resellerOpen ? faAngleUp : faAngleDown}
              className={`ml-1 transition-transform ${
              resellerOpen ? 'transform rotate-360' : ''
              }`}
           />
          </li>
        </ul>
      </div>
      
      {resellerOpen && (
        <ul className="">
          <li className="hover:bg-gray-950 pl-4 text-left rounded-e-full">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      )}
      </div>

      {/* SETTINGS */}

      <div className="flex hover:bg-gray-950 mt-3 p-3 hover:text-red-600 rounded-e-full text-gray-500 text-lg font-serif cursor-pointer mr-8">
        <FontAwesomeIcon
          icon={faCog}
          className="fa-1x mr-1 bg-gray-950 p-2.5 rounded-full"
        />
        <ul>
          <li className="cursor-pointer" onClick={toggleSetting}>
            Settings 
            <FontAwesomeIcon
              icon={settingOpen ? faAngleUp : faAngleDown}
              className={`ml-1 transition-transform ${
              settingOpen ? 'transform rotate-360' : ''
              }`}
           />
          </li>
        </ul>
      </div>
      {settingOpen && (
        <ul className="text-gray-500 text-lg font-serif cursor-pointer mr-8">
          <li className="hover:bg-gray-950 pl-4 text-left rounded-e-full">
            <a href="#">Updates</a>
          </li>
          <li className="hover:bg-gray-950 pl-4 text-left rounded-e-full">
            <a href="#">Notification settings</a>
          </li>
          <li className="hover:bg-gray-950 pl-4 text-left rounded-e-full">
            <a href="#">Notification type</a>
          </li>
        </ul>
      )}

      {/* HELP */}
      <div className="flex hover:bg-gray-800 mt-3 p-3 hover:text-red-600 rounded-e-full text-gray-500 text-lg font-serif cursor-pointer mr-8">
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="fa-1x mr-1 bg-gray-950  p-2.5 rounded-full"
        />
        <ul>
          <li className="cursor-pointer" onClick={toggleHelp}>
            Help 
            <FontAwesomeIcon
              icon={helpOpen ? faAngleUp : faAngleDown}
              className={`ml-1 transition-transform ${
              helpOpen ? 'transform rotate-360' : ''
              }`}
           />
          </li>
        </ul>
      </div>
      {helpOpen && (
        <ul className="text-gray-500 text-lg font-serif cursor-pointer mr-8">
          <li className="hover:bg-gray-950 pl-4 text-left rounded-e-full">
            <a href="#">FAQ</a>
          </li>
          <li className="hover:bg-gray-950 pl-4 text-left rounded-e-full">
            <a href="#">Submit Ticket</a>
          </li>
          <li className="hover:bg-gray-950 pl-4 text-left rounded-e-full">
            <a href="#">Form and contact details</a>
          </li>
        </ul>
      )}
  </div>
  )
}

export default Sidebar