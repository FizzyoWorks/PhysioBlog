module.exports = {
    theme: '@vuepress/blog',
    themeConfig: {
        // Please keep looking down to see the available options
        nav: [
            {
              text: 'Home',
              link: '/',
            },
            {
              text: 'Archive',
              link: '/archive/',
            },
            {
              text: 'Tags',
              link: '/tag/',
            },
          ],
          footer: {
            contact: [
              {
                type: 'instagram',
                link: 'https://instagram.com/footiephysio',
              },
            ],
          },
    },
    plugins: [
        [
            '@vuepress/blog',
            {
                directories: [
                    {
                        // Unique ID of current classification
                        id: 'post',
                        // Target directory
                        dirname: '_posts',
                        // Path of the 'entry page' (or 'list page')
                        path: '/',
                        itemLayout: 'Post',
                        itemPermalink: '/:year/:month/:day/:slug',
                        pagination: {
                            lengthPerPage: 5,
                          },
                    }
                ]
            }
        ]
    ]
}