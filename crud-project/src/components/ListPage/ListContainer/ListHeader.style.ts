import { css } from "@emotion/react";

export const ListHeaderWrap = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const listTitle = css`
  padding: 0.94rem 0 0 1.56rem;
  font-weight: bold;

  & > span {
    font-weight: normal;
    color: var(--color-main);
  }
`;
