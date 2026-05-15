const BACKEND_URL = "http://localhost:5000";

export async function Get_Unique_Offre(id) {
  const url = `${BACKEND_URL}/post/${id}`;

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
}
