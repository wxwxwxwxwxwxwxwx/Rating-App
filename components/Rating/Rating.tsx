import { useEffect, useState, KeyboardEvent } from "react";
import classNames from "classnames";

import { IRatingProps } from "./Rating.props";
import styles from "./Rating.module.css";

import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (rating: number) => {
    if (isEditable) {
      constructRating(rating);
    }
  };

  const changeRating = (rating: number) => {
    if (!isEditable || !setRating) {
      return false;
    }
    setRating(rating);
  };

  const handleSpace = (rating: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== "Space" || !setRating) {
      return false;
    }
    setRating(rating);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((item: JSX.Element, i: number) => {
      return (
        <span
          className={classNames(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
};
