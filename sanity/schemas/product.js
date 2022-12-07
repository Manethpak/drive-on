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
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "estimate_price",
      title: "Estimate Price",
      type: "number",
    },
    {
      title: "store",
      name: "store",
      type: "object",
      fields: [
        { name: "store_name", type: "string", title: "Store name" },
        { name: "store_url", type: "url", title: "Store url" },
      ],
    },
  ],
};
