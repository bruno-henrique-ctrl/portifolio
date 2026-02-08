"use client";
import { useForm, ValidationError } from "@formspree/react";
import style from "./Contato.module.css";

export default function Contato() {
    const [state, handleSubmit] = useForm("mlgdezva");
    if (state.succeeded) {
        return <p>Thanks!</p>;
    }

    return (
        <div className={style.container}>
            <section className={style.header}>
                <h1>Contato</h1>
                <p>
                    Quer conversar sobre uma oportunidade, projeto ou apenas trocar uma ideia?
                    Fique à vontade para entrar em contato comigo.
                </p>
            </section>

            <section className={style.form}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome" data-sr-only>Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Seu nome"
                            required
                        />
                    </div>
                    <ValidationError
                        prefix="Nome"
                        field="nome"
                        errors={state.errors}
                    />

                    <div>
                        <label htmlFor="email" data-sr-only>E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="seuemail@email.com"
                            required
                        />
                    </div>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <div>
                        <label htmlFor="mensagem" data-sr-only>Mensagem</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows={5}
                            placeholder="Escreva sua mensagem..."
                            required
                        />
                    </div>
                    <ValidationError
                        prefix="Mensagem"
                        field="mensagem"
                        errors={state.errors}
                    />

                    <div>
                        <button type="submit" disabled={state.submitting}>Enviar mensagem</button>
                    </div>
                </form>
            </section>

            <section className={style.outrosMeios}>
                <h2>Outros meios</h2>
                <p>Você também pode me encontrar por aqui:</p>

                <ul>
                    <li>
                        <a
                            href="https://github.com/bruno-henrique-ctrl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/brun-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="mailto:bruno.henriqueds@outlook.com.br">
                            bruno.henriqueds@outlook.com.br
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
