import axios from "axios";

const getData = async (startUrl, col = []) => {
  let url = startUrl;
  const response = await axios.get(url);
  const items = response.data.results;
  const result = [...items, ...col];
  if (!response.data.next) {
    return result.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  return getData(response.data.next, result);
};

export default getData;
