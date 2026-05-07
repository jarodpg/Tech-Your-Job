from Add_API_DB import Entreprise_Into_DB, Poste_Into_DB

try:
    Entreprise_Into_DB()
    Poste_Into_DB()
except Exception as e:
    print("Erreur", e)
