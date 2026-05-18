export async function Delete_Entreprise(userId: number) {
  const res = await fetch(`http://localhost:5000/enterprise/${userId}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur back ${res.status}: ${body}`);
  }
  return res.json();
}
