import { React, useState } from "react";

const App = () => {
  const [result, setresult] = useState("");
  const ClearCalic = () => {
    setresult("");
  };
  const getValue = (e) => {
    setresult(result.concat(e.target.name));
  };
  const deleteCalic = () => {
    setresult(result.slice(0, result.length - 1));
  };
  const CalicValue = () => {
    try {
      setresult(eval(result).toString());
    } catch (error) {
      setresult("The value is incorrect.");
      console.log(error);
    }
  };
  return (
    <div className="App ">
      <h1 className="title"> Calculator</h1>

      <div className="container_Calic">
        <input type="text" value={result} />
        <div className="container_buttons">
          <button name="" className="clear" onClick={ClearCalic}>
            Clear
          </button>
          <button onClick={getValue} name="(">
            (
          </button>
          <button onClick={getValue} name=")">
            )
          </button>
          <button onClick={getValue} name="/">
            /
          </button>
        </div>

        <div className="container_buttons">
          <button onClick={getValue} name="7">
            7
          </button>
          <button onClick={getValue} name="8">
            8
          </button>
          <button onClick={getValue} name="9">
            9
          </button>
          <button onClick={getValue} name="*">
            *
          </button>
        </div>

        <div className="container_buttons">
          <button onClick={getValue} name="4">
            4
          </button>
          <button onClick={getValue} name="5">
            5
          </button>
          <button onClick={getValue} name="6">
            6
          </button>
          <button onClick={getValue} name="-">
            -
          </button>
        </div>

        <div className="container_buttons">
          <button onClick={getValue} name="1">
            1
          </button>
          <button onClick={getValue} name="2">
            2
          </button>
          <button onClick={getValue} name="3">
            3
          </button>
          <button onClick={getValue} name="+">
            +
          </button>
        </div>

        <div className="container_buttons">
          <button onClick={deleteCalic} name="Del">
            Del
          </button>
          <button onClick={getValue} name=".">
            .
          </button>
          <button onClick={getValue} name="0">
            0
          </button>
          <button onClick={CalicValue} name="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
