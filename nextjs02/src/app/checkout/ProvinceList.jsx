"use client";

import { useState } from "react";
import useSWR from "swr";

const getProvince = async () => {
  const response = await fetch(
    `${process.env.PROVINCE_SERVER_API}/api/province/`
  );
  if (!response.ok) {
    throw new Error("Fetch to faied /api/province");
  }
  return response.json();
};
const getDistrict = async (provinceId) => {
  const response = await fetch(
    `${process.env.PROVINCE_SERVER_API}/api/province/district/${provinceId}`
  );
  if (!response.ok) {
    throw new Error("Fetch to faied /api/province/district/${provinceId}");
  }
  return response.json();
};
const getWard = async (districtId) => {
  const response = await fetch(
    `${process.env.PROVINCE_SERVER_API}/api/province/ward/${districtId}`
  );
  if (!response.ok) {
    throw new Error("Fetch to faied /api/province/ward/${districtId}");
  }
  return response.json();
};
export default function ProvinceList() {
  const [provinceId, setProvinceId] = useState(0);
  const [districtId, setDistrictId] = useState(0);
  const { data: provinceRes } = useSWR(`/province`, getProvince, {
    fallbackData: {},
  });
  const { data: districtRes } = useSWR(
    provinceId ? `/district/${provinceId}` : null,
    () => getDistrict(provinceId),
    {
      fallbackData: {},
    }
  );
  const { data: wardRes } = useSWR(
    districtId ? `/ward/${districtId}` : null,
    () => getWard(districtId),
    {
      fallbackData: {},
    }
  );

  const handleChangeProvince = (e) => {
    const provinceId = e.target.value;
    setProvinceId(provinceId);
  };
  const handleChangeDistrict = (e) => {
    const districtId = e.target.value;
    setDistrictId(districtId);
  };

  return (
    <div>
      <select onChange={handleChangeProvince}>
        <option value="0">Chọn Tỉnh/Thành phố</option>
        {provinceRes.results?.map((province) => (
          <option value={province.province_id} key={province.province_id}>
            {province.province_name}
          </option>
        ))}
      </select>
      <select onChange={handleChangeDistrict}>
        <option value="0">Chọn Quận/Huyện</option>
        {districtRes.results?.map((district) => (
          <option value={district.district_id} key={district.district_id}>
            {district.district_name}
          </option>
        ))}
      </select>
      <select>
        <option value="0">Chọn Xã/Phường</option>
        {wardRes.results?.map((ward) => (
          <option value={ward.ward_id} key={ward.ward_id}>
            {ward.ward_name}
          </option>
        ))}
      </select>
    </div>
  );
}
