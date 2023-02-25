import { useEffect, useState } from "react";
import classNames from "classnames";

import { IRatingProps } from "./Rating.props";
import styles from "./Rating.module.css";

import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((item: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={classNames(styles.star, {
            [styles.filled]: i < currentRating,
          })}
        />
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
