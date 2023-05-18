import './App.css';
import { Header } from "./components/Header";
import logoImg from '../public/logo-galeria.png';
// import { useRoutes} from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';
import { Albums } from './pages/Albums';

function App() {

  return (
    <>
      <Header logo={logoImg} />
      <div>
         <MainRoutes />
      </div>
    </>
  )
}

export default App
