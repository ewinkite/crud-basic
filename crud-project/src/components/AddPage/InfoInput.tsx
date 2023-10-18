import * as style from "./InfoInput.style";

const InfoInput = () => {
  return (
    <div id="inputWrap" css={style.inputWrap}>
      <div id="inputTop" css={style.input}>
        <label htmlFor="title">제목</label>
        <input id="title" size={50} />
        <label htmlFor="workTerm">작업기간</label>
        <input id="workTerm" size={30} />
      </div>
      <div id="inputBottom" css={style.input}>
        <label htmlFor="tag">태그</label>
        <input id="tag" size={35} />
        <label htmlFor="mainImg">대표사진</label>
        <input id="mainImg" size={35} type="file" />
      </div>
    </div>
  );
};

export default InfoInput;
