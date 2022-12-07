export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "retailer",
            title: "Retailer",
            type: "string",
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        }
    ]
}