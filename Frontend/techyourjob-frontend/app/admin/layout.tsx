import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export default async function AdminLayout({ children }) { //ici le children grace a react cest directement page.tsx dans admin, ca va etre remplacer lorsque cest executé par ce qui est dans le dossier avec lui
  // recup des cookies 
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value; //?. ca sert a ne pas faire crash , ne pas avoir d'erreur. ca remplace par 'undefined' si il trouve pas de token

  // si pas de token go home
  if (!token) {
    redirect("/");
  }

    try {
        // on décode le token et ?? sert a éviter de faire crash qlq chose
        const secret = process.env.SECRET_KEY ?? "";
        // véirifie si le token décodé est bien signé par la clé secrete
        const decoded = jwt.verify(token, secret)

    // 4. Si le rôle n'est pas "admin", accès refusé, on le renvoie
    if (decoded.role !== "admin") {
      redirect("/");
    }
  } catch (error) {
    //si une des erruers est présente alors on envoie a l'accueil
    redirect("/");
  }

  // si on arrive la ca redirige bien vers notre admin
  return <>{children}</>;
}