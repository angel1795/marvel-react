import React, {useRef} from 'react'
import "./Home.css"
import {useState} from "react";
export default function Home() {
    const inPeli = useRef();
    const [ pelis, setPelis] = useState([
        { id: 1, name: 'Infinity War', seen: false },
		{ id: 2, name: 'Endgame', seen: false }
    ]);

    const addPeli = () => {
        let id = pelis[pelis.length-1].id + 1; 
        const namePeli = inPeli.current.value;
        const newPeli = {
            id: id,
            name: namePeli,
            seen: false
        }
        setPelis((p) => [...pelis, newPeli])
    }

    const seenPeli = (id) => {
        const allPelis = [ ...pelis ]; // copia del array de peliculas para poder modificarlo
		const mFilm = allPelis.find((movie) => movie.id === id);
		mFilm.seen = !mFilm.seen;
		setPelis(allPelis);
     
    }

    const deletePeli = (id) => {
        const pelisD = pelis.filter((peli) => peli.id !== id)
        console.log("eyyy")
        setPelis(pelisD)
    }

    return (
        <div className="container">
        <div className="inp-container">
            <input ref={inPeli} className="inpAdd" type="text"/><button onClick={addPeli} className="btnAdd">Añadir</button>
        </div>
        <div className="box-pelis">
            <table className="tb-pelis">
                <thead>
                    <tr>
                        <th scope="col">Nº</th>
                        <th scope="col">Pelicula</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pelis.map((peli, i) => (
                        <tr className="film-row">
                            <th scope="id">{i+1}</th>
                            <td>
                                {peli.name}
                                {peli.seen ? "✅" : ""}
                            </td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-success" onClick={() => seenPeli(peli.id)}>{peli.seen ? "La he visto" : "No la he visto"}</button>
                                    <button className="btn btn-danger" onClick={() => deletePeli(peli.id)}>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}
