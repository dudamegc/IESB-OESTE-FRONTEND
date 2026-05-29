//--------------------------------------------------------------------------
//AULA COMPONENTES
//--------------------------------------------------------------------------
// const Input = () => {
//   return <input type="text" />;
// };

// export default Input;

//--------------------------------------------------------------------------
//AULA PROPS
//--------------------------------------------------------------------------
import React from 'react';

const Input = ({ id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} style={{ textTransform: 'capitalize' }}>
        {id}
      </label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;
