import * as style from "./ListHeader.style";
import DefaultBtn from "../../common/DefaultBtn";
import { useNavigate } from "react-router-dom";

const ListHeader = () => {
  const navigate = useNavigate();

  function handleWriteBtn() {
    navigate("/add");
  }

  return (
    <div id="listHeader" css={style.ListHeaderWrap}>
      <div id="listTitle" css={style.listTitle}>
        전체
        <span>NN</span>
      </div>
      <DefaultBtn text={"글쓰기"} onClick={handleWriteBtn}></DefaultBtn>
    </div>
  );
};

export default ListHeader;
