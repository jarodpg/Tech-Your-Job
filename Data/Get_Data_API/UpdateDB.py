from Add_API_DB import Entreprise_Into_DB, Poste_Into_DB

try:
    print("Insertion des entreprises en cours")
    Entreprise_Into_DB()
    print("Entreprises terminé")
except Exception as e:
    print("Erreur Entreprise_Into_DB :", e)

try:
    print("Insertion des postes en cours")
    Poste_Into_DB()
    print("Postes terminé")
except Exception as e:
    print("Erreur Poste_Into_DB :", e)
