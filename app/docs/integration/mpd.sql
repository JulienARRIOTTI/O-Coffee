-- Table des pays
CREATE TABLE PAYS (
    id_pays INT AUTO_INCREMENT PRIMARY KEY,
    nom_pays VARCHAR(100) NOT NULL
);

-- Table des cafés
CREATE TABLE CAFE (
    reference BIGINT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    prix_au_kilo DECIMAL(6,2) NOT NULL,
    disponible BOOLEAN DEFAULT TRUE,
    id_pays INT,
    CONSTRAINT fk_cafe_pays FOREIGN KEY (id_pays) REFERENCES PAYS(id_pays)
);

-- Table des caractéristiques
CREATE TABLE CARACTERISTIQUE (
    id_caract INT AUTO_INCREMENT PRIMARY KEY,
    nom_caract VARCHAR(50) NOT NULL
);

-- Table associative pour la relation N-N
CREATE TABLE CAFE_CARACTERISTIQUE (
    reference BIGINT,
    id_caract INT,
    PRIMARY KEY (reference, id_caract),
    CONSTRAINT fk_cafe FOREIGN KEY (reference) REFERENCES CAFE(reference),
    CONSTRAINT fk_caract FOREIGN KEY (id_caract) REFERENCES CARACTERISTIQUE(id_caract)
);
