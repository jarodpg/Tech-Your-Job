const BACKEND_URL = "http://localhost:5000";

export async function secureFetch(url: string, options: RequestInit = {}) {
  // je fais la requête de base
  const firstRequest = await fetch(url, {
    ...options,
    credentials: "include",
  });

  // s'il y a un code 401 donc access token invalide
  if (firstRequest.status === 401) {
    const refreshRequest = await fetch(`${BACKEND_URL}/refresh`, {
      method: "POST",
      credentials: "include",
    });

    //s'il y a un code 401 donc le refresh token invalide
    if (!refreshRequest.ok) {
      window.location.href = "/auth";
      return firstRequest;
    }

    // et je réexécute la requête initiale
    const secondRequest = await fetch(url, {
      ...options,
      credentials: "include",
    });

    return secondRequest;
  }

  return firstRequest;
}
