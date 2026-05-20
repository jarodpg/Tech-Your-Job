const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function Get_Salaries_By_Page(page: number = 1) {
  const res = await fetch(`${BACKEND_URL}dashboard/salary/${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      return [];
    }

    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }

  return res.json();
}
