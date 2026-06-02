import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading'
import { Container } from './components/Container';
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';


export function App() {
  return (
    <>
      {/* Seção 1: Logo */}
      <Container>
        <Logo />
      </Container>

      {/* Seção 2: Menu */}
      <Container>
        <Menu />
      </Container>

      {/* Seção 3: Cronômetro */}
      <Container>
        <CountDown />
      </Container>

      {/* Seção 4: Formulário */}
     <Container>
        <form className='form' action=''>
          {/* Grupo 1: Label e Input */}
          <div className='formRow'>
            <DefaultInput id='meuInput' type='text' />
          </div>

          {/* Grupo 2: Texto de apoio */}
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          {/* Grupo 3: Ciclos */}
          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          {/* Grupo 4: Botão */}
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>

      {/* Seção 4: Footer */}
      <Container>
        <Heading>Footer</Heading>
      </Container>

    </>
  );
}