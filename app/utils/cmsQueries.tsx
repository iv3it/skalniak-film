export let heroQuery = `
  query {
    heroCollection {
      items {
        title
        subtitle
        heroBackground {
          url
        }
      }
    }
  }
`;

export let aboutMeQuery = `
  query {
    aboutMeCollection {
      items {
        description
        button {
          url
          text
        }
      }
    }
  }
`;

export let offerBoxesQuery = `
  query {
    offerBoxesCollection {
      items {
        title
        description
        link {
          url
        }
        background {
          url
        }
      }
    }
  }
`;

export let contactQuery = `
  query {
    footerCollection {
      items {
        description
        descriptionShort
        socialMediaCollection {
          items {
            url
            text
          }
        }
        contactLinksCollection {
          items {
            url
            text
          }
        }
      }
    }
  }
`;

export let offerQuery = `
  query {
    offerCollection(limit: 1) {
      items {
        description
        packetTypeCollection(limit: 5) {
          items {
            name
            packetCollection(limit: 20) {
              items {
                text
                name
                price
                includesList
              }
            }
          }
        }
      }
    }
  }
`;

export let testimonialsQuery = `
  query {
    testimonialsCollection {
      items {
        testimonialCollection {
          items {
            text
            name
          }
        }
      }
    }
  }
`;

export let portfolioPhotosQuery = `
  query {
    portfolioPhotosCollection(limit: 1) {
      items {
        title
        description
        heroBackground {
          url
        }
        photoCategoriesCollection(limit: 10) {
          items {
            title
            photosCollection {
              items {
                title
                description
                contentType
                fileName
                size
                url
                width
                height
              } 
            }
          }
        }
      }
    }
  }
`;

export let portfolioVideos = `
  query {
    portfolioVideosCollection(limit: 1) {
      items {
        title
        description
        heroBackground {
          url
        }
        videoCollection(limit: 100) {
          items {
            title
            description
            video {
              url
            }
          }
        }
      }
    }
  }
`;