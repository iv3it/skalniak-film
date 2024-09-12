export interface DataCMS {
  [key: string]: {
    data: {
      [key: string]: {
        items: any[],
      }
    }
  }
}

export interface Link {
  url: string; 
  text: string;
}

export interface Photo {
  url: string;
}

export interface Hero {
  title: string;
  description: string;
  heroBackground: Photo;
}

export interface About {
  description: string;
  button: Link;
}

export interface LinkArray {
  items: Array<Link>;
}

export interface Contact {
  description: string;
  descriptionShort: string;
  socialMediaCollection: LinkArray;
  contactLinksCollection: LinkArray;
}

export interface OfferBox {
  title: string;
  description: string;
  link: Link;
  background: Photo;
}

export interface Offer {
  description: string;
  packetTypeCollection: {
    items: Array<PacketType>
  };
}

export interface PacketType {
  name: string;
  packetCollection: {
    items: Array<Packet>;
  }
}

export interface Packet {
  text: string;
  name: string;
  price: string;
  includesList: Array<string>;
}

export interface Testimonials {
  testimonialCollection: {
    items: Array<Testimonial>;
  }
}

export interface Testimonial {
  text: string;
  name: string;
}

export interface PortfolioPhotos extends Hero {
  photoCategoriesCollection: {
    items: Array<PhotoCategory>
  }
}

export interface PhotoCategory {
  title: string;
  photosCollection: {
    items: Array<Photo>;
  }
}

export interface PortfolioVideos extends Hero {
  videoCollection: {
    items: Array<VideoBox>;
  }
}

export interface VideoBox {
  title: string;
  description: string;
  video: Video;
}

export interface Video {
  url: string;
}