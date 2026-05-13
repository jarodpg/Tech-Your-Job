const BACKEND_URL = "http://localhost:5000";

export async function Update_User_Experience(
  ID,
  data: {
    enterprise_name?: string;
    title?: string;
    start?: string;
    end?: string;
    description?: string;
    skills?: string[];
  },
) {
  const res = await fetch(`${BACKEND_URL}/user/formation/:${ID}`, {
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
