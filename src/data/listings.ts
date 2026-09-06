// ---------------------------------------------------------------------------
// AutoSale — car listing data model + seed dataset (fixed-price marketplace,
// no auctions). Photos are sourced from Unsplash (royalty-free).
// ---------------------------------------------------------------------------

import { siteContact } from "@/config/contact";

export type ListingStatus = "available" | "sold";

export type CarListing = {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  location: string;
  description: string[];
  images: string[];
  sellerName: string;
  sellerPhone: string;
  sellerEmail: string;
  status: ListingStatus;
  listedAt: string; // ISO date
  soldAt?: string; // ISO date, only when status === "sold"
  featured: boolean;
  category?: "Coupé" | "Berline" | "SUV" | "Break" | "Cabriolet" | "Classique";
  drivetrain?: string;
  exteriorColor?: string;
  interiorColor?: string;
  vin?: string;
  highlights: string[];
  notes: string[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const listings: CarListing[] = [
  {
    id: "porsche-911-carrera-gts-2023",
    title: "2023 Porsche 911 Carrera GTS",
    brand: "Porsche",
    model: "911 Carrera GTS",
    year: 2023,
    price: 132000,
    mileage: "4 200 km",
    fuelType: "Essence",
    transmission: "Manuelle 7 rapports",
    location: siteContact.location,
    images: [
      img("photo-1614162692292-7ac56d7f7f1e"),
      img("photo-1580274455191-1c62238fa333"),
      img("photo-1634673970798-a15ae56f6c65"),
      img("photo-1613921568536-555645be4032"),
    ],
    description: [
      "Cette Carrera GTS a été commandée neuve avec la boîte manuelle à 7 rapports, un choix de plus en plus rare sur ce millésime. Elle affiche un peu plus de 4 000 km et n'a jamais vu la pluie ni le sel de déneigement.",
      "L'entretien a été assuré exclusivement par le réseau Porsche, avec un dernier passage en atelier il y a environ 800 km. Le carnet numérique complet est disponible pour consultation.",
      "Aucune modification mécanique ou esthétique n'a été apportée depuis la sortie d'usine. La voiture reste sous garantie constructeur jusqu'en 2027.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-20T09:00:00Z",
    featured: true,
    category: "Coupé",
    drivetrain: "Propulsion (RWD)",
    exteriorColor: "Gris GT argent métallisé",
    interiorColor: "Cuir noir / surpiqûres rouge carmin",
    vin: "WP0AB2A99PS123456",
    highlights: [
      "Boîte manuelle 7 rapports — combinaison rare sur la GTS",
      "Pack Sport Chrono et échappement sport",
      "Sièges baquets carbone, ceintures rouge carmin",
      "Carnet d'entretien 100% concessionnaire Porsche",
    ],
    notes: [
      "Léger éclat de peinture sur le bouclier avant (photo disponible)",
      "Jante avant droite légèrement frottée, non repeinte",
    ],
  },
  {
    id: "bmw-m3-competition-2022",
    title: "2022 BMW M3 Competition xDrive",
    brand: "BMW",
    model: "M3 Competition",
    year: 2022,
    price: 63500,
    mileage: "18 500 km",
    fuelType: "Essence",
    transmission: "Automatique 8 rapports",
    location: siteContact.location,
    images: [
      img("photo-1617531653332-bd46c24f2068"),
      img("photo-1607853554439-0069ec0f29b6"),
      img("photo-1616455263449-0bd3aac04029"),
      img("photo-1615644190630-c6c6f230a6ed"),
    ],
    description: [
      "M3 Competition en configuration xDrive, l'une des plus polyvalentes de la gamme grâce à sa transmission intégrale désactivable. La voiture a été achetée neuve par le vendeur actuel et roulée principalement le week-end.",
      "Toutes les révisions ont été effectuées chez un concessionnaire BMW agréé. Les pneus avant ont été remplacés il y a environ 2 000 km.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-22T14:00:00Z",
    featured: false,
    category: "Berline",
    drivetrain: "Intégrale (xDrive)",
    exteriorColor: "Rouge Toronto métallisé",
    interiorColor: "Cuir Merino noir",
    vin: "WBS83DZ09NCH12345",
    highlights: [
      "Transmission intégrale xDrive désactivable",
      "Freins céramique-carbone M en option",
      "Toit ouvrant panoramique, sièges chauffants/ventilés",
    ],
    notes: ["Petite rayure sur le seuil de porte conducteur"],
  },
  {
    id: "mercedes-amg-g63-2023",
    title: "2023 Mercedes-AMG G63",
    brand: "Mercedes-AMG",
    model: "G63",
    year: 2023,
    price: 198500,
    mileage: "9 800 km",
    fuelType: "Essence",
    transmission: "Automatique 9 rapports",
    location: siteContact.location,
    images: [
      img("photo-1544221818-74e341c81174"),
      img("photo-1617814086906-d847a8bc6fca"),
      img("photo-1609703048009-d3576872b32c"),
      img("photo-1627440829335-b42fba2a15dd"),
    ],
    description: [
      "G63 finition AMG Night Package avec habillage mat réalisé par un atelier spécialisé (garantie 3 ans, facture disponible). Sous l'habillage, la peinture d'origine noire est intacte.",
      "Achetée cash chez un concessionnaire de Floride, cette G63 n'a connu qu'un seul propriétaire et est stockée en garage climatisé.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-18T11:30:00Z",
    featured: false,
    category: "SUV",
    drivetrain: "Intégrale permanente",
    exteriorColor: "Noir obsidienne mat (habillage)",
    interiorColor: "Cuir Nappa noir/rouge",
    vin: "W1NYC7HJ8PX123456",
    highlights: [
      "Habillage mat professionnel avec garantie",
      "Échappement AMG Performance amovible",
      "Toutes les options : sièges massants, toit ouvrant, Burmester",
    ],
    notes: ["Habillage mat présente une légère usure sur le seuil de coffre"],
  },
  {
    id: "audi-rs6-avant-2021",
    title: "2021 Audi RS6 Avant",
    brand: "Audi",
    model: "RS6 Avant",
    year: 2021,
    price: 89900,
    mileage: "32 000 km",
    fuelType: "Essence",
    transmission: "Automatique 8 rapports",
    location: siteContact.location,
    images: [
      img("photo-1650803878810-1e4eaffc8466"),
      img("photo-1589536672709-a5d34b12466d"),
      img("photo-1655284338983-2dfdd47e23af"),
      img("photo-1701985070961-c805aaee8de5"),
    ],
    description: [
      "RS6 Avant en configuration Dynamic Plus avec vitesse de pointe portée à 305 km/h et freins céramique. L'habillage mat Gris Nardo a été appliqué en concession Audi Exclusive.",
      "Deuxième main, achetée avec 11 000 km au compteur, entretenue depuis chez le même spécialiste Audi indépendant. Factures complètes fournies.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-15T08:00:00Z",
    featured: false,
    category: "Break",
    drivetrain: "Intégrale quattro",
    exteriorColor: "Gris Nardo mat",
    interiorColor: "Cuir/Alcantara noir",
    vin: "WUAZZZ4G0MN123456",
    highlights: [
      "Pack Dynamic Plus, freins céramique, V-max 305 km/h",
      "Habillage mat Gris Nardo par Audi Exclusive",
      "Attelage amovible d'origine",
    ],
    notes: ["Habillage mat marqué sur l'aile arrière gauche"],
  },
  {
    id: "toyota-gr-supra-2021",
    title: "2021 Toyota GR Supra 3.0 Premium",
    brand: "Toyota",
    model: "GR Supra 3.0",
    year: 2021,
    price: 42900,
    mileage: "21 000 km",
    fuelType: "Essence",
    transmission: "Automatique 8 rapports",
    location: siteContact.location,
    images: [
      img("photo-1627008119017-f89d9704a799"),
      img("photo-1603811478698-0b1d6256f79a"),
      img("photo-1607603750909-408e193868c7"),
      img("photo-1595953453746-1f08382c04c0"),
    ],
    description: [
      "GR Supra Premium avec le fameux moteur six cylindres turbo BMW, réputé pour sa robustesse et son potentiel de préparation. Cette voiture reste entièrement d'origine, sans reprogrammation.",
      "Utilisée comme voiture de week-end par un collectionneur, elle est garée en intérieur et n'a jamais été exposée à la pluie.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-24T10:00:00Z",
    featured: false,
    category: "Coupé",
    drivetrain: "Propulsion (RWD)",
    exteriorColor: "Bleu Horizon métallisé",
    interiorColor: "Alcantara noir",
    vin: "WZ1DB4C05MW123456",
    highlights: [
      "Moteur B58 non modifié, potentiel de préparation important",
      "Pack Premium : Alcantara, caméra 360, JBL",
      "Carnet d'entretien Toyota complet",
    ],
    notes: ["Léger jaunissement des optiques avant (polissage recommandé)"],
  },
  {
    id: "ford-mustang-shelby-gt350-2019",
    title: "2019 Ford Mustang Shelby GT350",
    brand: "Ford",
    model: "Mustang Shelby GT350",
    year: 2019,
    price: 54500,
    mileage: "14 000 km",
    fuelType: "Essence",
    transmission: "Manuelle 6 rapports",
    location: siteContact.location,
    images: [
      img("photo-1603553329474-99f95f35394f"),
      img("photo-1547744152-14d985cb937f"),
      img("photo-1650634179095-cac904c35b63"),
      img("photo-1567818735868-e71b99932e29"),
    ],
    description: [
      "Le V8 Voodoo atmosphérique du GT350 est unique dans la gamme Mustang : vilebrequin plat, régime de plus de 8 000 tr/min et une sonorité qui n'appartient qu'à lui.",
      "Cette voiture a passé la majorité de sa vie sous housse dans un garage climatisé du propriétaire actuel, deuxième main depuis 2020.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-12T13:00:00Z",
    featured: false,
    category: "Coupé",
    drivetrain: "Propulsion (RWD)",
    exteriorColor: "Noir Shadow",
    interiorColor: "Cuir/Alcantara noir",
    vin: "1FA6P8JZ0K5123456",
    highlights: [
      "Moteur Voodoo atmosphérique, vilebrequin plat",
      "Boîte manuelle TREMEC 6 rapports",
      "Suspension MagneRide, freins Brembo",
    ],
    notes: ["Léger désalignement du pare-chocs arrière (défaut d'usine documenté)"],
  },
  {
    id: "land-rover-defender-110-2023",
    title: "2023 Land Rover Defender 110 X-Dynamic HSE",
    brand: "Land Rover",
    model: "Defender 110 X-Dynamic",
    year: 2023,
    price: 72900,
    mileage: "16 200 km",
    fuelType: "Essence hybride léger",
    transmission: "Automatique 8 rapports",
    location: siteContact.location,
    images: [
      img("photo-1741905358565-5ae6835ac172"),
      img("photo-1659596513612-23f9db4984aa"),
      img("photo-1502489597346-dad15683d4c2"),
      img("photo-1730830812431-184157740b4b"),
    ],
    description: [
      "Defender 110 en finition X-Dynamic HSE, équipé du toit ouvrant panoramique, du pack tout-terrain et des barres de toit d'expédition d'origine.",
      "Utilisé pour la randonnée et le camping par le propriétaire actuel, avec quelques sorties légères en tout-terrain mais aucun dommage de carrosserie lié.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-19T09:30:00Z",
    featured: false,
    category: "SUV",
    drivetrain: "Intégrale permanente, réducteur",
    exteriorColor: "Vert Pangea",
    interiorColor: "Cuir Ebony/Ivory",
    vin: "SALE1EU4XPA123456",
    highlights: [
      "Pack tout-terrain avec suspension pneumatique",
      "Barres de toit d'expédition et plaque de protection",
      "Toit ouvrant panoramique électrique",
    ],
    notes: ["Sous-bas de caisse marqué par une utilisation tout-terrain légère"],
  },
  {
    id: "ford-mustang-mach1-1972",
    title: "1972 Ford Mustang Mach 1",
    brand: "Ford",
    model: "Mustang Mach 1",
    year: 1972,
    price: 41500,
    mileage: "3 800 km depuis restauration",
    fuelType: "Essence",
    transmission: "Manuelle 4 rapports",
    location: siteContact.location,
    images: [
      img("photo-1584345604476-8ec5e12e42dd"),
      img("photo-1611016186353-9af58c69a533"),
      img("photo-1611566026373-c6c8da0ea861"),
      img("photo-1591293835940-934a7c4f2d9b"),
    ],
    description: [
      "Restauration châssis nu terminée il y a environ deux ans par un spécialiste des Mustang classiques, avec factures et photos du processus disponibles.",
      "La caisse a été traitée anti-corrosion et repeinte dans la teinte d'origine Bright Red. Le moteur 351 Cleveland a été entièrement reconstruit avec pièces neuves.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-10T15:00:00Z",
    featured: false,
    category: "Classique",
    drivetrain: "Propulsion (RWD)",
    exteriorColor: "Rouge Bright Red d'origine",
    interiorColor: "Vinyle noir avec bandes Mach 1",
    vin: "2F05Q184521",
    highlights: [
      "Restauration châssis nu documentée avec factures",
      "Moteur 351 Cleveland reconstruit à neuf",
      "Jantes Magnum 500 d'origine reconditionnées",
    ],
    notes: ["Compteur kilométrique non fonctionnel (en cours de réparation)"],
  },
  {
    id: "bmw-m4-competition-2024",
    title: "2024 BMW M4 Competition xDrive",
    brand: "BMW",
    model: "M4 Competition",
    year: 2024,
    price: 78900,
    mileage: "7 100 km",
    fuelType: "Essence",
    transmission: "Automatique 8 rapports",
    location: siteContact.location,
    images: [
      img("photo-1607603751094-39cc34097d3a"),
      img("photo-1616455165195-239de2592faa"),
      img("photo-1614026480209-cd9934144671"),
      img("photo-1607500421646-be05ba1e0341"),
    ],
    description: [
      "M4 Competition quasiment neuve, achetée il y a huit mois et encore sous garantie constructeur complète jusqu'en 2028.",
      "Combinaison de couleurs rare : carrosserie Bleu Isle of Man et intérieur cuir rouge Kyalami, une commande spéciale du premier propriétaire.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-25T12:00:00Z",
    featured: false,
    category: "Coupé",
    drivetrain: "Intégrale (xDrive)",
    exteriorColor: "Bleu Isle of Man métallisé",
    interiorColor: "Cuir Merino rouge Kyalami",
    vin: "WBS83DJ00RCH12345",
    highlights: [
      "Combinaison de couleurs rare, commande spéciale",
      "Garantie constructeur jusqu'en 2028",
      "Freins carbone-céramique M",
    ],
    notes: [],
  },
  {
    id: "chevrolet-corvette-stingray-2022",
    title: "2022 Chevrolet Corvette Stingray",
    brand: "Chevrolet",
    model: "Corvette Stingray",
    year: 2022,
    price: 68500,
    mileage: "12 400 km",
    fuelType: "Essence",
    transmission: "Automatique 8 rapports double embrayage",
    location: siteContact.location,
    images: [
      img("photo-1635975479443-123f7d9ed90b"),
      img("photo-1635975480664-d761cf657730"),
      img("photo-1635975477800-534d76faf73d"),
      img("photo-1635975481970-73fd3d1a187c"),
    ],
    description: [
      "Première Corvette à moteur central de l'histoire (C8), avec le V8 atmosphérique 6.2L LT2 monté juste derrière l'habitacle pour une répartition des masses digne d'une supercar européenne.",
      "Entretenue exclusivement chez un concessionnaire Chevrolet, cette Stingray affiche un kilométrage raisonnable et n'a jamais été accidentée.",
      "Le pack Z51 ajoute une suspension sport, des freins plus mordants et un becquet arrière réglable pour davantage d'appui aérodynamique.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-27T10:00:00Z",
    featured: false,
    category: "Coupé",
    drivetrain: "Propulsion (RWD), moteur central arrière",
    exteriorColor: "Orange Sebring métallisé",
    interiorColor: "Cuir noir avec surpiqûres orange",
    vin: "1G1YB2D45N5123456",
    highlights: [
      "Moteur central arrière — première Corvette de ce type",
      "V8 atmosphérique 6.2L LT2, 495 ch",
      "Pack Z51 : suspension sport, freins renforcés, aéro",
      "Toit amovible en fibre de carbone",
    ],
    notes: ["Léger impact de gravillon sur le capot avant"],
  },
  {
    id: "jaguar-f-type-r-2021",
    title: "2021 Jaguar F-Type R Coupé",
    brand: "Jaguar",
    model: "F-Type R",
    year: 2021,
    price: 71900,
    mileage: "15 800 km",
    fuelType: "Essence",
    transmission: "Automatique 8 rapports",
    location: siteContact.location,
    images: [
      img("photo-1507136566006-cfc505b114fc"),
      img("photo-1695695252047-ccc9e50833ba"),
      img("photo-1660636706902-5a86aae49a49"),
      img("photo-1736232821136-a29002507cea"),
    ],
    description: [
      "F-Type R avec le V8 suralimenté 5.0L, l'une des sonorités les plus reconnaissables du marché grâce à son échappement sport à valves.",
      "Deuxième main, entretenue chez un spécialiste Jaguar indépendant avec factures complètes disponibles.",
      "Transmission intégrale et différentiel actif pour une motricité optimale par tous les temps.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-26T15:00:00Z",
    featured: false,
    category: "Coupé",
    drivetrain: "Intégrale (AWD)",
    exteriorColor: "Rouge Firenze métallisé",
    interiorColor: "Cuir noir avec surpiqûres rouges",
    vin: "SAJDA4EX8L8123456",
    highlights: [
      "V8 suralimenté 5.0L, 550 ch",
      "Échappement sport à valves électroniques",
      "Différentiel actif électronique",
      "Freins Brembo à étriers rouges",
    ],
    notes: ["Jantes avant légèrement frottées"],
  },
  {
    id: "tesla-model-s-plaid-2023",
    title: "2023 Tesla Model S Plaid",
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2023,
    price: 89900,
    mileage: "18 200 km",
    fuelType: "Électrique",
    transmission: "Automatique (tri-moteur)",
    location: siteContact.location,
    images: [
      img("photo-1560958089-b8a1929cea89"),
      img("photo-1536700503339-1e4b06520771"),
      img("photo-1630716059383-b3203bdda1e4"),
      img("photo-1537119100544-ea57dccd7bd4"),
    ],
    description: [
      "Model S Plaid, la version la plus performante jamais produite par Tesla : trois moteurs électriques pour plus de 1 000 chevaux combinés et une autonomie supérieure à 600 km.",
      "Livrée avec Autopilot amélioré. Batterie et groupe motopropulseur sous garantie constructeur jusqu'en 2031.",
      "Intérieur en excellent état, aucune odeur, aucune trace d'usure anormale sur les sièges.",
    ],
    sellerName: siteContact.name,
    sellerPhone: siteContact.phone,
    sellerEmail: siteContact.email,
    status: "available",
    listedAt: "2026-08-29T09:00:00Z",
    featured: false,
    category: "Berline",
    drivetrain: "Intégrale, tri-moteur électrique",
    exteriorColor: "Blanc nacré multicouche",
    interiorColor: "Intérieur noir, garnitures carbone",
    vin: "5YJSA1E60PF123456",
    highlights: [
      "Tri-moteur, plus de 1 000 ch combinés",
      "Autonomie supérieure à 600 km (WLTP)",
      "Autopilot amélioré inclus",
      "Garantie batterie et groupe motopropulseur jusqu'en 2031",
    ],
    notes: [],
  },
];

export const formatUsd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export const searchTags = [
  "Porsche 911",
  "BMW M3",
  "Mercedes-AMG",
  "Audi RS",
  "Toyota Supra",
  "Ford Mustang",
  "Land Rover Defender",
  "SUV",
  "Classiques",
];

export const brands = Array.from(new Set(listings.map((l) => l.brand))).sort();
export const categories = Array.from(new Set(listings.map((l) => l.category))).sort();

export function maskPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const last2 = digits.slice(-2);
  return `••• ••• •${last2}`;
}

// Shape returned by the server for a seller-submitted listing (see
// src/backend/store.ts StoredListing). Kept minimal on purpose — the
// "Sell my car" form only collects the essentials.
export type SubmittedListingInput = {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  location: string;
  description: string;
  images: string[];
  sellerName: string;
  sellerPhone: string;
  sellerEmail: string;
  status: ListingStatus;
  createdAt: string;
};

/** Adapts a server-submitted listing to the same shape used by the seed
 * dataset, so both can render through the same cards/pages. */
export function fromSubmittedListing(stored: SubmittedListingInput): CarListing {
  return {
    id: stored.id,
    title: stored.title,
    brand: stored.brand,
    model: stored.model,
    year: stored.year,
    price: stored.price,
    mileage: stored.mileage,
    fuelType: stored.fuelType,
    transmission: stored.transmission,
    location: stored.location,
    description: stored.description ? [stored.description] : [],
    images: stored.images.length > 0 ? stored.images : [img("photo-1494976388531-d1058494cdd8")],
    sellerName: stored.sellerName,
    sellerPhone: stored.sellerPhone,
    sellerEmail: stored.sellerEmail,
    status: stored.status,
    listedAt: stored.createdAt,
    featured: false,
    highlights: [],
    notes: [],
  };
}
