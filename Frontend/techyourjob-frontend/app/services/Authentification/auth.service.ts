const BACKEND_URL = "http://localhost:5000";

export async function Register(name, firstname, email, password, role = "user") {
  console.log(name, firstname, email, password);
  const res = await fetch(`${BACKEND_URL}/register`, {
    method: "POST",
    cache: "no-store", // Sert a ne pas garder ce qu'on met en cache de next
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      firstname,
      email,
      password,
      role,
    }),
  });
  if (!res.ok) throw new Error("Erreur API");

  return res.json();
}

export async function Login(email, password) {
  console.log(email, password);
  const res = await fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    cache: "no-store",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (!res.ok) throw new Error("Erreur API");

  return res.ok;
}
