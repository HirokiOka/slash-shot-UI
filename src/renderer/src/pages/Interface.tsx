// pages/Interface.tsx
import '../assets/input.css';
import { useState } from 'react';
import blockSound from '../assets/block.mp3';
import deleteSound from '../assets/delete.mp3';
import submitSound from '../assets/send.mp3';

type CodeBlock = {
  viewText: string;
  blockType: string;
  bgColor: string;
};

type ViewBlock = {
  viewText: string;
  blockType: string;
  bgColor: string;
  indentClass: string;
};

function ActionBlocks({ onButtonClick }): JSX.Element {
  const skyBlueBg = "bg-blue-400";
  const actionButtonClass = "m-2 py-3 px-4 bg-blue-400 font-bold text-2xl rounded";
  const actionBlockArray: CodeBlock[] = [
    { "viewText": "こうげき", "blockType": "action", "bgColor": skyBlueBg },
    { "viewText": "ためる", "blockType": "action", "bgColor": skyBlueBg },
    { "viewText": "うえにうごく", "blockType": "action", "bgColor": skyBlueBg },
    { "viewText": "したにうごく", "blockType": "action", "bgColor": skyBlueBg },
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
  const purpleBg = "bg-purple-600";
  const ifBlockArray: CodeBlock[] = [
    { "viewText": "もし◇なら", "blockType": "ifStart", "bgColor": purpleBg },
    { "viewText": "もしおわり", "blockType": "ifEnd", "bgColor": purpleBg },
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
  const conditionBg = "bg-yellow-500";
  const condtionButtonClass = "mt-2 mx-4 py-3 px-4 bg-yellow-500 font-bold text-2xl rotate-45";
  const conditionBlockArray: CodeBlock[] = [
    { "viewText": "おなじ<br />たかさ", "blockType": "condition", "bgColor": conditionBg },
    { "viewText": "ちがう<br />たかさ", "blockType": "condition", "bgColor": conditionBg },
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


function CodeEditor({ blockStack }): JSX.Element {
  const submitClickSound = new Audio(submitSound);
  function submitHandler() {
    submitClickSound.play();
  }
  const viewBlockStack: ViewBlock[] = blockStack
                                        .filter(v => v !== null);
  //console.log(viewBlockStack);
  const submitButtonClass = "m-2 py-3 px-4 bg-green-700 font-bold text-2xl rounded";
  return (
    <div id="code-editor">
      <h1 className="pt-2 text-5xl font-bold text-center">あなたのプログラム</h1>
      <div id="border" className="border-4 border-yellow-700 h-5/6">
        <div id="code-pane" className="pt-2 h-5/6">
          <ul className="px-2">
            {viewBlockStack.map(({ viewText, bgColor, indentClass }, i) => (
              <li key={i} className={`${indentClass} px-2 m-1 text-2xl ${bgColor}`}>{i+1}. {viewText}</li>
            ))}
          </ul>
        </div>

        <div id="sumbitButton" className="fixed bottom-24 left-3/4 transform -translate-x-1/4">
          <button
            className={submitButtonClass}
            onClick={submitHandler}>
           かんせい
          </button>
        </div>

      </div>
    </div>
  );
}

function Home(): JSX.Element {
  const blockClickSound = new Audio(blockSound);
  const deleteClickSound = new Audio(deleteSound);

  const quitButtonClass = "m-1 py-2 px-4 text-white bg-black font-bold text-2xl rounded fixed";
  const timer = "m-2 py-1 px-4 text-white bg-black font-bold fixed left-1/2";
  const [blockStack, setBlockStack] = useState(Array(15).fill(null));

  function getIndentNum(): number {
    const nextBlockStack = blockStack.slice();
    const ifCombinedCount = nextBlockStack.filter(v => v != null).filter((v) => v.blockType === 'ifCombined').length;
    const ifEndCount = nextBlockStack.filter(v => v != null).filter((v) => v.blockType === 'ifEnd').length;
    const indentNum = Math.max(ifCombinedCount - ifEndCount, 0);
    return indentNum;
  }

  function getInsertMode(): string {
    const nextBlockStack = blockStack.slice();
    const previousBlock: CodeBlock = nextBlockStack[nextBlockStack.indexOf(null) - 1];
    if (previousBlock == undefined) return "NORMAL";
    if (previousBlock.blockType === "action" || previousBlock.blockType === "ifEnd" || previousBlock.blockType === "ifCombined") return "NORMAL";
    if (previousBlock.blockType === "ifStart") return "CONDITIONAL";
    return "DEFAULT";
  }

  function pushBlock(selectedBlock: CodeBlock): void {
    if (blockStack.indexOf(null) === -1) return;
    const nextBlockStack = blockStack.slice();
    const nullBlockIndex = nextBlockStack.indexOf(null);
    const previousBlock: CodeBlock = nextBlockStack[nullBlockIndex - 1];

    const currentInsertMode = getInsertMode();
    const currentIndentNum = getIndentNum();

    if (currentInsertMode === "NORMAL") {
      if (currentIndentNum < 1) {
        if (selectedBlock.blockType !== "action" && selectedBlock.blockType !== "ifStart") return;
      } else {
        if (selectedBlock.blockType !== "action" && selectedBlock.blockType !== "ifEnd" && selectedBlock.blockType !== "ifStart") return;
      }
    } else if (currentInsertMode === "CONDITIONAL") {
      if (selectedBlock.blockType !== "condition") return;
    } else {
      return;
    }

    blockClickSound.play();
    //Insert logic
    let insertBlock: ViewBlock;
    if (currentInsertMode === "CONDITIONAL") {
      const indentClass = `ml-${currentIndentNum * 12}`;
      const conditionViewText = selectedBlock.viewText.replace("<br />", "");
      const mergedViewText = previousBlock.viewText.replace("◇", ` ${conditionViewText} `);
      insertBlock = {
        "viewText": mergedViewText,
        "blockType": "ifCombined",
        "bgColor": previousBlock.bgColor,
        "indentClass": indentClass,
      };
      nextBlockStack[nullBlockIndex-1] = insertBlock;
      setBlockStack(nextBlockStack);
      return;
    } else if (currentInsertMode === "NORMAL" && selectedBlock.blockType === "ifEnd") {
      const indentClass = `ml-${(currentIndentNum - 1) * 12}`;
      insertBlock = {
        ...selectedBlock,
        "indentClass": indentClass,
      };
      nextBlockStack[nullBlockIndex] = insertBlock;
      setBlockStack(nextBlockStack);
      return;
    } else {
      const indentClass = `ml-${currentIndentNum * 12}`;
      insertBlock = {
        ...selectedBlock,
        "indentClass": indentClass,
      };
      nextBlockStack[nullBlockIndex] = insertBlock;
      setBlockStack(nextBlockStack);
      return;
    }
  }

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
    deleteClickSound.play();
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
