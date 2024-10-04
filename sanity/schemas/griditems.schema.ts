const schema = {
    name: 'griditem',
    title: 'Grid Item',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'className',
        title: 'Class Name',
        type: 'string',
      },
      {
        name: 'imgClassName',
        title: 'Image Class Name',
        type: 'string',
      },
      {
        name: 'titleClassName',
        title: 'Title Class Name',
        type: 'string',
      },
      {
        name: 'img',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'spareImg',
        title: 'Spare Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
export default schema