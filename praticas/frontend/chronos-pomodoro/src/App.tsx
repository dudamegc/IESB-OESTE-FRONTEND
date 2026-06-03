import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
import { Cycles } from './components/Cycles';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';


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
            <DefaultInput id='meuInput' type='text' labelText='task' placeholder='Digite algo...' />
          </div>

          {/* Grupo 2: Texto de apoio */}
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          {/* Grupo 3: Ciclos */}
          <div className='formRow'>
            <Cycles/>
          </div>

          {/* Grupo 4: Botão */}
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
            <DefaultButton icon={<StopCircleIcon/>} color='red'/>
          </div>
        </form>
      </Container>

      {/* Seção 4: Footer */}
      <Container>
        <Footer />
      </Container>

    </>
  );
}