const schema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "des",
      title: "Description",
      type: "string",
    },
    {
      name: "img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "iconLists",
      title: "Icon List",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
};
export default schema;
