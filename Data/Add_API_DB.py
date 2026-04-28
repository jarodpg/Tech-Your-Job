from jsonpath_ng import parse
import json



def Entreprise_Into_DB():
    Parametre_garder_entreprise = ["companyId", "contractTypes", "companyName", "companyTypeExplicit", "sectors", "_geoloc", "formattedPlaces"]
    with open('./Data.json', 'r') as json_file:
        donnee = json.load(json_file)
        for job in donnee:
            infos_entreprise = {}
            
            for parametre in Parametre_garder_entreprise:
                expr = parse(f'$..{parametre}')
                matches = expr.find(job)
                
                if matches:
                    infos_entreprise[parametre] = matches[0].value
                else:
                    infos_entreprise[parametre] = None


            print(json.dumps(infos_entreprise, indent=2, ensure_ascii=False))
    
# Entreprise_Into_DB()



def Poste_Into_DB():
    Parametre_garder_poste = ["id", "contracts", "createdAt", "descriptionPreview", "locale", "daysPerWeek", "locale", "frequency", "requiredExperience", "currency", "max", "min", "recurrence", "publishDate", "algoliaKeyword", "displayName", "displayName", "skillsList", "title", "ranking", "applications", "applyBtnClicks", "atsApplications", "ctr", "totalApplications", "remoteApplications", "visitsCount"]
    with open('./Data.json', 'r') as json_file:
        donnee = json.load(json_file)
        for job in donnee:
            infos_entreprise = {}
            
            for parametre in Parametre_garder_poste:
                expr = parse(f'$..{parametre}')
                matches = expr.find(job)
                
                if matches:
                    infos_entreprise[parametre] = matches[0].value
                else:
                    infos_entreprise[parametre] = None


            print(json.dumps(infos_entreprise, indent=2, ensure_ascii=False))
    
Poste_Into_DB()
