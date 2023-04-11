import './../productosMock.json'

export interface Card {
  starRatings: number;
  price: number;
  image: string;
  description: string;
  calification: number;
  numComments: number;
  certification: boolean;
  alexa: boolean;
  certificationClimate: boolean;
}

export interface CardsResponse {
  cards: Card[];
}


