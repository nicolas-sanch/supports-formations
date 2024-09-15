import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/supports-formations/',
  title: "Supports de formation",
  description: "Cours et outils destinés à l'apprentissage des technologies innovantes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      // { text: 'Modules', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Versions du code source',
        collapsed: true,
        items: [
          { text: 'Plan de cours', link: '/modules/vcs/plan_de_cours.md' },
          { text: 'Configuration', link: '/modules/vcs/configuration.md' },
          { text: 'Créer et manipuler un dépôt', link: '/modules/vcs/creer_manipuler_depot.md' },
          { text: 'Les branches', link: '/modules/vcs/utiliser_les_branches.md' },
          { text: 'Les dépots distants', link: '/modules/vcs/depots_distants.md' }
        ]
      },
      {
        text: 'Introduction au développement web',
        collapsed: true,
        items: [
          { text: 'Introduction au développement web', link: '/modules/intro_dev_web/intro_dev_web.md' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nicolas-sanch/supports' }
    ]
  }
})
