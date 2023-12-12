import React, { useEffect, useState } from "react";
import ContentDetail from "../Component/Content Detail Lowongan/ContentDetail";
import NavbarDetailLowongan from "../Component/Navbar/NavbarDetailLowongan";

export default function DetailLowongan() {
  return (
    <div className="container-xxl bg-white p-0">
      <NavbarDetailLowongan />
      <ContentDetail />
    </div>
  );
}
