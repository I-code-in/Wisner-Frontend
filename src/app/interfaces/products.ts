export interface ProductPaginate {
    total:     number;
    page:      number;
    limit:     number;
    totalPage: number;
    items:     Product[];
}

export interface Product {
    name:           string;
    value:          number;
    description:    string;
    warning:        string;
    active:         boolean;
    prepared_by_id: number;
    id:             number;
    image:          string;
    prepared_by:    PreparedBy;
}

export interface PreparedBy {
    name:    string;
    ruc:     string;
    address: string;
    city:    string;
    country: string;
    phone:   string;
    email:   string;
    re:      string;
    rspa:    string;
    id:      number;
}

export interface Ingredients {
    energy_value:       string;
    portion:            string;
    amount_per_serving: string;
    active:             boolean;
    id:                 number;
    product_id:         number;
}