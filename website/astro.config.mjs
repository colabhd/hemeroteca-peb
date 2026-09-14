// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://hemeroteca-peb.colabh.org",
	base: "/",
	integrations: [
		starlight({
			title: 'Documentação',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/colabhd/hemeroteca-peb' }],
			sidebar: [
        {
          label: 'Comece por aqui',
          items: [
            { label: 'Introdução', link: '/01-comece-aqui/01-intro' },
            { label: 'Estrutura da documentação', link: '/01-comece-aqui/02-estrutura-documentacao' },
            { label: 'Utilização rápida', link: '/01-comece-aqui/03-utilizacao-rapida' },
          ],
        },
        {
          label: 'Utilizando o projeto',
          items: [
            { label: 'Comandos', link: '/02-utilizacao/01-comandos/' },
            { label: 'Erros comuns', link: '/02-utilizacao/02-erros-comuns/' },
          ],
        },
        {
          label: 'Documentação Técnica',
          items: [
            { label: 'Estrutura do Projeto', link: '/03-documentacao-tecnica/01-estrutura' },
            { label: 'Tecnologias e dependências', link: '/03-documentacao-tecnica/02-tecnologias-dependencias' },
            { label: 'JSON', link: '/03-documentacao-tecnica/03-metadados' },
			      { label: 'Temas', link: '/03-documentacao-tecnica/04-revistas' },
            { label: 'Roadmap de Funcionalidades', link: '/03-documentacao-tecnica/05-roadmap-funcionalidades' },
          ],
        },
        {
          label: 'Contribuindo para o projeto',
          items: [
            { label: 'Introdução', link: '/04-contribuindo/01-introducao' },
            { label: 'Com o que posso contribuir?', link: '/04-contribuindo/02-como-contribuir' },
            { label: 'Guia de estilo', link: '/04-contribuindo/03-estilo' },
            { label: 'Como reportar bugs', link: '/04-contribuindo/04-bugs' },
          ],
        },
        {
          label: 'Projeto e comunidade',
          items: [
            { label: 'Equipe', link: '/05-projeto-e-comunidade/01-equipe' },
            { label: 'FAQ', link: '/05-projeto-e-comunidade/02-faq' },           
            { label: 'Contato', link: '/05-projeto-e-comunidade/03-contato' },
            { label: 'Apoio', link: '/05-projeto-e-comunidade/04-apoio' },
            { label: 'Referências', link: '/05-projeto-e-comunidade/05-referencias' },
            
          ],},
			],
		}),
	],
});
