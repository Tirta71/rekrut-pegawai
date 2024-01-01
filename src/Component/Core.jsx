import React, { useState, useEffect } from "react";
import axios from "axios";
import PositionsTabs from "./ForCore/PositionsTabs";
import SearchBar from "./ForCore/SearchBar";
import ApplicantsTable from "./ForCore/ApplicantsTablse";

export default function Core() {
  const [positions, setPositions] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/lowongan")
      .then((response) => setPositions(response.data.data))
      .catch((error) => console.error("Error fetching positions", error));

    axios
      .get("http://localhost:8000/api/pelamars")
      .then((response) => setApplicants(response.data.data))
      .catch((error) => console.error("Error fetching applicants", error));

    axios
      .get("http://localhost:8000/api/status_rekrutmen")
      .then((response) => setStatuses(response.data.data))
      .catch((error) => console.error("Error fetching statuses", error));
  }, []);

  const handleTabClick = (position) => {
    setActiveTab(position.ID_Lowongan);
  };

  const filteredApplicants = applicants
    .filter(
      (applicant) =>
        activeTab &&
        applicant.Posisi_Yang_Dilamar ===
          positions.find((position) => position.ID_Lowongan === activeTab)
            .posisi
    )
    .filter((applicant) =>
      applicant.Nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      {positions && positions.length > 0 ? (
        <>
          {positions === 0 && (
            <h1 className="text-center">Announcement Rekrutmen</h1>
          )}

          <div className="container">
            {positions.length > 0 ? (
              <>
                <h5>Posisi Yang dilamar</h5>
                <PositionsTabs
                  positions={positions}
                  activeTab={activeTab}
                  handleTabClick={handleTabClick}
                />

                <div className="tab-content">
                  {positions.map((position) => (
                    <div
                      className={`tab-pane fade ${
                        activeTab === position.ID_Lowongan ? "show active" : ""
                      }`}
                      id={`content-${position.ID_Lowongan}`}
                      key={position.ID_Lowongan}
                    >
                      <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                      />
                      <ApplicantsTable
                        filteredApplicants={filteredApplicants}
                        statuses={statuses}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>Belum ada pengumuman rekrutmen.</p>
            )}
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center" }}>
          Data pengumuman rekrutmen tidak tersedia.
        </p>
      )}
    </div>
  );
}
