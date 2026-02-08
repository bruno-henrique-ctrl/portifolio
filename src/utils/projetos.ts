type Projeto = {
    id: number;
    nome: string;
    descricao: string;
    tecnologias: string[];
    linkGithub: string;
    linkDemo: string;
    image: string;
}

export const projetos: Projeto[] = [
    {
        id: 1,
        nome: "Gerenciador de Validades com IA",
        descricao: "Aplicativo (PWA) que utiliza inteligência artificial para ajudar usuários a monitorar e gerenciar as datas de validade de seus produtos alimentícios, enviando notificações antes que os itens expirem.",
        tecnologias: ["React", "Next.js", "TypeScript", "Tailwind CSS", "openai", 'web-push', 'upstash'],
        linkGithub: 'https://github.com/bruno-henrique-ctrl/gerenciador_validades',
        linkDemo: 'https://gerenciador-validades.vercel.app/',
        image: '/imgs/projeto1.webp'
    },
    {
        id: 2,
        nome: "Emissor de GoodVibes com IA",
        descricao: "Aplicativo (PWA) que utiliza inteligência artificial para gerar e enviar mensagens positivas e motivacionais personalizadas aos usuários, promovendo bem-estar e otimismo no dia a dia.",
        tecnologias: ["React", "Next.js", "TypeScript", "Tailwind CSS", "openai", 'web-push', 'upstash', 'uuid'],
        linkGithub: 'https://github.com/bruno-henrique-ctrl/goodvibes',
        linkDemo: 'https://goodvibes-taupe.vercel.app/',
        image: '/imgs/projeto2.webp'
    },
    {
        id: 3,
        nome: "Naruto Flix",
        descricao: "Aplicativo web que oferece dados sobre os personagens e episódios do anime Naruto, permitindo aos fãs explorar informações detalhadas sobre sua série favorita.",
        tecnologias: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Axios", "Naruto API"],
        linkGithub: 'https://github.com/bruno-henrique-ctrl/narutoflix',
        linkDemo: 'https://narutoflix-lovat.vercel.app/',
        image: '/imgs/projeto3.webp'
    },
    {
        id: 4,
        nome: "Harry Potter  Overview",
        descricao: "Aplicativo web que oferece infomarções sobre os personagens, filmes e livros da série Harry Potter, permitindo aos fãs explorar detalhes fascinantes do universo mágico criado por J.K. Rowling.",
        tecnologias: ["React", "Next.js", "TypeScript", "Jest", "vercel", "Axios", "Harry Potter API"],
        linkGithub: 'https://github.com/bruno-henrique-ctrl/harrypotter',
        linkDemo: 'https://harrypotter-gamma.vercel.app/',
        image: '/imgs/projeto4.webp'
    },
]