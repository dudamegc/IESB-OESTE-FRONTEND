//  EXERCÍCIO JSX
// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };

// const App = () => {
//   const dados = mario;

//   const total = dados.compras
//     .map((item) => Number(item.preco.replace('R$ ', '')))
//     .reduce((a, b) => a + b);

//   return (
//     <div>
//       <p>Nome: {dados.cliente}</p>
//       <p>Idade: {dados.idade}</p>
//       <p>
//         Situação:{' '}
//         <span style={{ color: dados.ativa ? 'green' : 'red' }}>
//           {dados.ativa ? 'Ativa' : 'Inativa'}
//         </span>
//       </p>
//       <p>Total: R$ {total}</p>
//       {total > 10000 && <p>Você está gastando muito</p>}
//     </div>
//   );
// };

// export default App;

//--------------------------------------------------------------------------
//AULA JSX ARRAYS
//--------------------------------------------------------------------------

//ex1 ----------------
// const App = () => {
//   const produtos = ['Notebook', 'Smartphone', 'Tablet'];

//   return <p>{produtos}</p>;
// };
// export default App;

//ex2 - key ----------

// const App = () => {
//   const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

//   return <ul>{empresas}</ul>;
// };
//  export default App;

//ex3 - map ----------
// const App = () => {
//   const filmes = ['Devil Prada', '10 coisas que odeio em você', 'Coraline'];

//   return (
//     <ul>
//       {filmes.map((filme) => (
//         <li key={filme}>{filme}</li>
//       ))}
//     </ul>
//   );
// };
// export default App;

//ex4 - objetos ------

// const App = () => {
//   const livros = [
//     { nome: 'A Game of Thrones', ano: 1996 },
//     { nome: 'A Clash of Kings', ano: 1998 },
//     { nome: 'A Storm of Swords', ano: 2000 },
//   ];

//   return (
//     <ul>
//       {livros
//         .filter((livro) => livro.ano >= 1998)
//         .map((livro) => (
//           <li key={livro.nome}>
//             {livro.nome}, {livro.ano}
//           </li>
//         ))}
//     </ul>
//   );
// };
// export default App;

//EXERCICÍO JSX ARRAYS
// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];

// const App = () => {
//   return (
//     <section>
//       {produtos
//         .filter((produto) => Number(produto.preco.replace('R$ ', '')) > 1500)
//         .map((produto) => (
//           <div key={produto.id}>
//             <h1>{produto.nome}</h1>
//             <p>Preço: {produto.preco}</p>
//             <ul>
//               {produto.cores.map((cor) => (
//                 <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
//                   {cor}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//     </section>
//   );
// };

// export default App;

//--------------------------------------------------------------------------
//AULA EVENTOS
//--------------------------------------------------------------------------

//ex1 ------------
// const App = () => {
//   function handleClick(event) {
//     alert('Comprou: ' + event.target.innerText);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Camisa</button>
//       <button onClick={handleClick}>Bermuda</button>
//     </div>
//   );
// };
// export default App;

//ex2 - Função Anônima------------
// const App = () => {
//   return (
//     <button onClick={({ target }) => target.classList.toggle('ativa')}>
//       Ativar
//     </button>
//   );
// };
// export default App;

//ex3 -------------
// const App = () => {
//   function handleScroll(event) {
//     console.log(event);
//   }
//   window.addEventListener('scroll', handleScroll);

//   return <div style={{ height: '200vw' }}>Div</div>;
// };
// export default App;

//--------------------------------------------------------------------------
//AULA COMPONENTES
//--------------------------------------------------------------------------
// import Header from './Header';
// import Footer from './Footer';
// import Form from './Form/Form';
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <p>Esse é o meu aplicativo</p>
//       <Footer />
//       <Form />
//     </div>
//   );
// };

// export default App;

//--------------------------------------------------------------------------
//AULA PROPS
//--------------------------------------------------------------------------

// ex1 ------------
// const Titulo = ({ cor, texto }) => {
//   return <h1 style={{ color: cor }}>{texto}</h1>;
// };

// const App = () => {
//   return (
//     <section>
//       <Titulo texto="Meu Primeiro Título" cor="blue" />
//       <Titulo texto="Meu Segundo Título" cor="red" />
//     </section>
//   );
// };
// export default App;

// ex2 ------------
// const Titulo = (props) => {
//   return <h1>{props.children}</h1>;
// };

// const App = () => {
//   return (
//     <section>
//       <Titulo>Meu Primeiro Título</Titulo>
//       <Titulo>
//         <p>Título 2</p>
//         <p>Título 3</p>
//       </Titulo>
//     </section>
//   );
// };
// export default App;

//ex3 ------------
// import React from 'react';
// import Header from './Header';
// const App = () => {
//   const logado = true;
//   const nome = 'André';

//   return (
//     <section>
//       <Header logado={logado} nome={nome} />
//       <Form />
//     </section>
//   );
// };
// export default App;

//--------------------------------------------------------------------------
//DESAFIO COMPONENTES
//--------------------------------------------------------------------------
import React from 'react';
import Header from './Desafio/Header';
import Home from './Desafio/Home';
import Produtos from './Desafio/Produtos';

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;
