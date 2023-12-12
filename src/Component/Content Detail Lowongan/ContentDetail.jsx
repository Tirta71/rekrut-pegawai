import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ContentDetail.css"; // Import your CSS file
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function ContentDetail() {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [formData, setFormData] = useState({
    Nama: "",
    Alamat: "",
    Nomor_Telepon: "",
    Email: "",
    Posisi_Yang_Dilamar: "",
    Pengalaman_Kerja: "",
    Riwayat_Pendidikan: "",
    Skill: "",
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/lowongan/${id}`
        );
        setJobDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching job details", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const createJobDetailBlock = (label, value) => (
    <div className="descPekerjaan">
      <strong>{label}</strong>
      <hr />
      <ul>
        <li>{value}</li>
      </ul>
    </div>
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "id-ID",
      options
    );
    return formattedDate;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailExists = await checkEmailExists(formData.Email);

    if (emailExists) {
      Swal.fire({
        title: "Warning!",
        text: "Email Sudah Terdaftar",
        icon: "warning",
      });
      return;
    }

    const confirmationResult = await Swal.fire({
      title: "Are you sure?",
      text: "Data nya Sudah Benar ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yaa",
    });

    if (confirmationResult.isConfirmed) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/pelamars/",
          {
            ...formData,
          }
        );

        console.log("Data successfully submitted:", response.data);

        Swal.fire({
          title: "Success!",
          text: "Data successfully submitted",
          icon: "success",
        });

        setFormData({
          Nama: "",
          Alamat: "",
          Nomor_Telepon: "",
          Email: "",
          Posisi_Yang_Dilamar: "",
          Pengalaman_Kerja: "",
          Riwayat_Pendidikan: "",
          Skill: "",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Error submitting data",
          icon: "error",
        });

        console.error("Error submitting data:", error);
      }
    }
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/check-email?email=${email}`
      );
      return response.data.exists;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00b074"
          fill-opacity="1"
          d="M0,256L34.3,240C68.6,224,137,192,206,149.3C274.3,107,343,53,411,64C480,75,549,149,617,165.3C685.7,181,754,139,823,144C891.4,149,960,203,1029,240C1097.1,277,1166,299,1234,282.7C1302.9,267,1371,213,1406,186.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <div className="content-detail-container">
        <div className="isi-contentDetail">
          {jobDetails && (
            <div className="posisi">
              <p>{jobDetails.posisi}</p>
            </div>
          )}
          <div className="wrapper-content">
            {createJobDetailBlock(
              "Lokasi Penempatan",
              jobDetails?.deskripsi_pekerjaan || "Not available"
            )}
            {createJobDetailBlock(
              "Pendapatan",
              Number(jobDetails?.kualifikasi || 0).toLocaleString()
            )}
            {createJobDetailBlock(
              "Tanggal Pendaftaran",
              `${formatDate(jobDetails?.tanggal_buka)} - ${formatDate(
                jobDetails?.tanggal_tutup
              )}`
            )}
          </div>

          <div className="formPendaftaran mt-5">
            <p>Formulir Pendaftaran</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Nama">Nama</label>
                <input
                  type="text"
                  id="Nama"
                  name="Nama"
                  value={formData.Nama}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Alamat">Alamat</label>
                <input
                  type="text"
                  id="Alamat"
                  name="Alamat"
                  value={formData.Alamat}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Nomor_Telepon">Nomor Telepon</label>
                <input
                  type="text"
                  id="Nomor_Telepon"
                  name="Nomor_Telepon"
                  value={formData.Nomor_Telepon}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Posisi_Yang_Dilamar">Posisi Yang Dilamar</label>
                <input
                  type="text"
                  id="Posisi_Yang_Dilamar"
                  name="Posisi_Yang_Dilamar"
                  value={
                    formData.Posisi_Yang_Dilamar ||
                    (jobDetails && jobDetails.posisi) ||
                    ""
                  }
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="Pengalaman_Kerja">Pengalaman Kerja</label>
                <textarea
                  id="Pengalaman_Kerja"
                  name="Pengalaman_Kerja"
                  value={formData.Pengalaman_Kerja}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="Riwayat_Pendidikan">Riwayat Pendidikan</label>
                <textarea
                  id="Riwayat_Pendidikan"
                  name="Riwayat_Pendidikan"
                  value={formData.Riwayat_Pendidikan}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="Skill">Skill</label>
                <input
                  type="text"
                  id="Skill"
                  name="Skill"
                  value={formData.Skill}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
