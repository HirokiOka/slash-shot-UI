// pages/Descriptio.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import actionBlockImg from '../assets/action_block.png';
import blockExampleImg from '../assets/basic_code.png';
import actionGif from '../assets/p1_basic_action.gif';

import conditionBlockImg from '../assets/condition_block.png';
import conditionCodeImg from '../assets/condition_code.png';
import conditionGif from '../assets/condition_movie.gif';


function InitlailDescriptionComponent(): JSX.Element {
  return (
    <>
      <h1 className="text-xl leading-relaxed text-white">このゲームはプログラミングでたたかうシューティングゲームです。
      <br/>キャラクターのうごきをプログラミングして、あいてをたおしましょう。<br />水色のアクションブロックをタッチするとプログラムをつくれます。</h1>
    </>
  );
}

function FirstVisualDescriptionComponent(): JSX.Element {
  return (
    <>
      <ul className="m-2">
        <li><span className="bg-blue-400 rounded-lg font-bold p-1 my-2">こうげき</span>：あいてをこうげき</li>
        <li><span className="bg-blue-400 rounded-lg font-bold p-1 my-2">ためる</span>: こうげき力をあげる</li>
        <li><span className="bg-blue-400 rounded-lg font-bold p-1 my-2">うえ/したにうごく</span>：うえやしたにうごく</li>
      </ul>
    </>
  );
}

function GameProcessDescription(): JSX.Element {
  return (
  <>
    <div className="flex py-1 px-2 text-white">
    <div className="items-center text-center border-2 m-auto rounded-xl">
      <img
        id="blockImg"
        className="m-2"
        src={actionBlockImg}
        alt="input example image"
        width="160"
        height="160"
      />
      <p id="blocks" className="pt-2 text-xl font-bold m-2">1. ブロックをタッチしてならべる</p>
    </div>

    <div className="flex items-center m-auto">
      <svg id="triangle" width="60" height="60">
          <polygon points="15,0 45,30 15,60" fill="lightgray"/>
      </svg>
    </div>

    <div id="codeExample" className="text-center border-2 rounded-xl">
      <img
        id="codeImg"
        className="my-2"
        src={blockExampleImg}
        alt="code example"
        width="180"
        height="180"
      />
      <p id="codeText" className="pt-8 text-xl font-bold m-2">2. ブロックが<br/>プログラムに<br/>なるよ!</p>
    </div>

    <div className="flex items-center m-auto">
      <svg id="triangle" width="60" height="60">
          <polygon points="15,0 45,30 15,60" fill="lightgray"/>
      </svg>
    </div>
    <div id="game" className="text-center border-2 rounded-xl">
      <img
        id="gameImg"
        className="m-1"
        src={actionGif}
        alt="game example image"
        width="420"
        height="420"
      />
      <p id="gameText" className="pt-2 text-xl font-bold">3. プログラムでキャラがうごく!</p>
          </div>
      </div>
    </>
    );
}

function PageOne(): JSX.Element {
  return (
  <>
    <h1 className="font-bold text-center text-2xl bg-gray-400 py-1">あそびかた</h1>
    <div className="text-xl py-2 px-4 leading-relaxed text-white">
      <InitlailDescriptionComponent />
      <FirstVisualDescriptionComponent />
      <GameProcessDescription />
    </div>
  </>
  );
}


function SecondDescriptionComponent(): JSX.Element {
  return (
    <>
      <span className="bg-purple-700 rounded-lg font-bold p-1">もし◇なら</span>と<span className="bg-yellow-500 rounded-lg font-bold p-1">◇ブロック</span>をあわせると、とくべつなうごきができます。<br/>たとえば、<span className="bg-purple-700 rounded-lg font-bold p-1">もし◇なら</span>のつぎに<span className="bg-yellow-500 rounded-lg font-bold p-1">おなじたかさ</span> をタッチすると、あいてとおなじたかさのときだけこうげきできます。<br/>とくべつなうごきのおわりには、<span className="bg-purple-700 rounded-lg font-bold p-1">もしおわり</span>をタッチしましょう。<br/>プログラムができたら<span className="bg-green-700 rounded-lg font-bold p-1">かんせい</span>をタッチ！<br/>2人のプログラムがそろうとバトルかいし！
    </>
  );
}

function SecondVisualDescription(): JSX.Element {
  return (
  <>
    <div className="flex py-1 px-2 text-white">
    <div className="items-center text-center border-2 m-auto rounded-xl">
      <img
        id="blockImg"
        className="m-2"
        src={conditionBlockImg}
        alt="input example image"
        width="160"
        height="160"
      />
      <p id="blocks" className="pt-2 text-xl font-bold m-2">1. 「もし◇なら」と「おなじたかさ」をくみあわせて...</p>
    </div>

    <div className="flex items-center m-auto">
      <svg id="triangle" width="60" height="60">
          <polygon points="15,0 45,30 15,60" fill="lightgray"/>
      </svg>
    </div>

    <div id="codeExample" className="text-center border-2 rounded-xl">
      <img
        id="codeImg"
        className="my-2"
        src={conditionCodeImg}
        alt="code example"
        width="180"
        height="180"
      />
      <p id="codeText" className="pt-8 text-xl font-bold m-2">2. 「もしおわり」でとじる</p>
    </div>

    <div className="flex items-center m-auto">
      <svg id="triangle" width="60" height="60">
          <polygon points="15,0 45,30 15,60" fill="lightgray"/>
      </svg>
    </div>
    <div id="game" className="text-center border-2 rounded-xl">
      <img
        id="gameImg"
        className="m-1"
        src={conditionGif}
        alt="game example image"
        width="420"
        height="420"
      />
      <p id="gameText" className="pt-2 text-xl font-bold">3. あいてとおなじたかさのときだけこうげき！</p>
          </div>
      </div>
    </>
    );
}

function PageTwo(): JSX.Element {
  return (
  <>
    <h1 className="font-bold text-center text-2xl bg-gray-400 py-1">あそびかた</h1>
    <div className="text-xl py-2 px-4 leading-relaxed text-white">
      <SecondDescriptionComponent />
      <SecondVisualDescription />
    </div>
  </>
  );
}

function Description(): JSX.Element {
  const buttonClass = "text-lg bg-gray-400 hover:bg-gray-700 text-black py-2 px-8 rounded font-bold";
  const [page, setPage] = useState(0);
  const handleNextClick = () => {
    if (page === 1) {
      navigate('/interface');
    } else {
      setPage(page + 1);
      }
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  const navigate = useNavigate();
  return (
    <div className="flex justify-center bg-red-700 h-screen">
      <div className="w-11/12 rounded-lg border bg-gray-700">
      { page === 0 && <PageOne /> }
      { page === 1 && <PageTwo /> }

        <div className="flex items-center m-auto">
          <div className="text-center m-auto">
          { page == 1 &&
            <button id="prevBtn"
            className={buttonClass}
            onClick={prevPage}
            >
             まえへ
            </button>
          }
          </div>
          <div className="text-center py-2 m-auto">
            <button id="nextBtn"
            className={buttonClass}
            onClick={handleNextClick}>
              { page === 1 ? 'はじめる' : 'つぎへ' }
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Description;
