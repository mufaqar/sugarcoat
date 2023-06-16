

export const AllServices = `
query AllServices {
     services {
       nodes {
         title
         content
         featuredImage {
           node {
             mediaItemUrl
           }
         }
       }
     }
   }
`

export const AllLocations = `
query AllLocations {
     locations {
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
         }
       }
     }
   }
`

export const AllPress = `
query AllPress {
     allPress {
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
`