export let storeInLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  
  export let retrieveFromLocalStorage = (key) => {
    let value = localStorage.getItem(key);
    return value;
  };
  
  export let removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  