import styles from "../styles/Porta.module.css"
import PortaModel from "@/model/porta"
import Presente from "./Presente"
interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void 
}

export default function Porta(props: PortaProps){
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta? styles.selecionada : ''

    const alterarSelecao = () => props.onChange(porta.alternarSelecao())
    const abrir = (e: { stopPropagation: () => void }) => { 
        e.stopPropagation()
        props.onChange(porta.abrir())
} 
    function renderizarPorta() { 
        return(
                <div className={styles.porta}>
                    <div className={styles.macaneta}
                        onClick = {abrir}>
                    </div>
                    <div className={styles.numero}>{porta.numero}</div>
                </div>
        )
    }

    return(
        <div className={styles.area} onClick={alterarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
            {!porta.aberta ? renderizarPorta(): porta.temPresente? <Presente></Presente>:false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}