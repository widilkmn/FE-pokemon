import { NavigateFunction } from "react-router-dom";

export const handlePageNext = (offset: string, navigate: NavigateFunction) => {
  const numOffset = Number(offset);
  navigate(`?offset=${numOffset + 20}`);
};

export const handlePageBack = (offset: string, navigate: NavigateFunction) => {
  const numOffset = Number(offset);
  navigate(`?offset=${numOffset > 1 ? numOffset - 20 : numOffset}`);
};
