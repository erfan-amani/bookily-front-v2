const config = {
  BASE_URL: mandatory("VITE_BASE_URL"),
  IMAGE_URL: mandatory("VITE_IMAGE_URL"),
};

function mandatory(key) {
  const value = import.meta.env[key];

  if (!value) {
    throw new Error(`missing mandatory env value: ${key}`);
  }
  return value;
}

const { BASE_URL, IMAGE_URL } = config;
export { BASE_URL, IMAGE_URL };
