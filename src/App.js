import { useNavigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import GenderPicker from './components/GenderPicker';
import NameGenerator from './components/NameGenerator';

function App() {
  const navigate = useNavigate()

  const Div = styled.div`
    background: var(--homeBg);
  `
  const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
  `
  const P = styled.p`
    color: red;
    border: 2px black;
    padding: 0px 20px;
    border-style: ridge dashed;
  `

  return (
    <Div>
      <Nav>
        <P onClick={() => navigate('/')}>
          Back
        </P>
      </Nav>
      <Routes>
        <Route path="/" element={<GenderPicker />} />
        <Route path="/:gender" element={<NameGenerator />} />
      </Routes>
    </Div>
  );
}

export default App;
