import Porta from "@/componets/Porta"
import { criarPortas, atualizarPortas } from "@/functions/portas"
import PortaModel from "@/model/porta"
import styles from "@/styles/Jogo.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import BackgroundMusic from "@/componets/BackgroundMusic"

export default function Jogo() {
  const router = useRouter()
  const [portas, setPortas] = useState<PortaModel[]>([])
  const [status, setStatus] = useState<"" | "GANHOU" | "PERDEU">("")
  useEffect(() => {
    const { portas: portasParam, temPresente } = router.query

    const numPortas = Number(portasParam)
    const posPresente = Number(temPresente ?? Math.floor(Math.random() * numPortas) + 1)

    if (!isNaN(numPortas) && numPortas >= 3 && posPresente >= 1 && posPresente <= numPortas) {
      setPortas(criarPortas(numPortas, posPresente))
    }
  }, [router.query])

  function handleChange(novaPorta: PortaModel) {
     if (status !== "") return
    const novasPortas = atualizarPortas(portas, novaPorta)
    setPortas(novasPortas)

    if (novaPorta.aberta && novaPorta.temPresente) {
      const fechadas = novasPortas.filter(p => !p.aberta)
      if (fechadas.length > 0) {
        setStatus("PERDEU")
      } else {
        setStatus("GANHOU")
          setTimeout(() => {
            router.push("/vitoria")
          }, 2000)
      }
    }
  }

  function renderizarPortas() {
    return portas.map((porta) => (
      <Porta key={porta.numero} value={porta} onChange={handleChange} />
    ))
  }

  return (
    <div className={styles.jogo}>
      <BackgroundMusic />
      {status && (
        <div className={`${styles.resultado} ${status === "GANHOU" ? styles.venceu : styles.perdeu}`}>
          <div className={`${status === "GANHOU" ? styles.venceu : styles.perdeu}`}></div>
          <h2>{status}</h2>
        </div>
      )}
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
      
    </div>
  )
}
