const BACKEND_URL = "http://localhost:5000";

export async function Add_User_Experience(data: {
  enterprise_name?: string;
  title?: string;
  start?: string;
  end?: string;
  description?: string;
  skills?: string[];
}) {
  const res = await fetch(`${BACKEND_URL}/user/experience`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Erreur API ${res.status}: ${await res.text()}`);
  return res.json();
}
