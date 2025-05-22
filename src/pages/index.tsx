import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Presente from "../componets/Presente"
import Porta from "../componets/Porta"
import PortaModel from "@/model/porta";
import { useState } from "react";
import { atualizarPortas, criarPortas } from "@/functions/portas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [portas,setPortas] = useState(criarPortas(3,2))
  
  function renderizarPortas(){
    return portas.map(porta => {
      return <Porta key = {porta.numero} value ={porta} onChange={
        novaPorta => setPortas(atualizarPortas(portas, novaPorta))
      }/>
    })
  }

  return (
    <div style ={{display: "flex"}}>
        {renderizarPortas()}
    </div>
  )
}

 {/* <Presente /> */}
        {/* <div style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          border: "20px solid white"
        }}>
        </div>
        <div style={{
          width: "200px",
          height: "200px",
          backgroundColor: "purple",
        }}>
        </div> */}