
import { useEffect, useState } from 'react';
import style from './Menu.module.css';
type Props = {
    menuAtivo: string;
    setMenuAtivo: (menu: string) => void;
};

export default function Menu({ menuAtivo, setMenuAtivo }: Props) {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 700) return;
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <nav className={`${style.container} ${scrollY > 50 && style.fixed}`} style={{ position: scrollY > 50 ? 'fixed' : 'relative' }}>
            <ul>
                <li className={menuAtivo === 'sobre mim' ? style.active : ''} onClick={() => setMenuAtivo('sobre mim')}>Sobre Mim</li>
                <li className={menuAtivo === 'projetos' ? style.active : ''} onClick={() => setMenuAtivo('projetos')}>Projetos</li>
                <li className={menuAtivo === 'contato' ? style.active : ''} onClick={() => setMenuAtivo('contato')}>Contato</li>
            </ul>
        </nav>
    );
}