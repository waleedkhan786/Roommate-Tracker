
export const getDataFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  try {
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    return null;
  }
};


export const saveDataToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving localStorage key "${key}":`, error);
  }
};
