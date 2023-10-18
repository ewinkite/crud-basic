import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import * as style from "./MarkDown.style";

const MarkDown = () => {
  const [value, setValue] = useState<string | undefined>("내용을 입력하세요.");

  return (
    <div className="markArea" css={style.markArea}>
      <MDEditor height={560} value={value} onChange={setValue} />
    </div>
  );
};

export default MarkDown;
