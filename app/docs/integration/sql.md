DROP TABLE IF EXISTS cafe;
DROP TABLE IF EXISTS caracteristique;
DROP TABLE IF EXISTS pays;

CREATE TABLE 'cafe' {
    "id" SERIAL PRIMARY KEY,
    "nom" VARCHAR(50) UNIQUE,
    "description" VARCHAR(255) NOT NULL,
    "reference" VARCHAR(128) UNIQUE,
    "id_pays" INT REFERENCE "pays"("id"),
    "prix_kilo" DECIMAL(6,2) NOT NULL,
    "id_caracteristique" INT REFERENCE "caracteristique"("id"),
    "disponible" BOOLEAN
};

CREATE TABLE 'pays' {
    "id" SERIAL PRIMARY KEY,
    "nom_pays" VARCHAR(50) UNIQUE,
};

CREATE TABLE 'caracteristique' {
    "id" SERIAL PRIMARY KEY,
    "libelle" VARCHAR(50) UNIQUE,
    "id_cafe" INT REFERENCE "cafe"("id"),
};

-- Insertion des pays
INSERT INTO pays (nom_pays) VALUES
('Italie'),
('Colombie'),
('Éthiopie'),
('Brésil'),
('Guatemala'),
('Kenya'),
('Indonésie'),
('Costa Rica'),
('Vietnam'),
('Tanzanie'),
('Jamaïque'),
('Rwanda'),
('Panama'),
('Pérou'),
('Hawaii'),
('Nicaragua');

-- Insertion des caractéristiques
INSERT INTO caracteristique (libelle) VALUES
('Corsé'),
('Épicé'),
('Acide'),
('Doux'),
('Fruité'),
('Chocolaté');

-- Insertion des cafés
INSERT INTO cafe (nom, description, reference, id_pays, prix_kilo, disponible) VALUES
('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '100955890', 1, 20.99, true),
('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', '100955894', 2, 18.75, true),
('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', 3, 22.50, true),
('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', '134009550', 4, 17.80, true),
('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', '256505890', 5, 21.25, true),
('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', 6, 23.70, true),
('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', 7, 19.95, true),
('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', '327302954', 8, 24.50, true),
('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', '549549090', 9, 16.75, true),
('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', 10, 26.80, true),
('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '589100954', 11, 39.25, true),
('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', 12, 21.90, true),
('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', 13, 42.00, true),
('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', 14, 19.40, false),
('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', '95800105', 15, 55.75, false),
('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', 16, 28.60, false);