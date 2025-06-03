import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Cartao from "@/componets/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";
import BackgroundMusic from "@/componets/BackGroundMusic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const num = 10
  return (
    <div className={styles.formulario}>
      <BackgroundMusic />
      <div>
        <Cartao bgcolor={"#FFD6BA"}>
            <h1>Dia dos<br/> Namorados</h1>
          </Cartao>
        <Cartao bgcolor={"#fde8dd"}>
          <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <Image
              src="/image/foto1.jpg"
              alt="foto1"
              fill
              style={{ objectFit: "cover" }} // ou contain
            />
          </div>
        </Cartao>
      </div>
      <div>
        <Cartao bgcolor={"#fde8dd"}>
          <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <Image
              src="/image/foto2.jpg"
              alt="foto1"
              fill
              style={{ objectFit: "cover" }} // ou contain
            />
          </div>
        </Cartao>
        <Cartao bgcolor={"#FFE8CD"}>
          <div className={styles.botoes}>
              <Link href="/jogo/3"><button>Modo Super Fácil</button></Link>
              <Link href="/jogo/5"><button>Fácil</button></Link> 
              <Link href="/jogo/10"><button>Normal</button></Link>
              <Link href="/jogo/16"><button>Difícil</button></Link>
            </div>
        </Cartao>
      </div>
    </div>
  )
}

 {/* {renderizarPortas()}  */}
// const [portas,setPortas] = useState(criarPortas(3,2))
  
  // function renderizarPortas(){
  //   return portas.map(porta => {
  //     return <Porta key = {porta.numero} value ={porta} onChange={
  //       novaPorta => setPortas(atualizarPortas(portas, novaPorta))
  //     }/>
  //   })
  // }
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