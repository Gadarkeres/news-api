export function useRequestNews() {
  async function requestNews() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=br&apiKey=9b0b1c4d6d5f4b8a9f8b7c9a9f8b7c9a"
    );
    const data = await response.json();
    return data;
  }
}
