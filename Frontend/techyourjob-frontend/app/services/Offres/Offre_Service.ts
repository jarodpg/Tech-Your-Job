const BACKEND_URL = "http://localhost:5000";

export async function Get_Offre(
  reverse,
  start,
  minsalary = null,
  maxsalary = null,
  location = null,
  distance = null,
  contract = null,
  remote = null,
  language = null,
  experience = null,
  age = null,
) {
  const params = new URLSearchParams();

  if (minsalary) params.append("minsalary", minsalary);
  if (maxsalary) params.append("maxsalary", maxsalary);
  if (location) params.append("location", location);
  if (distance) params.append("distance", distance);
  if (contract) params.append("contract", contract);
  if (remote) params.append("remote", remote);
  if (language) params.append("language", language);
  if (experience) params.append("experience", experience);
  if (age) params.append("age", age);

  const url = `${BACKEND_URL}/grouped_posts/${reverse}/${start}?${params.toString()}`;

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  // if (!res.ok) throw new Error("Erreur API");
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Erreur API ${res.status}: ${body}`);
  }
  return res.json();
}

// export async function Get_Offre(reverse, start, filters = {}) {
//   const params = new URLSearchParams();

//   if (filters.minsalary) params.append("minsalary", filters.minsalary);
//   if (filters.maxsalary) params.append("maxsalary", filters.maxsalary);
//   if (filters.location) params.append("location", filters.location);
//   if (filters.distance) params.append("distance", filters.distance);
//   if (filters.contract) params.append("contract", filters.contract);
//   if (filters.remote) params.append("remote", filters.remote);
//   if (filters.language) params.append("language", filters.language);
//   if (filters.experience) params.append("experience", filters.experience);
//   if (filters.age) params.append("age", filters.age);

//   const url = `${BACKEND_URL}/grouped_posts/${reverse}/${start}?${params.toString()}`;

//   const res = await fetch(url, {
//     method: "GET",
//     cache: "no-store",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (!res.ok) throw new Error("Erreur API");

//   return res.json();
// }
