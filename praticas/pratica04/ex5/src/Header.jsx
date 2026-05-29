//--------------------------------------------------------------------------
//AULA COMPONENTES
//--------------------------------------------------------------------------
// const Header = () => {
//   return (
//     <header>
//       <a href="./">Marca</a>
//       <nav>
//         <a href="./">Link 1</a>
//         <a href="./">Link 2</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;

//--------------------------------------------------------------------------
//AULA PROPS
//--------------------------------------------------------------------------
import React from 'react';
const Header = ({ logado, nome }) => {
  if (logado) {
    return <header>Bem vindo, {nome}</header>;
  } else {
    return <header>Header</header>;
  }
};
export default Header;
