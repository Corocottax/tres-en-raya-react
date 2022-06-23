import React, { useState } from 'react'
import "./Juego.scss"

const Juego = () => {

    const cuadrados = [];
    const [seleccionado, setSeleccionado] = useState("");
    const [anterior, setAnterior] = useState("");

    const inicio = () => {
        for (let i = 0; i < 9; i++) {
            cuadrados.push(<div key={i} className='cuadrados' id={`${i}`} onClick={(e) => pintar(e)}></div>)
        }
        return cuadrados
    }

    /* elemento = una etiqueta de html, una p... un div... un h3... */
    /* evento = una acción que se ejecuta cuando el usuario realiza cierta acción, hacer click... hacer un input... un mouseover... */

    const pintar = (e) => {
        if (e.target.textContent === "" && anterior !== seleccionado && seleccionado !== "") {
            setAnterior(seleccionado);
            e.target.textContent = seleccionado;
            setSeleccionado("");
            comprobar();
        }

    }

    const comprobar = () => {

        const cero = document.getElementById("0");
        const uno = document.getElementById("1");
        const dos = document.getElementById("2");
        const tres = document.getElementById("3");
        const cuatro = document.getElementById("4");
        const cinco = document.getElementById("5");
        const seis = document.getElementById("6");
        const siete = document.getElementById("7");
        const ocho = document.getElementById("8");

        if (cero.textContent === "x" && uno.textContent === "x" && dos.textContent === "x" || cero.textContent === "x" && tres.textContent === "x" && seis.textContent === "x" ||
            cero.textContent === "x" && cuatro.textContent === "x" && ocho.textContent === "x" ||
            uno.textContent === "x" && cuatro.textContent === "x" && siete.textContent === "x" ||
            dos.textContent === "x" && cinco.textContent === "x" && ocho.textContent === "x" ||
            tres.textContent === "x" && cuatro.textContent === "x" && cinco.textContent === "x" ||
            seis.textContent === "x" && siete.textContent === "x" && ocho.textContent === "x" ||
            dos.textContent === "x" && cuatro.textContent === "x" && seis.textContent === "x") {
            setTimeout(() => {
                alert("HAN GANADO LAS X")
            }, 500);
        } else if (cero.textContent === "o" && uno.textContent === "o" && dos.textContent === "o" || cero.textContent === "o" && tres.textContent === "o" && seis.textContent === "o" ||
            cero.textContent === "o" && cuatro.textContent === "o" && ocho.textContent === "o" ||
            uno.textContent === "o" && cuatro.textContent === "o" && siete.textContent === "o" ||
            dos.textContent === "o" && cinco.textContent === "o" && ocho.textContent === "o" ||
            tres.textContent === "o" && cuatro.textContent === "o" && cinco.textContent === "o" ||
            seis.textContent === "o" && siete.textContent === "o" && ocho.textContent === "o" ||
            dos.textContent === "o" && cuatro.textContent === "o" && seis.textContent === "o") {
            setTimeout(() => {
                alert("HAN GANADO LAS O");
            }, 500);
        }

    }

    return (
        <div className='juego'>
            <div className='cuadrados' onClick={() => setSeleccionado("o")}>o</div>
            <div className='tablero'>
                {inicio()}
            </div>
            <div className='cuadrados' onClick={() => setSeleccionado("x")}>x</div>
        </div>
    )
}

export default Juego