import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>라우팅 페이지 가보자</h1>
      <div>
        <div
          onClick={() => {
            navigate(`/recoil`);
          }}
        >
          recoil 페이지
        </div>
        <div
          onClick={() => {
            navigate(`/redux`);
          }}
        >
          redux 페이지
        </div>
        <div
          onClick={() => {
            navigate(`/zustand`);
          }}
        >
          zustand 페이지
        </div>
      </div>
    </div>
  );
};

export default MainPage;
