import { APP_CONSTANTS } from "../constants/app";

export const setLocalStorageItem = (key, data) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
};

export const setLocalStorageString = (key, data) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, data);
  }
};

export const getLocalStorageItem = (key) => {
  if (typeof window !== "undefined") {
    const storedItem = sessionStorage.getItem(key);

    try {
      return storedItem ? JSON.parse(storedItem) : null;
    } catch (error) {
      // console.error(`Error parsing JSON for key '${key}':`, error);
      return null;
    }
  }

  return null;
};

export const getLocalStorageString = (key) => {
  if (typeof window !== "undefined") {
    const storedItem = sessionStorage.getItem(key);

    try {
      return storedItem ? storedItem : null;
    } catch (error) {
      // console.error(`Error parsing JSON for key '${key}':`, error);
      return null;
    }
  }

  return null;
};
export const removeLocalStorageItem = (key) => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(key);
  }
};

export const clearLocalStorage = () => {
  if (typeof window !== "undefined") {
    sessionStorage.clear();
  }
};

export const removeAllStorageItems = () => {
  removeLocalStorageItem(APP_CONSTANTS.token);
};
