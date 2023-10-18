import { css } from "@emotion/react";

export const itemContainer = css`
  width: 20.9375rem;
  height: auto;
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray);
  margin: 1.56rem;
  background-color: var(--color-white);

  &:hover {
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.04));
  }
`;

export const itemImage = css`
  width: 18.3125rem;
  height: 12.5625rem;
  background-color: var(--color-gray);
  margin: 1.25rem;
`;

export const itemDesc = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 1.5rem;
`;

export const itemTitle = css`
  font-weight: bold;
`;
