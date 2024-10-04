import { groq } from "next-sanity";
import { readClient } from "./lib/client";

export const getProjects = async () => {
  try {
    const projects = await readClient.fetch(
      groq`*[_type == "project"]{
  _id,
  title,
  des,
  img{
    asset->{
      _id,
      url
    }
  },
  iconLists[]{
    asset->{
      _id,
      url
    }
  },
  link
}
`
    );
    return projects;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
  }
};
export const getCompany = async () => {
    try {
      const projects = await readClient.fetch(
        groq`*[_type == "company"]{
  _id,
  name,
  img{
    asset->{
      _id,
      url
    }
  }
}

  `
      );
      return projects;
    } catch (error) {
      console.error("Failed to fetch resources:", error);
    }
  };
