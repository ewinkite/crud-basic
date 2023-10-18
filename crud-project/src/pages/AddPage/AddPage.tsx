import * as style from "./AddPage.style";
import InfoInput from "../../components/AddPage/InfoInput";
import Content from "../../components/AddPage/Content";
import SaveBtn from "../../components/AddPage/SaveBtn";

const AddPage = () => {
  return (
    <form id="Container" css={style.Container}>
      <InfoInput />
      <SaveBtn />
      <Content />
    </form>
  );
};

export default AddPage;
