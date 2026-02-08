"use client";
import { useState } from "react";
import style from "./Sobre.module.css";
import { jornada } from "@/utils/jornada";

export default function SobreMim() {
    const [jornadaSelecionada, setJornadaSelecionada] = useState(2020);

    return (
        <div className={style.container}>
            <section className={style.hero}>
                <h2>Bruno Henrique</h2>
                <p>
                    Sou desenvolvedor Frontend, formado em Sistemas de Informação pela Estácio de Sá.
                </p>
                <p>
                    Trabalho principalmente com React e Next.js, criando interfaces modernas, responsivas e bem estruturadas. Tenho experiência com TypeScript, Tailwind CSS e styled-components.
                </p>
                <p>
                    Atualmente estudo Python com o objetivo de me tornar
                    Full Stack e busco minha
                    primeira oportunidade como desenvolvedor júnior.
                </p>
            </section>

            <section className={style.skills}>
                <h3>Habilidades</h3>
                <ul>
                    <li>React.js e Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS e styled-components</li>
                    <li>Consumo de APIs REST</li>
                    <li>Git e GitHub</li>
                    <li>Noções de UI/UX (Figma)</li>
                    <li>PWA</li>
                    <li>Testes com Jest</li>
                </ul>
            </section>

            <section className={style.timeline}>
                <h3>Jornada</h3>

                <div>
                    {Object.keys(jornada).map((ano) => (
                        <div key={ano}>
                            <div className={`${style.dots} ${jornadaSelecionada === Number(ano) && style.active}`} style={{ transform: `translateX(${jornadaSelecionada * 100}%)` }} />
                            <button
                                key={ano}
                                className={
                                    jornadaSelecionada === Number(ano)
                                        ? style.active
                                        : ""
                                }
                                onClick={() => setJornadaSelecionada(Number(ano))}
                            >
                                {ano}
                            </button>
                        </div>
                    ))}
                </div>

                <p>{jornada[jornadaSelecionada]}</p>
            </section>
        </div>
    );
}
