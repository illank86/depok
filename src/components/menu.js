import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Sekilas Depok</li>
      <li onClick={close}>Pemerintahan</li>
      <li onClick={close}>Berita</li>
      <li onClick={close}>Instansi</li>
      <li onClick={close}>Layanan</li>
      <li onClick={close}>Direktori Kota</li>
    </ul>
  </div>
);
