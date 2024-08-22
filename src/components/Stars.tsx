import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

interface StarsProps {
  count: number;
}

const Stars: FC<StarsProps> = ({ count }) => {
  const starsArray = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray.map((el) => (
        <Star key={el} />
      ))}
    </ul>
  );
};

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Stars;