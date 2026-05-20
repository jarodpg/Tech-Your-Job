import { secureFetch } from "../Authentification/refresh";

export async function See_Profile_User(ID: string) {
  const res = await secureFetch(`http://localhost:5000/user/${ID}/account`);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }
  return res.json();
}
