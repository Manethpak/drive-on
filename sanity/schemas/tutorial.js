export default {
  name: "tutorial",
  title: "Tutorial",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
  ],
};
