export async function Rechercher_entreprise(query: string) {
  const res = await fetch(
    `http://localhost:5000/entreprise/search?info=${encodeURIComponent(query)}`,
    {
      credentials: "include",
    },
  );
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur back ${res.status}: ${body}`);
  }
  return res.json();
}
