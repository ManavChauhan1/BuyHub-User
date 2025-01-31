import qs from "query-string";

import { Product } from "@/types";

const URL = `https://buy-hub-admin-ok1qxmcah-manav-chauhans-projects.vercel.app/api/42bcb651-d581-402d-bdb2-ce247a1f949b/products`; 

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url : URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        }
    })

    const res = await fetch(url);

    return res.json();
}

export default getProducts;