interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "Cozy Apartment",
    image: "https://example.com/image1.jpg",
    address: "123 Main St, Anytown, USA",
    price: 100,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 1,
    rating: 4.5,
  },
  {
    id: "2",
    title: "Spacious House",
    image: "https://example.com/image2.jpg",
    address: "456 Elm St, Anytown, USA",
    price: 200,
    numOfGuests: 4,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 4.7,
  },
  {
    id: "3",
    title: "Modern Condo",
    image: "https://example.com/image3.jpg",
    address: "789 Pine St, Anytown, USA",
    price: 150,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 1,
    rating: 4.8,
  },
  {
    id: "4",
    title: "Charming Bungalow",
    image: "https://example.com/image4.jpg",
    address: "321 Oak St, Anytown, USA",
    price: 120,
    numOfGuests: 3,
    numOfBeds: 2,
    numOfBaths: 1,
    rating: 4.6,
  },
  {
    id: "5",
    title: "Luxury Villa",
    image: "https://example.com/image5.jpg",
    address: "654 Willow St, Anytown, USA",
    price: 300,
    numOfGuests: 5,
    numOfBeds: 3,
    numOfBaths: 2,
    rating: 4.9,
  },
];
