import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // TODOリストは状態が変化していく＝Reactでは状態をstateで管理する。
  const [imcompleteTodos, setImcompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);
  return (
    <>
      {/* jsxではclassはclassNameで指定する。 */}
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
          {/* <div className="list-row">
            <li>aaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div> */}
          {/* <div className="list-row">
            <li>aaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div> */}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
          {/* <div className="list-row">
            <li>aaaa</li>
            <button>戻す</button>
          </div> */}
        </ul>
      </div>
    </>
  );
};
