const BACKEND_URL = "http://localhost:5000";

export async function Update_User_Info(data: {
  name?: string;
  firstname?: string;
  email?: string;
  tel?: string;
  age?: number;
  country?: string;
  location?: string;
}) {
  const res = await fetch(`${BACKEND_URL}/user/global`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }

  return res.json();
}
