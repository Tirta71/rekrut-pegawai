import React from "react";

export default function PositionsTabs({
  positions,
  activeTab,
  handleTabClick,
}) {
  return (
    <ul className="nav nav-tabs">
      {positions.map((position) => (
        <li className="nav-item" key={position.ID_Lowongan}>
          <a
            className={`nav-link ${
              activeTab === position.ID_Lowongan ? "active" : ""
            }`}
            id={`tab-${position.ID_Lowongan}`}
            data-bs-toggle="tab"
            href={`#content-${position.ID_Lowongan}`}
            onClick={() => handleTabClick(position)}
          >
            {position.posisi}
          </a>
        </li>
      ))}
    </ul>
  );
}
