export enum Category {
    Glass = "GLASS",
    Plastic = "PLASTIC",
    Steel = "STEEL",
}

export enum Currency {
    Usd = "USD",
    Eur = "EUR",
}

type Image = {
    src: string;
    alt: string;
};

type Details = {
    weight: number;
    thickness: number;
    description: string;
    recommendations: Image[];
};

export type Product = {
    name: string;
    category: Category;
    price: number;
    currency: Currency;
    image: Image;
    bestseller: boolean;
    featured: boolean;
    details?: Details;
};
