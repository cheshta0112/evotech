import React from "react";
import DashboardIcon from "../src/assets/icons/DashboardIcon";
import ApplicationIcon from "../src/assets/icons/ApplicationIcon";
import { useState } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="heading">
          <span className="DashboardHeading"> DASHBOARD </span>
          <span className="ArrowIcon">
            <img src="/images/arrow-double-left-active.png" />
          </span>
        </div>

        <div className="Dashboard">
          <ul>
            <li>
              <a href="#">
                <span className="DashboardIcon">
                  <DashboardIcon />
                </span>
                <span className="Dashboardli">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="custom">CUSTOM</div>

        <div className="Application">
          <ul>
            <li>
              <a href="#">
                <span className="Applications">
                  <span className="ApplicationIcon">
                    <ApplicationIcon />
                  </span>
                  Applications
                </span>

                <img
                  className="downarrow"
                  src="https://cdn-icons-png.flaticon.com/128/3426/3426514.png"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="listItem">
          <ul>
            <li>
              <a href="#">
                - Users
                <img src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png" />
              </a>
            </li>

            <li>
              <a href="#">
                - Contacts
                <img src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png" />
              </a>
            </li>

            <li>
              <a href="#">
                - Chat
                <img src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png" />
              </a>
            </li>
          </ul>
        </div>

        <div className="page">
          <ul>
            <li className="pageLi">
              <a href="#">
                <span>
                  <img className="PagesIcon" src="/images/barcode-read.png" />
                  Pages
                </span>

                <img
                  className="PagesArrowIcon"
                  src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Toggle button for smaller screens */}

      <img
        className="toggle-btn"
        onClick={toggleSidebar}
        src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
      />
    </div>
  );
}
