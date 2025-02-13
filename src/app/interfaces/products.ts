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