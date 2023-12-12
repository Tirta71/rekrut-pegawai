import React from "react";

export default function SearchDataPelamar() {
  return (
    <div>
      {/* <!-- Search Start --> */}
      <div
        className="container-fluid bg-primary mb-5 wow fadeIn "
        data-wow-delay="0.1s"
        style={{ padding: "35px" }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="mx-auto">
              <strong
                style={{
                  color: "white",
                  fontFamily: "monospace",
                  fontSize: "20px",
                }}
              >
                announcement
              </strong>
              <input
                type="text"
                className="form-control border-0 w-100"
                placeholder="Masukan Nama Anda"
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontFamily: "monospace",
                }}
              />
            </div>
            <div className="col-md-2 mx-auto">
              <button className="btn btn-dark border-0 w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Search End --> */}
    </div>
  );
}
