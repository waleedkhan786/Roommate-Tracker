// Retrieves data from localStorage and parses it
export const getDataFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  try {
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    return null;
  }
};

// Stringifies and saves data under the given key
export const saveDataToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving localStorage key "${key}":`, error);
  }
};
