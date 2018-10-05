export const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await response.json();

      return data;
      
    } catch (e) {
      console.log(e);
    }
  };