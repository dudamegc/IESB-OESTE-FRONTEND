//--------------------------------------------------------------------------
//AULA COMPONENTES
//--------------------------------------------------------------------------
// import Button from './Button';
// import Input from './Input';

// const Form = () => {
//   return (
//     <form>
//       <p>
//         <label htmlFor="nome">Nome</label>
//         <Input />
//       </p>
//       <p>
//         <label htmlFor="email">Email</label>
//         <Input />
//       </p>
//       <Button />
//     </form>
//   );
// };

// export default Form;

//--------------------------------------------------------------------------
//AULA PROPS
//--------------------------------------------------------------------------
import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <Input id="email" required />
      <Input id="password" type="password" />
      <Button />
    </form>
  );
};

export default Form;
