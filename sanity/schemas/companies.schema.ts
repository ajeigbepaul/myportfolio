const schema =  {
    name: 'company',
    title: 'Company',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'img',
        title: 'Logo Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  

  export default schema