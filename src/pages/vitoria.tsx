import BackgroundMusic from "@/componets/BackgroundMusic";
import style from "@/styles/Vitoria.module.css"
import { useState } from "react";
export default function vitoria(){
    const [imagemAberta, setImagemAberta] = useState<string | null>(null);

    const imagens = [
        "/image/1.jpg",
        "/image/2.jpg",
        "/image/6.jpg",
        "/image/7.jpg",
        "/image/8.jpg",
        "/image/9.jpg",
        "/image/11.jpg",
        "/image/12.jpg",
        "/image/10.jpg",
        "/image/3.jpg",
        "/image/4.jpg",
        "/image/5.jpg",
    ];
    return(
        <div className={style.corpo}> 
        <BackgroundMusic />
            <div className={style.cartao}>
                <div className={style.cartao2}>
                    <h1>PARABÉNS<br />MINHA ROSA</h1>
                    <div>
                        <h2>NOSSA HISTORIA</h2>
                        <strong>Então, minha rosa,</strong><br />
                            <h3>Desde aquelas primeiras mensagens e aquele nosso primeiro encontro meio esquisito lá na UCS, que já escondia muita coisa linda que estava por vir, tudo começou a mudar. Lá no Baitakão, onde a gente se conheceu melhor, aconteceu o nosso primeiro beijo, e ali eu já estava completamente apaixonado por você. Eu sentia, com certeza, que era com você que eu queria dividir todo o meu amor. <br />
                        </h3>
                            <h3>A cada dia que passa, conforme vou te conhecendo mais, me apaixono ainda mais por quem você é. Já vivemos tantos momentos especiais: nossa primeira viagem juntos para Gramado, o nosso pedido de namoro, a primeira vez que fomos à praia lado a lado, todos os passeios no shopping, os lugares incríveis que você me apresentou, e tantos momentos únicos que vivemos juntos. <br />
                        </h3>
                        <h3>Pensando em tudo isso, preparei esta galeria de fotos, um pedacinho da nossa história, cheia de amor, risos e memórias inesquecíveis.</h3>
                    </div>
                        <strong>Nossa Galeria: </strong>
                    <div className={style.galeria}>
                            {imagens.map((src, index) => (
                                <div key={index} className={style.imagemContainer}>
                                    <img
                                    src={src}
                                    alt={`Foto ${index + 1}`}
                                    onClick={() => setImagemAberta(src)}
                                    className={style.imagem}
                                    />
                                </div>
                            ))}
                    </div> </div>
                </div>
                {imagemAberta && (
                    <div className={style.lightbox} onClick={() => setImagemAberta(null)}>
                    <img src={imagemAberta} alt="Foto ampliada" />
                    </div>
                )}
        </div>
    )
}