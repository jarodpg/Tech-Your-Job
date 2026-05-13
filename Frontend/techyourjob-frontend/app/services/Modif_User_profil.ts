const BACKEND_URL = "http://localhost:5000";

export async function Update_User_Profil(data: {
  bio?: string;
  social?: { icon: string; lien: string }[];
  job?: string;
  xp?: string;
  language?: number;
}) {
  const body = {
    ...data,
    social: data.social
      ? data.social.reduce(
          (acc, { icon, lien }) => {
            if (lien) acc[icon] = lien;
            return acc;
          },
          {} as Record<string, string>,
        )
      : undefined,
  };

  const res = await fetch(`${BACKEND_URL}/user/profil`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }

  return res.json();
}
