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
              {
                text: 'Introduction', collapsed: true, items:
                  [
                    { text: 'La gestion de versions', link: '/modules/vcs/gestion_de_version.md' },
                    { text: 'Installation de Git', link: '/modules/vcs/installation.md' },
                    { text: 'Configuration', link: '/modules/vcs/configuration.md' }
                  ]
              },
              { text: 'Les trois zones', link: '/modules/vcs/trois_zones.md' },
              { text: 'Initialisation et commit', link: '/modules/vcs/commit.md' },
              { text: 'Git status', link: '/modules/vcs/git_status.md' },
              { text: 'Gérer ses versions', link: '/modules/vcs/gerer_versions.md' },
              { text: 'Les branches', link: '/modules/vcs/utiliser_les_branches.md' },
              { text: 'Git checkout', link: '/modules/vcs/git_checkout.md' },
              { text: 'Les dépots distants', link: '/modules/vcs/depots_distants.md' },
              {
                text: 'Travaux pratiques', collapsed: true, items:
                  [
                    { text: 'TP - Rainbow', link: '/modules/vcs/tp/tp1.md' },
                    { text: 'TP - Projet collaboratif en HTML/CSS', link: '/modules/vcs/tp/tp2.md' }
                  ]
              }
            ]
          },
          {
            text: 'Introduction au développement web',
            collapsed: true,
            items: [
              {
                text: 'Web statique', collapsed: true, items:
                  [
                    { text: 'HTML', link: '/modules/intro_dev_web/html.md' },
                    { text: 'CSS', link: '/modules/intro_dev_web/css.md' }
                  ]
              },
              {
                text: 'Web dynamique', collapsed: true, items:
                  [
                    { text: 'PHP', link: '/modules/intro_dev_web/php.md' },
                    { text: 'Laravel', link: '/modules/intro_dev_web/laravel.md' }
                  ]
              },
              {
                text: 'Travaux pratiques', collapsed: true, items:
                  [
                    { text: 'Hello-world PHP', link: '/modules/intro_dev_web/tp/hello-world_php.md' },
                    { text: 'Hello-world Python', link: '/modules/intro_dev_web/tp/hello-world_python.md' },
                    { text: 'Blog minimaliste', link: '/modules/intro_dev_web/tp/minimalist-blog.md' }
                  ]
              }
            ]
          },
          {
            text: 'Outils',
            collapsed: true,
            items: [
              { text: 'Windows Subsystem for Linux', link: '/modules/outils/wsl.md' },
              { text: 'Visual Studio Code', link: '/modules/outils/visual_studio_code.md' },
              { text: 'Docker', link: '/modules/outils/docker' }
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
  },

  ignoreDeadLinks: true
})
