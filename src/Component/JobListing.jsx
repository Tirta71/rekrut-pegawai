/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobListing() {
  const [activeTab, setActiveTab] = useState(1);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const navigate = useNavigate();

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/lowongan/");
      setAllJobs(response.data.data);
      // Initially, display only the first job
      setDisplayedJobs([response.data.data[0]]);
    } catch (error) {
      console.error("Error fetching data from API", error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [activeTab]);

  const handleBrowseMoreClick = () => {
    if (!showAllJobs) {
      setDisplayedJobs(allJobs);
    } else {
      setDisplayedJobs([allJobs[0]]);
    }

    setShowAllJobs(!showAllJobs);
  };

  const handleApplyNowClick = (idLowongan) => {
    // Navigate to the DetailLowongan route with the corresponding ID_Lowongan
    navigate(`/DetailLowongan/${idLowongan}`);
  };

  return (
    <div id="jobs">
      <div className="container-xxl py-5">
        <div className="container">
          {displayedJobs.length === 0 ? (
            <h1 style={{ textAlign: "center" }}>Tidak ada Lowongan</h1>
          ) : (
            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Job Listing
            </h1>
          )}

          <div
            className="tab-class text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="tab-content">
              <div
                id={`tab-${activeTab}`}
                className={`tab-pane fade show p-0 active`}
              >
                {displayedJobs.map((job, index) => (
                  <div className="job-item p-4 mb-4" key={index}>
                    <div className="row g-4">
                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                        <div className="text-start ps-4">
                          <h5 className="mb-3">{job.posisi}</h5>
                          <span className="text-truncate me-3">
                            <i className="fa fa-map-marker-alt text-primary me-2"></i>
                            {job.deskripsi_pekerjaan}
                          </span>
                          <span className="text-truncate me-3">
                            <i className="far fa-clock text-primary me-2"></i>
                            Open {job.tanggal_buka}
                          </span>
                          <span className="text-truncate me-0">
                            <i className="far fa-money-bill-alt text-primary me-2"></i>
                            {Number(job.kualifikasi).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div className="d-flex mb-3">
                          <a className="btn btn-light btn-square me-3" href="#">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleApplyNowClick(job.ID_Lowongan)}
                          >
                            Apply Now
                          </button>
                        </div>
                        <small className="text-truncate">
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          Date Line: {job.tanggal_tutup}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
                {displayedJobs.length > 0 && (
                  <button
                    className="btn btn-primary py-3 px-5"
                    onClick={handleBrowseMoreClick}
                  >
                    {showAllJobs ? "Close" : "Browse More Jobs"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
