# Plateforme d'Exposition d'Art - Spécifications

## Aperçu

Une plateforme conçue pour faciliter l'organisation d'expositions d'art en mettant en relation les artistes et les commanditaires. La plateforme gère l'ensemble du processus, de la planification de l'exposition à la vente des œuvres.

## 1. Types d'Utilisateurs

### 1.1 Commanditaires

#### Types de Commanditaires :

- Secteur public
- Événementiel/Business/Corporate
- Hôtellerie/Palace

#### Forfaits d'Exposition :

- Taille S : ~4 sculptures - 10 000€
- Taille M : ~10 sculptures - 50 000€
- Taille L : ~20 sculptures - 100 000€
  \*Les prix incluent les frais d'exposition, de transport et de décoration

#### Fonctionnalités Commanditaire :

- Création et gestion de compte
- Tableau de bord des expositions
- Suivi des ventes (commission fixe sur les ventes)
- Gestion des devis
- Processus de création d'exposition :
  1. Sélection de l'artiste
  2. Choix de la taille d'exposition
  3. Sélection des œuvres (filtré selon la taille)
  4. Offre budgétaire
  5. Soumission à M. Makalksyckzix pour validation via bouton
  6. Service Commercial contacte le client, si tout est OK alors le SC doit pour valider l'expo informatiquement (via la console d'administration) pour qu'en front, l'expo soit active

### 1.2 Artistes

#### Fonctionnalités :

- Création de profil (validation requise par la directrice artistique)
- Gestion du catalogue d'œuvres
  - Types d'œuvres : tape-à-l'œil ou normale
  - Gestion des stocks
- Feed des ventes
- Suivi du quota d'expositions

### 1.3 Acheteurs

#### Caractéristiques :

- Accès uniquement par QR code (actif pendant l'exposition)
- QR codes renvoyant directement vers la page de l'œuvre

#### Processus d'Achat :

- Prix complet incluant :
  - Prix de l'artiste
  - Frais de transport
  - Commission commanditaire
  - Commission de M. Makalksyckzix
- Calcul des frais de port selon code postal
- Options de paiement :
  - Paiement complet
  - Acompte (blocage 48h)
    - Paiement complet requis sous 48h
    - Remboursement de l'acompte si non finalisé

## 2. Spécifications Techniques

### 2.1 Interface Commanditaire

#### Création de Compte :

Champs requis :

- Nom\*
- Prénom\*
- Email\*
- Téléphone
- Mot de passe\*
- Confirmation mot de passe\*
- Société
- Fonction
- Type de commanditaire

#### Tableau de Bord :

- Gestion des informations du compte
- Suivi des expositions :
  - Devis envoyés
  - Statut des devis
  - Détails des expositions
- Suivi des ventes
- Interface de création de nouvelle exposition

### 2.2 Interface Artiste

- Bouton "Entrée de l'artiste"
- Gestion du profil
- Interface de gestion des œuvres
- Suivi des ventes
- Suivi des participations aux expositions

### 2.3 Interface Acheteur

#### Informations Requises :

- Nom
- Prénom
- Adresse
- Téléphone
- Email
- Code postal
- Ville

## 3. Règles Métier

- Un artiste par exposition
- Tous les devis nécessitent la validation de M. Makalksyckzix
- Accès QR code limité à la durée de l'exposition
- Réservation d'œuvre nécessite un acompte
- Structure de commission basée sur des pourcentages fixes

## 4. Sécurité

- Confirmation par email requise pour la création de compte
- Traitement sécurisé des paiements
- Accès QR code à durée limitée

## 5. Console d'administration pour Commerciaux (back office)

- Valider les expositions
