// pages/Home.tsx
import slashShotLogo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Home(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-red-500 h-screen m-0 flex items-center justify-center font-sans"
            onClick={() => navigate('/description')}>
        <div className="text-white font-mono">
        <img alt="logo" className="logo" src={slashShotLogo} />
          <h1 className="text-center text-4xl">🚀プレイヤー1🚀</h1>
          <h2 className="text-center text-3xl">がめんをタッチしてください</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
