import Link from "next/link";
import style from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={style.footer}>
            <ul>
                <li>
                    <Link
                        href="https://github.com/bruno-henrique-ctrl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.linkedin.com/in/brun-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="mailto:bruno.henriqueds@outlook.com.br">
                        bruno.henriqueds@outlook.com.br
                    </Link>
                </li>
            </ul>
        </div>
    );
}