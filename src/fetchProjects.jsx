import { createClient } from "contentful";
import { useState, useEffect } from 'react';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'portfolioProjects' });
      const projects = response.items.map(item => {
        const { github, text, title, url, img } = item.fields;
        const id = item.sys.id;
        const image = img?.fields?.file?.url;
        return { github, id, image, title, text, url };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
}