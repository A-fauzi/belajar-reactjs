import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

/**
 * Dengan melihat kode permulaan, Anda akan melihat bahwa kita memiliki tiga komponen React:
 *
 * Square,
 * Board,
 * Game
 */

// This component
// Komponen Square akan me-render sebuah <button>
class Square extends React.Component {
    render() {
        return(
            <button className="square">
                {this.props.value}
                {/*Mendapatkan value yang dikirim dari props*/}
            </button>
        )
    }
}

// This component
// komponen Board akan me-render 9 persegi.
class Board extends React.Component {
    // props in renderSquare method
    renderSquare(i) {
        // mengoperkan prop bernama value ke Square:
        return <Square value={i}/>
    }

    render() {
        const status = 'next player: X'

        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

// this component
// Komponen Game akan me-render sebuah papan dengan nilai sementara yang akan kita ganti nanti.
class Game extends React.Component {
    render() {
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}

// =========================================================
ReactDOM.render(<Game/>, document.getElementById("root"))