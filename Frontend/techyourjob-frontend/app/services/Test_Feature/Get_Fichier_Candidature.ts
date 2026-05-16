const BACKEND_URL = "http://localhost:5000";

export async function Get_Fichier_Candidature(id) {
  const params = new URLSearchParams();

  const url = `${BACKEND_URL}/get_test/${id}`;

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }
  return res.json();
}
