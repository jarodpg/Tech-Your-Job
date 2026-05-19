export async function Delete_User(userId: number) {
  const res = await fetch(`http://localhost:5000/user/${userId}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur back ${res.status}: ${body}`);
  }
  return res.json();
}
