export async function Get_Enterprise(id: number) {
  const res = await fetch(`http://localhost:5000/enterprise/${id}`);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }
  return res.json();
}
