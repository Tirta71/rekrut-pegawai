import React from "react";

export default function ApplicantsTable({ filteredApplicants, statuses }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Posisi Yang Di Lamar</th>
          <th>Tahap </th>
          <th>Status </th>
        </tr>
      </thead>
      <tbody>
        {filteredApplicants.map((applicant) => {
          const status = statuses.find(
            (s) => s.ID_Pelamar === applicant.ID_Pelamar
          );
          return (
            <tr key={applicant.ID_Pelamar}>
              <td>{applicant.Nama}</td>
              <td>{applicant.Posisi_Yang_Dilamar}</td>
              <td>{status ? status.Tahap_Proses : "Belum Diproses"}</td>
              <td>{status ? status.Status_Proses : "Belum Diproses"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
