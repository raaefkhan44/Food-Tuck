export interface Dhill{
    _id:string;
    quantity:number;
    name: string;
    price: number;
    originalPrice: number;
    image: string;
    description: string;
    category: string;
    tags: string[];
    available: boolean;
    slug : {
        _type: "slug"
        current: string
    }
  } ;