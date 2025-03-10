export const request = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Fetch failed on: ${url}, status: ${response.status}`);
  }

  return response.json();
};
