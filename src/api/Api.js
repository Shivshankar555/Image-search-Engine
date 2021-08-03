const baseUrl = "https://api.unsplash.com/";
const API_KEY = process.env.API_KEY;

 
/*
 The Fetch API provides a JavaScript interface for accessing 
and manipulating parts of the HTTP pipeline, such as requests and responses.
*/

 export const getImages = async()=>{
    
    try {
        const response = await fetch(`${baseUrl}/photos?per_page=30`, {
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        });
        if (!response.ok) {
          console.error("failed", response.status);
          return;
        }
        const json = await response.json();
        // console.log(json);
        return json;
      } catch (error) {
        console.error("error in making request", error);
      }

    
};

/** Return the searched images */
export const getSearchedImages = async (query) => {
  const url = new URL(`${baseUrl}/search/photos`);
  url.search = new URLSearchParams({
    per_page: 30,
    query: query,
  });
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    if (!response.ok) {
      console.error("failed", response.status);
      return;
    }
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error("error in making request", error);
  }
};

