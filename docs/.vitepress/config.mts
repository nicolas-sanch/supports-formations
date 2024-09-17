import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/supports-formations/',
  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      title: "Supports de formation",
      description: "Cours et outils destinés à l'apprentissage des technologies innovantes",
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/' },
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
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: "Training materials",
      description: "Courses, labs, and tools for learning technologies",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
        ],
        sidebar: [
          {
            text: 'Source Code Versions',
            collapsed: true,
            items: [
              { text: 'Course Outline', link: '/en/modules/vcs/course_outline.md' },
              { text: 'Configuration', link: '/en/modules/vcs/configuration.md' },
              { text: 'Create and Manage a Repository', link: '/en/modules/vcs/create_manage_repository.md' },
              { text: 'Branches', link: '/en/modules/vcs/branches.md' },
              { text: 'Remote Repositories', link: '/en/modules/vcs/remote_repositories.md' }
            ]
          },
          {
            text: 'Introduction to Web Development',
            collapsed: true,
            items: [
              { text: 'Introduction to Web Development', link: '/en/modules/intro_web_dev/intro_web_dev.md' }
            ]
          },
        ]
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nicolas-sanch/supports' }
    ]
  }
})
