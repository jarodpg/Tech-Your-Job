import { secureFetch } from "../Authentification/refresh";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function Update_Stats_User(ID: number) {
  const res = await secureFetch(`${BACKEND_URL}candidatures/${ID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      return [];
    }

    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }

  return res.json();
}
