module.exports = {
    theme: '@vuepress/blog',
    themeConfig: {
        // Please keep looking down to see the available options
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
                        path: '/'
                    }
                ]
            }
        ]
    ]
}