const BACKEND_URL = "http://localhost:5000";

export async function Get_User_Info() {
  const url = `${BACKEND_URL}/user/global`;

  const res = await fetch(url, {
    method: "PUT",
    cache: "no-store",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });

  // if (!res.ok) throw new Error("Erreur API");
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }
  return res.json();
}
