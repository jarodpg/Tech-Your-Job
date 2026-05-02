import time

from Add_API_DB import Entreprise_Into_DB, Poste_Into_DB
from Get_Offre_API import Get_All_Data


Get_All_Data()
Entreprise_Into_DB()
Poste_Into_DB()