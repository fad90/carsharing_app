const apiBase = "https://api-factory.simbirsoft1.com/api";

export async function getResource(url) {
  const res = await fetch(`${apiBase}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    },
  });
  return await res.json();
}

export function getCities() {
  return getResource("/db/city");
}

export function getPoints() {
  return getResource("/db/point");
}

export function getCars() {
  return getResource("/db/car");
}

export function getCategory() {
  return getResource("/db/category");
}
