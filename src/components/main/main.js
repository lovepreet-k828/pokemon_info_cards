import React from "react";
import Card from "../card/card";
import Pokeinfo from "../pokemonInfo/pokemonInfo.js";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './main.css';

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=3")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
    const [inp, setinput] = useState("");

    const searchHandle = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inp}`);
            setPokeDex(res.data);
            setinput("");
        }
        catch {
            console.log("refresh page");
        }
    }

    const pokeFun = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url);

            setNextUrl(res.data.next);
            setPrevUrl(res.data.previous);
            getPokemon(res.data.results)
            setLoading(false)
        }
        catch {
            console.log("refresh page");
        }
    }
    const getPokemon = async (res) => {
        // console.log("re", res);

        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                if (state.length !== 0) {
                    if (result.data.id === state[state.length - 1].id);
                    else {
                        state = [...state, result.data];
                    }
                }
                else state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
        //    console.log("pk",pokeData);   
    }

    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <>
            <div className="btn-group">
                {prevUrl && <button onClick={() => {
                    setPokeData([])
                    setUrl(prevUrl)
                }}>Previous</button>}

                <input type="text" onChange={(e) => { setinput((e.target.value).toLowerCase()) }}
                    placeholder="Enter pokemon name"></input>
                <button onClick={() => { searchHandle() }}>Search</button>

                {nextUrl && <button onClick={() => {
                    setPokeData([])
                    setUrl(nextUrl)
                }}>Next</button>}
            </div>

            <div className="container">
                <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
            </div>

            <div className="main-content">
                <div className="classPokeInfo">
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>

        </>
    )
}
export default Main;