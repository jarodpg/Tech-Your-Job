export async function Update_Privilege(userId: number, role: string) {
  const res = await fetch(`http://localhost:5000/privilege/${userId}/${role}`, {
    method: "PUT",
    credentials: "include",
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur back ${res.status}: ${body}`);
  }
  return res.json();
}
