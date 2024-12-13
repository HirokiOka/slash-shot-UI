// pages/Interface.tsx
import '../assets/input.css';

function ActionBlocks(): JSX.Element {
  const actionButtonClass = "m-2 py-3 px-4 bg-blue-400 font-bold text-2xl rounded";
  return (
    <div id="action" className="h-2/3">
      <h2 className="mb-1 text-4xl font-bold">アクション</h2>
      <button
        className={actionButtonClass}>
        こうげき
      </button>
      <button
        className={actionButtonClass}>
        ためる
      </button>
      <br />
      <button
        className={actionButtonClass}>
        うえにうごく
      </button>
      <button
        className={actionButtonClass}>
        したにうごく
      </button>
    </div>
  );
}

function DeleteBlocks(): JSX.Element {
  const oneDeleteButtonClass = "m-2 py-3 px-4 bg-red-400 font-bold text-2xl rounded";
  const allDeleteButtonClass = "m-2 py-3 px-4 bg-red-600 font-bold text-2xl rounded";
  return (
    <div id="action" className="h-2/3 text-right">
      <h2 className="mb-1 text-4xl font-bold">ブロックをけす</h2>
      <button
        className={oneDeleteButtonClass}>
        1つけす
      </button>
      <br />
      <button
        className={allDeleteButtonClass}>
        ぜんぶけす
      </button>
    </div>
  );
}

function IfBlocks(): JSX.Element {
  const ifButtonClass = "m-2 py-3 px-4 bg-purple-600 font-bold text-xl rounded";
  return (
    <div id="if" className="pt-2 h-2/3">
      <h2 className="mb-1 text-4xl font-bold">もしも</h2>
      <button
        className={ifButtonClass}>
        もし◇なら
      </button>
      <br />
      <button
        className={ifButtonClass}>
        もしおわり
      </button>
    </div>
  );
}

function ConditionBlocks(): JSX.Element {
  const condtionButtonClass = "mt-2 mx-4 py-3 px-4 bg-yellow-500 font-bold text-2xl rotate-45";
  return (
    <div id="condition" className="pt-2 h-2/3">
      <h2 className="mb-4 text-4xl font-bold">こんなとき</h2>
      <button
        className={condtionButtonClass}>
        おなじ<br />たかさ
      </button>
      <button
        className={condtionButtonClass}>
        ちがう<br />たかさ
      </button>
    </div>
  );
}

function CodeEditor(): JSX.Element {
  const submitButtonClass = "m-2 py-3 px-4 bg-green-700 font-bold text-2xl rounded";
  return (
    <div id="code-editor">
      <h1 className="pt-2 text-5xl font-bold text-center">あなたのプログラム</h1>
      <div id="border" className="border-4 border-yellow-700 h-5/6">
        <div className="fixed bottom-24 left-3/4 transform -translate-x-1/4">
          <button
            className={submitButtonClass}>
           かんせい
          </button>
        </div>
      </div>
    </div>
  );
}

function Home(): JSX.Element {
  const quitButtonClass = "m-1 py-2 px-4 text-white bg-black font-bold text-2xl rounded fixed";
  const timer = "m-2 py-1 px-4 text-white bg-black font-bold fixed left-1/2";
  return (
    <div className="font-kaiso">
      <button
        className={quitButtonClass}>
        ゲームをやめる
      </button>
      <h1 className={timer}>60</h1>
      <div className="bg-gray-700 h-screen m-0 text-white grid grid-cols-2 gap-4">

        <div id="code-block">
          <h1 className="pt-2 text-5xl font-bold text-center">コードブロック</h1>
          <div id="border" className="border-4 border-purple-700 h-5/6">
            <div className="m-2 grid grid-rows-3 gap-8">
              <div className="grid grid-cols-2 gap-4">
                <ActionBlocks />
                <DeleteBlocks />
              </div>
              <IfBlocks />
              <ConditionBlocks />
            </div>
          </div>
        </div>

        <CodeEditor />
      </div>
    </div>
  );
}

export default Home;
