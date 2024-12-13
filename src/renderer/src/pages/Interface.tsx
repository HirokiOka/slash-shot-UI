// pages/Interface.tsx
import '../assets/input.css';
import { useState } from 'react';

type CodeBlock = {
  viewText: string;
  blockType: string;
};

type ViewBlock = {
  viewText: string;
  bgColor: string;
};

function ActionBlocks({ onButtonClick }): JSX.Element {
  const actionButtonClass = "m-2 py-3 px-4 bg-blue-400 font-bold text-2xl rounded";
  const actionBlockArray: CodeBlock[] = [
    { "viewText": "こうげき", "blockType": "action" },
    { "viewText": "ためる", "blockType": "action" },
    { "viewText": "うえにうごく", "blockType": "action" },
    { "viewText": "したにうごく", "blockType": "action" },
  ];

  return (
    <div id="action" className="h-2/3">
      <h2 className="mb-1 text-4xl font-bold">アクション</h2>
      {actionBlockArray.map((v, i) => (
        <button
          key={i}
          className={actionButtonClass}
          onClick={() => onButtonClick(v)}>
          {v.viewText}
        </button>
      ))}
    </div>
  );
}

function DeleteBlocks({ onButtonClick }): JSX.Element {
  const oneDeleteButtonClass = "m-2 py-3 px-4 bg-red-400 font-bold text-2xl rounded";
  const allDeleteButtonClass = "m-2 py-3 px-4 bg-red-600 font-bold text-2xl rounded";
  return (
    <div id="action" className="h-2/3 text-right">
      <h2 className="mb-1 text-4xl font-bold">ブロックをけす</h2>
      <button
        className={oneDeleteButtonClass}
        onClick={() => onButtonClick("one")}
        >
        1つけす
      </button>
      <br />
      <button
        className={allDeleteButtonClass}
        onClick={() => onButtonClick("all")}
        >
        ぜんぶけす
      </button>
    </div>
  );
}

function IfBlocks({ onButtonClick }): JSX.Element {
  const ifButtonClass = "m-2 py-3 px-4 bg-purple-600 font-bold text-2xl rounded";
  const ifBlockArray: CodeBlock[] = [
    { "viewText": "もし◇なら", "blockType": "ifStart" },
    { "viewText": "もしおわり", "blockType": "ifEnd" },
  ];
  return (
    <div id="if" className="pt-2 h-2/3">
      <h2 className="mb-1 text-4xl font-bold">もしも</h2>
      {ifBlockArray.map((v, i) => (
      <div key={i}>
        <button
          className={ifButtonClass}
          onClick={() => onButtonClick(v)}>
          {v.viewText}
        </button>
        <br />
        </div>
      ))}
    </div>
  );
}

function ConditionBlocks({ onButtonClick }): JSX.Element {
  const condtionButtonClass = "mt-2 mx-4 py-3 px-4 bg-yellow-500 font-bold text-2xl rotate-45";
  const conditionBlockArray: CodeBlock[] = [
    { "viewText": "おなじ<br />たかさ", "blockType": "condition" },
    { "viewText": "ちがう<br />たかさ", "blockType": "condition" },
  ];
  return (
    <div id="condition" className="pt-2 h-2/3">
      <h2 className="mb-4 text-4xl font-bold">こんなとき</h2>
      {conditionBlockArray.map((v, i) => (
        <button
          key={i}
          className={condtionButtonClass}
          onClick={() => onButtonClick(v)}>
          {v.viewText.split("<br />").map((line, index) => (
            <span key={index}>
              {line}
              {index !== v.viewText.split("<br />").length - 1 && <br />}
            </span>
          ))}
        </button>
      ))}
    </div>
  );
}

function getBlockColorMap(codeBlock: CodeBlock): ViewBlock {
  let bgColor = "";
  const viewText = codeBlock.viewText;
  if (codeBlock.blockType === "action") {
    bgColor = "bg-blue-400";
  } else if (codeBlock.blockType ==="ifStart" || codeBlock.blockType ==="ifEnd") {
    bgColor = "bg-purple-600";
  } else if (codeBlock.blockType === "condition") {
    bgColor = "bg-yellow-500";
  } else {
    bgColor = "bg-black";
  }
  return { viewText, bgColor };
}

function CodeEditor({ blockStack }): JSX.Element {
  const viewBlockStack: ViewBlock[] = blockStack
                                        .filter(v => v !== null)
                                        .map(v => getBlockColorMap(v));
  console.log(viewBlockStack);
  const submitButtonClass = "m-2 py-3 px-4 bg-green-700 font-bold text-2xl rounded";
  return (
    <div id="code-editor">
      <h1 className="pt-2 text-5xl font-bold text-center">あなたのプログラム</h1>
      <div id="border" className="border-4 border-yellow-700 h-5/6">
        <div id="code-pane" className="pt-2 border h-4/6">
          {viewBlockStack.map(({ viewText, bgColor }, i) => (
            <p key={i} className={`px-2 m-1 text-2xl ${bgColor}`}>{i+1}. {viewText}</p>
          ))}
        </div>

          <div id="sumbitButton" className="fixed bottom-24 left-3/4 transform -translate-x-1/4">
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
  const [blockStack, setBlockStack] = useState(Array(15).fill(null));

  function pushBlock(block: CodeBlock): void {
    const lastBlock = blockStack[blockStack.length-1];
    console.log(lastBlock);
    if (blockStack.indexOf(null) === -1) return;
    for (let i = 0; i < blockStack.length; i++) {
      if (blockStack[i] === null){
        const nextBlockStack = blockStack.slice();
        nextBlockStack[i] = block;
        setBlockStack(nextBlockStack);
        return;
      }
    }
  }
  /*
   * Check insert mode (normal or conditional or in-ifBlock)
   * Merge if-start + condition
   */



  function popBlock(deleteType: string): void {
    const nextBlockStack = blockStack.slice();
    if (deleteType === "one") {
      if (nextBlockStack.indexOf(null) !== -1) {
      const popIndex = nextBlockStack.indexOf(null) - 1;
      nextBlockStack[popIndex] = null;
      setBlockStack(nextBlockStack);
      } else {
        nextBlockStack[nextBlockStack.length-1] = null;
        setBlockStack(nextBlockStack);
      }
    } else if (deleteType === "all") {
      setBlockStack(Array(15).fill(null));
    }
  }

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
                <ActionBlocks onButtonClick={pushBlock} />
                <DeleteBlocks onButtonClick={popBlock} />
              </div>
              <IfBlocks onButtonClick={pushBlock} />
              <ConditionBlocks onButtonClick={pushBlock} />
            </div>
          </div>
        </div>

        <CodeEditor blockStack={blockStack} />
      </div>
    </div>
  );
}

export default Home;
