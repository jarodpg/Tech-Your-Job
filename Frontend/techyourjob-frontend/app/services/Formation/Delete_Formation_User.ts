const BACKEND_URL = "http://localhost:5000";

// on va aller delete une formation avec son ID
export async function Delete_User_Formation(ID: number) {
  const res = await fetch(`${BACKEND_URL}/user/formation/${ID}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error(`Erreur API ${res.status}: ${await res.text()}`);
  return res.json();
}
