import React from "react";
import * as style from "./Header.style";

const Header = () => {
  return (
    <div css={style.Container}>
      <p>이승연의 Portfolio</p>
      <div css={style.ButtonWrap}>
        <button css={style.Button}>이력서</button>
        <button css={style.Button}>결과물</button>
        <button css={style.Button}>기타</button>
      </div>
    </div>
  );
};

export default Header;
