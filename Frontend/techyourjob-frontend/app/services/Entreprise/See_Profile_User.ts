export async function See_Profile_User(ID: string) {
  const res = await fetch(`http://localhost:5000/user/${ID}/account`, {
    credentials: "include",
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }
  return res.json();
}
