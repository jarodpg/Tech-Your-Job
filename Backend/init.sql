CREATE TABLE entreprise (
    id_entreprise INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type_contrat TEXT[],
    nom_compagnie TEXT,
    seo_alias TEXT,
    type_entreprise TEXT,
    secteur_entreprise TEXT[],
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    ville TEXT
);

CREATE TABLE poste (
    id_poste INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_entreprise INT REFERENCES entreprise(id_entreprise),
    type_contrat TEXT,
    date_creation TIMESTAMP WITHOUT TIME ZONE,
    description TEXT,
    langues TEXT,
    remote_policy INT,
    frequency_remote TEXT,
    annee_experience INT,
    salaire_currency TEXT,
    salaire_min INT,
    salaire_max INT,
    recurrence TEXT,
    date_publication TIMESTAMP WITHOUT TIME ZONE,
    categorie TEXT,
    display_name_en TEXT,
    display_name_fr TEXT,
    skills JSONB,
    titre TEXT,
    ranking INT,
    nb_postulations INT,
    nb_clicks INT,
    candidature_ats INT,
    ctr INT,
    total_applications INT,
    nb_remote_applications INT,
    date_update TIMESTAMP WITHOUT TIME ZONE,
    total_visits INT

);

CREATE TABLE utilisateur(
    id_utilisateur INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nom TEXT,
    prenom TEXT,
    latitude_secteur DOUBLE PRECISION,
    longitude_secteur DOUBLE PRECISION,
    role TEXT,
    email TEXT,
    telephone INT,
    mdp TEXT,
    age INT
    
);


CREATE TABLE profil_utilisateur(
    id_profil INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_utilisateur INT REFERENCES utilisateur(id_utilisateur),
    description TEXTE,
    nb_vues_profil INTEGER DEFAULT 0,
    candidatures_envoyees INTEGER DEFAULT 0,
    candidatures_consultees INTEGER DEFAULT 0,
    candidatures_positives INTEGER DEFAULT 0,
    candidatures_refusees INTEGER DEFAULT 0,
    diplomes TEXT[],
    experiences_annees INTEGER,
    jobs_passes TEXT[],
    hard_skills TEXT[],
    soft_skills TEXT[],
    langues TEXT[],
    photo_profil TEXT,
    banniere TEXT,
    titre_profession VARCHAR(100)
)


