const BACKEND_URL = "http://localhost:5000";

export async function searchPosts(query, page) {
  const res = await fetch(
    `${BACKEND_URL}/posts/search?q=${encodeURIComponent(query)}&page=${page}`,
    {
      method: "GET",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!res.ok) throw new Error("Erreur API");

  return res.json();
}
