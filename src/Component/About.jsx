/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowDetails(true);
  };

  return (
    <div id="about">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="row g-0 about-bg rounded overflow-hidden">
                <div className="col-6 text-start">
                  <img className="img-fluid w-100" src="img/about-1.jpg" />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid"
                    src="img/about-2.jpg"
                    style={{ width: "85%", marginTop: "15%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid"
                    src="img/about-3.jpg"
                    style={{ width: "85%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid w-100" src="img/about-4.jpg" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                Kami Membantu Mendapatkan Pekerjaan Terbaik dan Menemukan Bakat
              </h1>
              <p className="mb-4">
                Sementara itu, kita sedang mengembangkan pengetahuan dan
                keterampilan. Pengalaman ini penuh dengan tantangan dan
                keberagaman
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Kita berusaha
                memahami dan memanfaatkan setiap kesempatan
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Di tengah
                perjalanan ini, kita membangun fondasi yang kokoh untuk mencapai
                kemajuan dan mencapai potensi penuh kita.
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Kita
                menjelajahi pengetahuan, mengasah keterampilan,
              </p>
              {showDetails ? (
                <div>
                  <i className="fa fa-check text-primary me-3"></i>Setiap
                  langkah adalah proses pembelajaran, dan kita bertekad untuk
                  tumbuh dan berkembang
                </div>
              ) : (
                <button
                  className="btn btn-primary py-3 px-5 mt-3"
                  onClick={handleReadMoreClick}
                >
                  Baca Selengkapnya
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
