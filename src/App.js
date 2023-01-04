import React, {useState} from 'react';

//SCSS
import styles from "./App.module.scss"

const App = () => {


    const [result, setResult] = useState("");


    //Helper Functions

    const clickHandler = (e) => {
        setResult(result.concat(e.target.name))
    }

    const delHandler = () => {
        setResult("")
    }

    const backSpaceHandler = () => {
        setResult(result.slice(0, -1))
    }

    const calculateHandler = () => {
        try {
            setResult(eval(result).toLocaleString());
        } catch (err) {
            setResult("Error")
        }
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <div>{result}</div>
                </div>
                <div className={styles.btn}>
                    <button name="C" onClick={backSpaceHandler} id="backspace">C</button>
                    <button name="del" onClick={delHandler}>DEL</button>
                    <button name="*" onClick={clickHandler}>&times;</button>
                    <button name="1" onClick={clickHandler}>1</button>
                    <button name="2" onClick={clickHandler}>2</button>
                    <button name="3" onClick={clickHandler}>3</button>
                    <button name="/" onClick={clickHandler}>&divide;</button>
                    <button name="4" onClick={clickHandler}>4</button>
                    <button name="5" onClick={clickHandler}>5</button>
                    <button name="6" onClick={clickHandler}>6</button>
                    <button name="-" onClick={clickHandler}>&ndash;</button>
                    <button name="7" onClick={clickHandler}>7</button>
                    <button name="8" onClick={clickHandler}>8</button>
                    <button name="9" onClick={clickHandler}>9</button>
                    <button name="+" onClick={clickHandler}>+</button>
                    <button name="." onClick={clickHandler}>.</button>
                    <button name="0" onClick={clickHandler}>0</button>
                    <button name="=" onClick={calculateHandler}>=</button>
                </div>
            </div>
        </div>
    );
};

export default App;