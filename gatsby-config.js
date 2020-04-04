/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');


module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: path.join(__dirname, `src`, `assets`, `images`),
                name: 'images',
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Nunito Sans`,
                        variants: [`700`, `800`]
                    },

                    {
                        family: `Poppins`,
                        variants: [`400`, `500`],
                    }
                ],
            },
        },
    ]
};
