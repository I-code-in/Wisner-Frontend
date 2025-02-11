interface product {
    name: string,
    value: number,
    description: string,
    code: string,
    image: string,
    ingredients: string
}
export interface products {
    products: product[],
    page: number,
    maxpage: number,
    count: number,
}