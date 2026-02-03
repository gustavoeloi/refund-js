import { Button } from "./Button";

import LeftArrow from "../assets/left.svg";
import RightArrow from "../assets/right.svg";

type PaginationProps = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination({
  current,
  total,
  onNext,
  onPrevious,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="iconSmall"
        onClick={() => onPrevious()}
        disabled={current === 1}
      >
        <img src={LeftArrow} alt="Previous" />
      </Button>
      <span className="text-gray-200">
        {current} of {total}
      </span>
      <Button
        variant="iconSmall"
        onClick={() => onNext()}
        disabled={current === total}
      >
        <img src={RightArrow} alt="Next" />
      </Button>
    </div>
  );
}
