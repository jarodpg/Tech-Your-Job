const BACKEND_URL = "http://localhost:5000";

export async function Update_User_Profil(data: {
  bio?: string;
  social?: {
    git?: string;
    yt?: string;
    ld?: string;
    pf?: string;
    insta?: string;
    Sover?: string;
    redd?: string;
    other?: string;
  };
  job?: string;
  xp?: string;
  language?: number;
}) {
  const res = await fetch(`${BACKEND_URL}/user/profil`, {
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
