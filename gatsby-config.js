require('dotenv').config()
module.exports = {
    plugins: [
        // {
        //     resolve: `gatsby-source-shopify`,
        //     options: {
        //       shopName: process.env.SHOP_NAME,
        //       accessToken: process.env.ACCESS_TOKEN,
        //     }
        //   },
    ]
}

// require("dotenv").config()

// module.exports = {
//   plugins: [
//     {
//       resolve: "gatsby-source-shopify",
//       options: {
//         password: process.env.SHOPIFY_ADMIN_PASSWORD,
//         storeUrl: process.env.SHOPIFY_STORE_URL,
//       },
//     },
//     // "gatsby-plugin-image",
//   ],
// }