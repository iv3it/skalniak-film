import qs from 'qs';
import axios from 'axios';

const homePageQuery = qs.stringify(
  {
    sort: ['title:asc'],
    populate: {
      hero: {
        fields: ['title', 'description', 'background']
      },
      about: {
        fields: ['description'],
        populate: {
          link: {
            fields: ['url', 'text', 'isExternal']
          },
        },
      },
      portfolio: {
        fields: ['newest', 'title', 'subtitle'],
        populate: {
          photos: {
            fields: ['description', 'photo'],
          },
          videos: {
            fields: ['description', 'title', 'video'],
          },
        },
      },
      footer: {
        fields: ['title', 'description'],
        populate: {
          links: {
            fields: ['url', 'text', 'isExternal']
          },
          contactLinks: {
            fields: ['url', 'text', 'isExternal']
          }
        }
      }
    },
    fields: ['title'],
    publicationState: 'live',
    locale: ['en'],
  }
)

const offerPageQuery = qs.stringify(
  {
    sort: ['title:asc'],
    populate: {
      categories: {
        populate: {
          offerbox: {
            fields: ['packet', 'packetName', 'price'],
            populate: {
              itemsList: {
                fields: ['item'],
              },
            }
          },
        }
      },
      testimonials: {
        fields: ['title'],
        populate: {
          items: {
            fields: ['name', 'description'],
          }
        }
      },
      footer: {
        fields: ['title', 'description'],
        populate: {
          links: {
            fields: ['url', 'text', 'isExternal']
          },
          contactLinks: {
            fields: ['url', 'text', 'isExternal']
          }
        }
      }
    },
    fields: ['title'],
    publicationState: 'live',
    locale: ['en'],
  }
)

export async function getHomeStrapiData (path : string, option = {}) {
  let baseUrl : string | undefined = process.env.NEXT_PUBLIC_STRAPI_URL;  
  const url = new URL(path, baseUrl);
  url.search = homePageQuery;
  
  try {
    let fullData = await axios.get(url.href, {
      headers: {
        Authorization:
          `Bearer ${process.env.STRAPI_BEARER}`,
      },
    })

    let data = fullData.data.data;
    
    return {
      data
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getOfferStrapiData (path : string, option = {}) {
  let baseUrl : string | undefined = process.env.NEXT_PUBLIC_STRAPI_URL;  
  const url = new URL(path, baseUrl);
  url.search = offerPageQuery;
  
  try {
    let fullData = await axios.get(url.href, {
      headers: {
        Authorization:
          `Bearer ${process.env.STRAPI_BEARER}`,
      },
    })

    let data = fullData.data.data;
    
    return {
      data
    }
  } catch (error) {
    console.log(error);
  }
}