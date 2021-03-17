import React from 'react';

const Button = () => {
  const obj = {
    bruner: 'worthless ):',
  };

  const obj2 = {
    mike: 'worthwhile!!!',
  };

  const spready = { ...obj, ...obj2 };

  return (
    <button type="button">
      {spready.mike}
    </button>
  );
};

export default Button;
