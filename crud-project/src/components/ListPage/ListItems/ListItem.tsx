import React from "react";
import * as style from "./ListItem.style";
import { itemTag } from "./ItemTag.style";
import ItemTag from "./ItemTag";

const ListItem = () => {
  return (
    <div id="listItem" css={style.itemContainer}>
      <div id="itemImage" css={style.itemImage}></div>
      <div id="itemDesc" css={style.itemDesc}>
        <div id="itemTitle" css={style.itemTitle}>
          직원관리시스템
        </div>
        <div id="itemDate">작업기간:2020.08.13 ~ 2020.08.30</div>
        <div id="itemTags">
          <ItemTag />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
