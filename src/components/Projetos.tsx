import Image from "next/image";
import { projetos } from "@/utils/projetos";
import style from "./Projetos.module.css";
import { useEffect, useState } from "react";

export default function Projetos() {
    const [projetosList, setProjetosList] = useState<number>(1)
    const [projetoAberto, setProjetoAberto] = useState<number | null>(null);
    const [numeroCards, setNumeroCards] = useState<number>(1);

    const handleAnterior = () => {
        if (projetosList > 1 && projetosList <= projetos.length) {
            setProjetosList(projetosList - 1);
        }
    };

    const handleProximo = () => {
        if (projetosList < projetos.length && projetosList >= 1) {
            setProjetosList(projetosList + 1);
        }
    };

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 600) {
                setNumeroCards(0); // mostra 1 card
            } else if (window.innerWidth <= 1100) {
                setNumeroCards(1); // mostra 2 cards
            } else {
                setNumeroCards(2); // mostra 3 cards
            }
        }

        handleResize(); // executa ao montar
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className={style.container}>
            <section className={style.header}>
                <h2>Projetos</h2>
                <p>
                    Alguns projetos que desenvolvi para praticar e evoluir minhas habilidades em Frontend.
                </p>
            </section>

            <section className={style.projetos}>
                <button type="button" disabled={projetosList <= 1} onClick={handleAnterior}>{'<'}</button>

                <div>
                    {projetos.map((projeto) => {
                        if (projeto.id <= projetosList + numeroCards && projeto.id >= projetosList) {
                            return (
                                <article key={projeto.id} className={`${style.card} ${projetoAberto === projeto.id && style.aberto}`}>
                                    <Image
                                        src={projeto.image}
                                        alt={projeto.nome}
                                        width={400}
                                        height={220}
                                    />

                                    <div>
                                        <h2>{projeto.nome}</h2>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setProjetoAberto(projetoAberto === projeto.id ? null : projeto.id)
                                            }
                                        >
                                            {projetoAberto === projeto.id ? "Voltar" : "Ver mais"}
                                        </button>


                                        {projetoAberto === projeto.id &&
                                            <>
                                                <p>{projeto.descricao}</p>

                                                <p>
                                                    <strong>Tecnologias:</strong>{" "}
                                                    {projeto.tecnologias.join(", ")}
                                                </p>
                                            </>
                                        }

                                        <nav>
                                            <a
                                                href={projeto.linkGithub}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub
                                            </a>{" "}
                                            |{" "}
                                            <a
                                                href={projeto.linkDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Ver
                                            </a>
                                        </nav>
                                    </div>
                                </article>
                            )
                        }
                    })}
                </div>

                <button type="button" disabled={projetosList + numeroCards >= projetos.length} onClick={handleProximo}>{'>'}</button>
            </section>
        </div>
    );
}
