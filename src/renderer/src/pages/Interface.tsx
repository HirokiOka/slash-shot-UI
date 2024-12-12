// pages/Interface.tsx

function Home(): JSX.Element {
  const actionButtonClass = "m-2 py-1 px-4 bg-blue-400 font-bold rounded";
  const deleteButtonClass = "m-2 py-1 px-4 bg-red-600 font-bold rounded";
  const ifButtonClass = "m-2 py-1 px-4 bg-purple-600 font-bold rounded";
  const condtionButtonClass = "m-2 py-1 px-4 bg-yellow-500 font-bold rounded";
  const submitButtonClass = "m-2 py-1 px-4 bg-green-700 font-bold rounded";
  const quitButtonClass = "m-2 py-1 px-4 text-white bg-black font-bold rounded fixed";
  const timer = "m-2 py-1 px-4 text-white bg-black font-bold fixed left-1/2";
  return (
    <>
      <button
        className={quitButtonClass}>
        ゲームをやめる
      </button>
      <h1 className={timer}>60</h1>
      <div className="bg-gray-700 h-screen m-0 font-sans text-white grid grid-cols-2 gap-4">

        <div id="code-block">
          <h1 className="pt-2 text-4xl font-bold text-center">コードブロック</h1>
          <div id="border" className="border h-5/6">
          <div className="grid grid-rows-3 gap-4">

            <div className="grid grid-cols-2 gap-4">
              <div id="action" className="h-2/3">
                <h2 className="mb-1 text-2xl font-bold">アクション</h2>
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

              <div id="action" className="h-2/3 text-right">
                <h2 className="mb-1 text-2xl font-bold">ブロックをけす</h2>
                <button
                  className={deleteButtonClass}>
                  1つけす
                </button>
                <br />
                <button
                  className={deleteButtonClass}>
                  ぜんぶけす
                </button>
              </div>
            </div>

            <div id="if" className="pt-2 h-2/3">
              <h2 className="mb-1 text-2xl font-bold">もしも</h2>
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

            <div id="condition" className="pt-2  h-2/3">
              <h2 className="mb-1 text-2xl font-bold">こんなとき</h2>
              <button
                className={condtionButtonClass}>
                おなじたかさ
              </button>
              <button
                className={condtionButtonClass}>
                ちがうたかさ
              </button>
            </div>
          </div>
          </div>
        </div>

          <div id="code-editor">
            <h1 className="pt-2 text-4xl font-bold text-center">あなたのプログラム</h1>
            <div id="border" className="border h-5/6">
              <div className="fixed bottom-24 left-3/4 transform -translate-x-1/4">
                <button
                  className={submitButtonClass}>
                 かんせい
                </button>
              </div>
            </div>
          </div>

      </div>
    </>
  );
}

export default Home;
