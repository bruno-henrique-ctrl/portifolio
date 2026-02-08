"use client";
import style from "./page.module.css";
import Footer from "@/components/Footer";
import SobreMim from "@/components/Sobre";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import { useState, useEffect } from "react";
import Menu from "@/components/Menu";

export default function Home() {
  const [menuAtivo, setMenuAtivo] = useState<string>('sobre mim');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>
          Bruno Henrique - Desenvolvedor
        </h1>
        <button className={style.themeButton} onClick={toggleTheme}>
          {dark ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </header>

      <div className={style.menu}>
        <Menu menuAtivo={menuAtivo} setMenuAtivo={setMenuAtivo} />
      </div>

      <main className={style.content}>
        {menuAtivo === 'sobre mim' && <SobreMim />}
        {menuAtivo === 'projetos' && <Projetos />}
        {menuAtivo === 'contato' && <Contato />}
      </main >

      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}
