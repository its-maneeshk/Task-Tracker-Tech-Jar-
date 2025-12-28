const STORAGE_KEY = "tasks";

export const getTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
    }, 300);
  });
};

export const saveTasks = (tasks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      resolve();
    }, 300);
  });
};
