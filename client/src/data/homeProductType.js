import ring from "../images/home/types/ring.png";
import bracelets from "../images/home/types/bracelets.png";
import necklace from "../images/home/types/necklace.png";
import earrings from "../images/home/types/earrings.png";
import floralEarring from "../images/home/types/featured/floral-earring.png";
import weddingRings from "../images/home/types/featured/wedding-rings.png";
import jewelryAccessories from "../images/home/types/featured/jewelry-accessories.png";
import pearlNecklace from "../images/home/types/featured/pearl-necklace.png";

export const productType = [
  { type: "RINGS", image: ring },
  { type: "EAARINGS", image: earrings },
  { type: "BRACELETS", image: bracelets },
  { type: "NECKLACES", image: necklace },
];

export const featuredType = [
  {
    prefix: "BEAUTIFUL",
    type: `Wedding 
      Rings
    `,
    image: weddingRings,
  },
  {
    prefix: "EARRINGS",
    type: `Tangerine Floral 
    Earring`,
    image: floralEarring,
  },
  {
    prefix: "NEW ARRIVALS",
    type: `Pearl
   Necklaces`,
    image: pearlNecklace,
  },
  {
    prefix: "BEAUTIFUL",
    type: `Jewelry 
    Accessories`,
    image: jewelryAccessories,
  },
];

