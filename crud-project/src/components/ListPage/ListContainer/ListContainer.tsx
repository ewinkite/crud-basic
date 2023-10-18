import React from "react";
import ListHeader from "./ListHeader";
import ListItems from "../ListItems/ListItems";
import * as style from "./ListContainer.style";

const ListContainer = () => {
  return (
    <div id="listContainer" css={style.ListContainer}>
      <ListHeader />
      <ListItems />
    </div>
  );
};

export default ListContainer;
