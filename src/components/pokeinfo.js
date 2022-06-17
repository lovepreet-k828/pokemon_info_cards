import React, { useState } from "react";
import "./style.css";

const Pokeinfo = ({ data }) => {
    const [image, setImage] = useState("dream-world");
    const [exten, sets] = useState(".svg");
    var dataId="";var dataHeight=10;

   if(data){dataId=data.id;dataHeight=data.height;dataHeight*=4;}

    return (
        <>
        {
            (!data) ? <h1 style={{fontSize: "medium", fontWeight: "bolder"}}>Click any pokemon card to see details</h1> : (
                <>
                <div>
                <h1 style={{boxShadow: "0 5px 5px rgba(0,0,0,0.5)", fontWeight: "bolder",
                fontSize: "x-large",}}>{data.name}</h1>
<img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/${image}/${dataId}${exten}`}
 style={{width: `${dataHeight}%`, height: `${dataHeight}%`, margin: "auto", marginTop: "1rem", }} alt="" />
{console.log(data.height)}
<h1 style={{boxShadow: "0 5px 5px rgba(0,0,0,0.5)", fontWeight: "bolder",
                fontSize: "x-large", paddingTop: "0",
                borderTop: "1px solid black", borderRadius: "5px",
                backgroundColor: "skyblue"}}>Images</h1>
 <div className="btn-img">
                    <button onClick={()=>{setImage("home");sets(".png");}}>home image</button>
                    <button onClick={()=>{setImage("official-artwork");sets(".png");}}>Official artwork image</button>
                    <button onClick={()=>{setImage("dream-world");sets(".svg");}}>default image</button>
                    </div>

<div className="abilities">
    <h1 style={{borderRight: "1px solid black", marginTop: "0", padding: "0.5rem", fontWeight: "bolder"}}>Abilities</h1>
                        {
                            data.abilities.map(poke=>{
                                return(
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
                    <h1 style={{boxShadow: "0 5px 5px rgba(0,0,0,0.5)", fontWeight: "bolder",
                fontSize: "x-large", paddingTop: "0", border: "none", borderRadius: "5px"}}>
                    Detailes</h1>
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                    
                                        <div style={{ backgroundColor: "gold", fontWeight: "bolder", 
                                        display: "flex", justifyContent: "left", 
                                         paddingLeft: "10%", margin: "1% 10%",
                                        border: "none", borderRadius: "5px",
                                        boxShadow: "0 5px 5px rgba(0,0,0,0.5)"}}>
                                            <h1 style={{paddingLeft: "5%", width: "50%"}}>{poke.stat.name}</h1>
                                            :<div style={{paddingLeft: "5%", }}>{poke.base_stat}</div>
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