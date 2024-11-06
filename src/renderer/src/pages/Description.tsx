// pages/Descriptio.tsx
import actionBlockImg from '../assets/action_block.png';
import blockExampleImg from '../assets/basic_code.png';
import actionGif from '../assets/p1_basic_action.gif';

function InitlailDescription(): JSX.Element {
  return (
  <>
    <h1 className="font-bold text-center text-2xl bg-gray-400 py-1">あそびかた</h1>
    <div id="desc" className="text-xl py-2 px-4 leading-relaxed text-white">
    このゲームはプログラミングでたたかうシューティングゲームです。<br/>キャラクターのうごきをプログラミングして、あいてをたおしましょう。<br/>水色のアクションブロックをタッチするとプログラムをつくれます。<ul className="m-2"><li><span className="bg-blue-400 rounded-lg font-bold p-1 my-2">こうげき</span>：あいてをこうげき</li><li><span className="bg-blue-400 rounded-lg font-bold p-1 my-2">ためる</span>: こうげき力をあげる</li><li><span className="bg-blue-400 rounded-lg font-bold p-1 my-2">うえ/したにうごく</span>：うえやしたにうごく</li></ul>
    </div>
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

function Description(): JSX.Element {
  return (
    <div className="flex justify-center bg-red-700 h-screen">
      <div className="w-11/12 rounded-lg border bg-gray-700">
      <InitlailDescription />
      <GameProcessDescription />

        <div className="flex items-center m-auto">
          <div className="text-center m-auto">
            <button id="prevBtn" className="text-lg bg-gray-400 hover:bg-gray-700 text-black py-2 px-8 rounded hidden font-bold">
             まえへ
            </button>
          </div>
          <div className="text-center py-2 m-auto">
            <button id="nextBtn" className="text-lg bg-gray-400 hover:bg-gray-700 text-black py-2 px-8 rounded font-bold">
              つぎへ
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Description;