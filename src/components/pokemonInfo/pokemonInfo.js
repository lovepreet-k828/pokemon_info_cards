import React, { useState } from "react";
import "./pokemonInfo.css";

const Pokeinfo = ({ data }) => {
    const [image, setImage] = useState("dream-world");
    const [exten, sets] = useState(".svg");
    var dataId = ""; var dataHeight = 10;

    if (data) { dataId = data.id; dataHeight = data.height; dataHeight *= 4; }

    return (
        <>
            {
                (!data) ? <h1 className="text-xl font-black ">Click any pokemon card to see details</h1> : (
                    <>
                        <div>
                            <h1 className="text-xl font-black shadow-xl py-2">{data.name}</h1>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/${image}/${dataId}${exten}`}
                                className="mt-4 mx-auto" style={{ width: `${dataHeight}%`, height: `${dataHeight}%` }} alt="" />
                            {console.log(data.height)}
                            <h1 className="shadow-xl rounded-b-lg font-black text-xl border-t-black bg-sky-300 py-1 mt-1">Images</h1>
                            <div className="flex-1 flex-wrap justify-evenly">
                                <button onClick={() => { setImage("home"); sets(".png"); }}>home image</button>
                                <button onClick={() => { setImage("official-artwork"); sets(".png"); }}>Official artwork image</button>
                                <button onClick={() => { setImage("dream-world"); sets(".svg"); }}>default image</button>
                            </div>

                            <div className="abilities">
                                <h1 className="border-black p-2 font-black border-r-2">Abilities</h1>
                                {
                                    data.abilities.map(poke => {
                                        return (
                                            <>
                                                <div className="group">
                                                    <h2>{poke.ability.name}</h2>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>

                            <div className="base-stat" >
                                <div className="shadow-xl font-black text-2xl rounded-lg border-t-0 py-1 my-3 ">
                                    Detailes</div>
                                {
                                    data.stats.map(poke => {
                                        return (
                                            <>

                                                <div style={{
                                                    backgroundColor: "gold", fontWeight: "bolder",
                                                    display: "flex", justifyContent: "center", flexWrap: "wrap",
                                                    margin: "1% 10%",
                                                    border: "none", borderRadius: "5px",
                                                    boxShadow: "0 5px 5px rgba(0,0,0,0.5)"
                                                }}>
                                                    <h1>{poke.stat.name} : {poke.base_stat}</h1>
                                                </div>

                                            </>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </>
                )
            }

        </>
    )
}
export default Pokeinfo