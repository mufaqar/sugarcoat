export const AllServices = `
query AllServices {
     services(first: 1000, where: {orderby: {order: ASC, field: DATE}}) {
       nodes {
         title
         content
         featuredImage {
           node {
             mediaItemUrl
           }
         }
         servicesFields {
          info
        }
       }
     }
   }
`;

export const AllLocations = `
query AllLocations {
     locations(first: 1000, where: {orderby: {order: ASC, field: DATE}}) {
       nodes {
         title
         featuredImage {
           node {
             mediaItemUrl
           }
         }
         content
         locationFields {
           mobileNumber
           appoinmentLink
         }
       }
     }
   }
`;

export const AllPress = `
query AllPress {
     allPress(first: 1000) {
       nodes {
         featuredImage {
           node {
             mediaItemUrl
             altText
           }
         }
       }
     }
   }
`;

export const AllProducts = `
query AllProducts {
  products(first: 1000) {
    nodes {
      productFields {
        link
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}
`;
