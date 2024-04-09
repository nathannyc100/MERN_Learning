import './App.css'
import React from 'react'

function App() {


    return (
        <>
            <Board />

        </>
    )

}

interface SquareVars {
    value: number;
}

interface BoardVars {
    value: number;
}

class Square extends React.Component<SquareVars> {
    handleClick() {
        console.log("square clicked");
    };

    render() {
        return (
            <button className = "square">
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component<{}, BoardVars> {
    renderSquare(i: number) {
        return <Square value = {i} />;
    }


    render() {
        const status: string = "hello"
        return (
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}



export default App
