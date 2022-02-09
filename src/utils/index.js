export const storage = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return localStorage.getItem(key);
    }
  },
  set(key, val) {
    if (typeof val !== String) {
      try {
        localStorage.setItem(key, JSON.stringify(val));
      } catch {
        localStorage.setItem(key, val);
      }
    } else {
      localStorage.setItem(key, val);
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
};
