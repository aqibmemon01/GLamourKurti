exports.createPages = async function ({ graphql, actions}) {
  const path = require("path")
  //  const query = await graphql(`
  //  {
  //      allShopifyProduct(sort: {fields: title}) {
  //   edges {
  //     node {
  //       title
  //       description
  //       images {
  //         originalSrc
  //       }
  //       shopifyId
  //       availableForSale
  //       priceRange {
  //         maxVariantPrice {
  //           amount
  //         }
  //         minVariantPrice {
  //           amount
  //         }
  //       }
  //     }
  //   }
  // }
  //       }  `)

  // console.log(JSON.stringify(query));

 let data = [
   {
     id:1,
     title:"I Phone",
     desc:"This is Description"
   },
   {
    id:2,
    title:"Samsung",
    desc:"This is Description"
  },
  {
    id:3,
    title:"Nokia",
    desc:"This is Description"
  }
 ]

  data.map((data) => {
    actions.createPage({
        path: `/product/${data.title}`,
        component: path.resolve("./src/template/productDetail.tsx"),
        context: data,
    });
})


}