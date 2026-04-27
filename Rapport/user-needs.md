# Besoins Utilisateurs - Job Aggregator

## 1. Utilisateurs cible

### Étudiants & Développeurs Juniors
* **Profil :** En recherche de stage, alternance ou premier emploi.
* **Problématique :** Difficulté à évaluer si leur stack technique correspond aux attentes réelles et fatigue liée à la navigation sur des plateformes généralistes peu adaptées à la tech.
* **Objectif :** Identifier rapidement des opportunités "junior-friendly" avec une stack technologique claire.

### Candidats Tech (Confirmés/Seniors)
* **Profil :** Développeurs en poste ou en recherche active, très attentifs aux détails techniques et financiers.
* **Problématique :** Manque de transparence sur les salaires, descriptions d'offres trop vagues et perte de temps sur des offres ne correspondant pas à leur expertise.
* **Objectif :** Filtrer les offres par stack précise, niveau de séniorité et prétentions salariales.

---

## 2. Analyse des besoins & réponses produit

| Besoin Utilisateur | Justification (Pain Point) | Réponse Produit (Feature) |
| :--- | :--- | :--- |
| **Accès Centralisé** | Les offres sont dispersées sur plusieurs plateformes (LinkedIn, WTTJ, etc.). | **Agrégateur :** Utilisation de l'API WeLoveDevs + sources secondaires. |
| **Données Standardisées** | Les formats hétérogènes empêchent la comparaison directe (ex: salaire annuel vs mensuel). | **Pipeline ETL :** Normalisation automatique des salaires, localisations et types de contrats. |
| **Filtrage Expert** | La recherche textuelle classique est imprécise. | **Advanced Filtering :** Tri par technologie, télétravail (full/partiel) et expérience. |
| **Aide à la Décision** | Difficile de savoir si une offre est attractive par rapport au marché. | **Data Feature :** Dashboard de tendances (ex: distribution des salaires par techno). |
| **Lecture Rapide** | Les descriptions d'offres sont souvent trop denses et chronophages. | **AI Feature :** Résumé automatique des points clés (Mission, Avantages, Exercices). |
| **Confiance & Sécurité** | Crainte concernant l'utilisation des données personnelles et la validité des offres. | **Sécurité :** Authentification robuste (JWT), protection contre les injections et audit WCAG. |

---

## 3. Exigences Produit & Techniques (MVP)

### Core Features (Must Have)
* **WeLoveDevs :** Utilisation de l'API avec respect des quotas.
* **Dashboard Utilisateur :** Vue centralisée.
* **Accessibilité :** Interface répondant aux normes WCAG 2.1 Level.
* **Gestion des Rôles :** Distinction stricte entre `User` et `Admin` (enforced server-side).

### Data & AI Strategy
* **Data Feature :** Système de "Relevance Scoring" ou "Salary Analytics" pour prioriser les offres.
* **AI Feature :** Modèle local (< 500 MB) pour la classification des offres ou l'extraction de mots-clés techniques.
* **Normalisation :** Script de pre-processing pour garantir l'intégrité des données en base (PostgreSQL ou MongoDB).

---

## 4. Critères de Succès (Innovation Justification)

Pour valider l'approche produit, l'équipe s'appuiera sur :
1.  **Fiabilité des données :** Taux de succès de la normalisation lors de l'ingestion (> 95%).
2.  **Performance IA :** Temps d'inférence < 5 secondes par offre pour ne pas bloquer l'expérience utilisateur.
3.  **Utilisabilité :** Score d'audit Lighthouse > 90 sur la partie Accessibilité et Performance.

---

## 5. Stack Technique Pressentie
* **Frontend :** React / Next.js (pour la réactivité et le SEO).
* **Backend :** Node.js (Express) ou Python (FastAPI pour faciliter l'intégration IA).
* **Base de données :** PostgreSQL (données structurées) avec Docker Compose.
* **CI/CD :** GitHub Actions (Linter, Tests automatisés, Build check).

