import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Description from './pages/Description'
import Interface from './pages/Interface'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <Router>
      <nav>
        <Link to="/">ホーム</Link> | <Link to="/next">次のページ</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/interface" element={<Interface />} />
      </Routes>
    </Router>
  );
}

export default App
