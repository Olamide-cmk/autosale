export type Locale = "fr" | "en";

// NOTE — coverage: this dictionary covers the entire site UI chrome (header,
// footer, every page, every form). Per-listing content written in the data
// file (car descriptions, highlights, notes) is not covered here — that is
// content translation, not UI translation, and stays in French regardless
// of the selected locale.
export const translations = {
  fr: {
    // --- header / nav ---
    "nav.buy": "Acheter",
    "nav.sold": "Vendus",
    "nav.sell": "Vendre",
    "nav.favorites": "Favoris",
    "nav.sellYourCar": "Vendre ma voiture",
    "search.placeholder": "Rechercher (marque, modèle...)",
    "theme.toLight": "Passer en mode clair",
    "theme.toDark": "Passer en mode sombre",

    // --- footer ---
    "footer.tagline":
      "Achat et vente de voitures d'exception à prix fixe — sportives modernes, youngtimers et classiques restaurées. Annonces détaillées, zéro enchère, zéro surprise.",
    "footer.listingsHeading": "Annonces",
    "footer.forSale": "À vendre",
    "footer.sold": "Vendues",
    "footer.sellCar": "Vendre ma voiture",
    "footer.company": "Société",
    "footer.about": "À propos",
    "footer.faq": "Comment ça marche",
    "footer.terms": "Conditions d'utilisation",
    "footer.privacy": "Confidentialité",
    "footer.newsletter": "Newsletter",
    "footer.newsletterText": "Les meilleures annonces de la semaine, directement dans votre boîte mail.",
    "footer.emailPlaceholder": "vous@exemple.com",
    "footer.copyright": "© 2026 AutoSale. Site de démonstration — voitures et annonces fictives.",
    "footer.socialNetwork": "Réseau social",
    "footer.emailAria": "Adresse email",

    // --- home ---
    "home.featured": "Coup de cœur",
    "home.price": "Prix",
    "home.viewListing": "Voir l'annonce",
    "home.sellCar": "Vendre ma voiture",
    "home.availableListings": "Voitures disponibles",
    "home.seeSold": "Voir les voitures vendues →",
    "home.noResults": "Aucune annonce ne correspond à ces filtres. Essayez d'élargir votre recherche.",
    "home.vp1.title": "Annonces détaillées",
    "home.vp1.text": "Photos haute résolution, historique d'entretien et défauts honnêtement listés sur chaque annonce.",
    "home.vp2.title": "Prix fixe, sans surprise",
    "home.vp2.text": "Le prix affiché est le prix demandé. Négociez directement avec le vendeur, sans enchère ni frais cachés.",
    "home.vp3.title": "Contact direct",
    "home.vp3.text": "Écrivez ou appelez le vendeur en un clic, sans intermédiaire ni commission.",
    "home.resultCount": "résultat(s)",

    // --- pagination ---
    "pagination.prev": "Précédent",
    "pagination.next": "Suivant",
    "pagination.page": "Page",

    // --- listing filters ---
    "filters.searchPlaceholder": "Marque, modèle, mot-clé…",
    "filters.search": "Rechercher",
    "filters.brand": "Marque",
    "filters.allBrands": "Toutes marques",
    "filters.year": "Année",
    "filters.allYears": "Toutes années",
    "filters.year2023": "2023 et plus récent",
    "filters.year2020": "2020 et plus récent",
    "filters.year2015": "2015 et plus récent",
    "filters.yearBefore2015": "Avant 2015 (classiques)",
    "filters.price": "Prix",
    "filters.allPrices": "Tous les prix",
    "filters.priceUpTo50k": "Jusqu'à $50 000",
    "filters.priceUpTo100k": "Jusqu'à $100 000",
    "filters.priceUpTo150k": "Jusqu'à $150 000",
    "filters.priceUpTo250k": "Jusqu'à $250 000",
    "filters.mileage": "Kilométrage",
    "filters.allMileages": "Tous kilométrages",
    "filters.mileageUnder10k": "Moins de 10 000 km",
    "filters.mileageUnder25k": "Moins de 25 000 km",
    "filters.mileageUnder50k": "Moins de 50 000 km",
    "filters.sortBy": "Trier par",
    "filters.sortNewest": "Plus récentes",
    "filters.sortPriceAsc": "Prix croissant",
    "filters.sortPriceDesc": "Prix décroissant",
    "filters.sortMileageAsc": "Kilométrage croissant",
    "filters.sortYearDesc": "Année (récent → ancien)",

    // --- listing card ---
    "listingCard.viewListing": "Voir l'annonce →",
    "listingCard.featured": "Coup de cœur",
    "listingCard.addFav": "Ajouter aux favoris",
    "listingCard.removeFav": "Retirer des favoris",
    "listingCard.available": "Disponible",
    "listingCard.sold": "Vendu",

    // --- listing detail page ---
    "listing.backToListings": "← Toutes les annonces",
    "listing.inFavorites": "Dans mes favoris",
    "listing.addToFavorites": "Ajouter aux favoris",
    "listing.viewPhoto": "Voir la photo",
    "listing.galleryLabel": "Galerie photo, image",
    "listing.galleryOf": "sur",
    "listing.galleryHint": "Utilisez les flèches gauche/droite pour naviguer.",
    "listing.about": "À propos de cette voiture",
    "listing.highlights": "Points forts",
    "listing.notes": "À noter",
    "listing.specs": "Fiche technique",
    "listing.year": "Année",
    "listing.brandModel": "Marque / Modèle",
    "listing.mileage": "Kilométrage",
    "listing.fuel": "Carburant",
    "listing.transmission": "Transmission",
    "listing.drivetrain": "Motricité",
    "listing.extColor": "Couleur extérieure",
    "listing.intColor": "Couleur intérieure",
    "listing.vin": "VIN",
    "listing.category": "Catégorie",
    "listing.location": "Localisation",
    "listing.askingPrice": "Prix demandé",
    "listing.soldMessage": "Cette voiture a été vendue.",
    "listing.buyNow": "Acheter maintenant",
    "listing.alsoSee": "À voir aussi",

    // --- contact seller form ---
    "contact.title": "Contacter le vendeur",
    "contact.clickToReveal": "(cliquer pour afficher)",
    "contact.yourName": "Votre nom",
    "contact.yourEmail": "Votre email",
    "contact.yourPhone": "Votre téléphone (optionnel)",
    "contact.message": "Message",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi…",
    "contact.sentTitle": "Message envoyé au vendeur",
    "contact.sentBodySuffix": "recevra votre demande et pourra vous répondre directement par email.",
    "contact.defaultMessagePrefix": "Bonjour, je suis intéressé(e) par votre",
    "contact.defaultMessageSuffix": "Est-elle toujours disponible ?",
    "contact.errorGeneric": "Une erreur est survenue, merci de réessayer.",

    // --- sell-car page ---
    "sellCar.title": "Vendre ma voiture",
    "sellCar.subtitle": "Publication gratuite, prix fixe. Comptez environ 5 minutes.",
    "sellCar.stepVehicle": "Véhicule",
    "sellCar.stepPhotos": "Photos",
    "sellCar.stepPrice": "Prix",
    "sellCar.vehicleInfo": "Informations sur le véhicule",
    "sellCar.brand": "Marque",
    "sellCar.model": "Modèle",
    "sellCar.year": "Année",
    "sellCar.mileage": "Kilométrage",
    "sellCar.fuelType": "Carburant",
    "sellCar.transmission": "Transmission",
    "sellCar.description": "Description (options, historique, modifications)",
    "sellCar.photosTitle": "Photos du véhicule",
    "sellCar.photosHint":
      "Ajoutez au moins 3 photos (extérieur, intérieur, moteur). Ces photos restent sur votre appareil dans cette démonstration — elles ne sont pas envoyées au serveur.",
    "sellCar.addPhoto": "Ajouter",
    "sellCar.removePhoto": "Retirer la photo",
    "sellCar.photosCountSuffix": "/ 8 photos ajoutées",
    "sellCar.priceTitle": "Prix demandé",
    "sellCar.fixedPrice": "Prix fixe (USD)",
    "sellCar.priceHint":
      "C'est le prix affiché sur votre annonce. Les acheteurs pourront ensuite vous contacter directement pour négocier ou organiser une visite.",
    "sellCar.summary": "Récapitulatif",
    "sellCar.contactShown": "Contact affiché sur l'annonce :",
    "sellCar.previous": "Précédent",
    "sellCar.continue": "Continuer",
    "sellCar.publish": "Publier l'annonce",
    "sellCar.publishing": "Publication…",
    "sellCar.published": "Annonce publiée",
    "sellCar.yourCar": "Votre",
    "sellCar.nowOnline": "est maintenant en ligne. Redirection vers votre annonce…",
    "sellCar.photoWord": "photo(s)",
    "sellCar.fuelExample": "Essence",
    "sellCar.submitError": "Une erreur est survenue lors de la publication. Merci de réessayer.",

    // --- sold-cars page ---
    "soldCars.title": "Voitures vendues",
    "soldCars.subtitle": "Un aperçu des dernières ventes conclues sur AutoSale — prix de vente, date et localisation.",
    "soldCars.soldCountSuffix": "voiture(s) vendue(s)",
    "soldCars.soldBadge": "Vendu",
    "soldCars.salePrice": "Prix de vente",
    "soldCars.soldOn": "Vendue le",
    "soldCars.recently": "Récemment",
    "soldCars.empty": "Aucune voiture vendue pour le moment. Les ventes conclues sur AutoSale apparaîtront ici.",

    // --- favorites page ---
    "favorites.title": "Mes favoris",
    "favorites.subtitle":
      "Les annonces que vous suivez, disponibles comme vendues, retrouvées ici. Cette liste est conservée dans votre navigateur.",
    "favorites.empty": "Votre liste de favoris est vide",
    "favorites.emptyHint": "Cliquez sur le cœur d'une annonce pour la retrouver ici.",
    "favorites.browse": "Parcourir les annonces",

    // --- about page ---
    "about.eyebrow": "Notre histoire",
    "about.title": "À propos d'AutoSale",
    "about.p1":
      "AutoSale est né d'un constat simple : les passionnés d'automobile méritent une plateforme de vente aussi rigoureuse dans ses annonces qu'exigeante sur la qualité des voitures présentées. Pas de photos floues, pas d'historique caché — chaque annonce est documentée en détail, défauts compris.",
    "about.p2":
      "Nous mettons en relation des vendeurs particuliers et professionnels avec des acheteurs sérieux, sans intermédiaire ni enchère. Vous fixez votre prix, l'acheteur vous contacte directement pour négocier et organiser la visite.",
    "about.p3":
      "De la youngtimer de collection à la sportive moderne en passant par les classiques restaurées, notre catalogue reflète la diversité des passions automobiles — sans jamais sacrifier la transparence.",
    "about.commitmentTitle": "Notre engagement",
    "about.li1": "Publication d'annonce gratuite, sans commission cachée.",
    "about.li2": "Des annonces rédigées avec des spécifications techniques complètes.",
    "about.li3": "Un contact direct entre acheteur et vendeur, sans intermédiaire.",
    "about.li4": "Un support dédié du dépôt de l'annonce jusqu'à la remise des clés.",

    // --- faq page ---
    "faq.eyebrow": "Assistance",
    "faq.title": "Comment ça marche",
    "faq.subtitle": "Les réponses aux questions les plus fréquentes sur la vente, l'achat et le contact vendeur.",
    "faq.q1": "Comment est fixé le prix d'une annonce ?",
    "faq.a1":
      "C'est le vendeur qui fixe librement le prix de vente demandé. Ce prix est affiché tel quel sur l'annonce — il n'y a ni enchère ni surenchère.",
    "faq.q2": "Comment contacter un vendeur ?",
    "faq.a2":
      "Sur chaque annonce, un formulaire de contact vous permet d'envoyer un message directement au vendeur, et son numéro de téléphone est accessible en un clic.",
    "faq.q3": "Combien coûte la publication d'une annonce ?",
    "faq.a3": "La publication est entièrement gratuite, sans commission sur la vente.",
    "faq.q4": "Comment se passe le paiement et la remise du véhicule ?",
    "faq.a4":
      "Le paiement et la remise des clés se négocient directement entre l'acheteur et le vendeur, une fois qu'ils se sont mis d'accord sur le prix.",
    "faq.q5": "Puis-je modifier ou retirer mon annonce ?",
    "faq.a5":
      "Contactez notre support avec le titre ou le lien de votre annonce, nous nous chargeons de la modification ou du retrait.",
    "faq.q6": "Comment sont vérifiées les annonces ?",
    "faq.a6":
      "Notre équipe éditoriale relit chaque soumission, vérifie la cohérence des informations fournies et demande des précisions au vendeur si nécessaire avant publication.",

    // --- legal pages (shared) ---
    "legal.warningTitle": "Avertissement :",
    "legal.warningBody":
      "ce texte est un modèle générique rédigé à titre d'exemple pour ce prototype. Il ne constitue pas un avis juridique et doit être relu et adapté par un juriste avant toute mise en production réelle.",

    // --- terms page ---
    "terms.title": "Conditions d'utilisation",
    "terms.lastUpdated": "Dernière mise à jour : 30 août 2026 — document de démonstration, sans valeur juridique.",
    "terms.s1title": "1. Objet",
    "terms.s1body":
      "Les présentes conditions régissent l'utilisation de la plateforme AutoSale, un service de mise en relation directe entre vendeurs et acheteurs de véhicules à prix fixe.",
    "terms.s2title": "2. Annonces à prix fixe",
    "terms.s2body":
      "Chaque annonce affiche un prix fixe déterminé librement par le vendeur. AutoSale ne fixe, ne négocie et ne perçoit aucune part du prix de vente : la négociation finale se fait directement entre l'acheteur et le vendeur.",
    "terms.s3title": "3. Annonces",
    "terms.s3body":
      "Le vendeur est seul responsable de l'exactitude des informations fournies (état, kilométrage, historique). AutoSale se réserve le droit de retirer toute annonce jugée incomplète ou trompeuse.",
    "terms.s4title": "4. Gratuité",
    "terms.s4body":
      "La publication d'une annonce est entièrement gratuite, sans commission prélevée sur la vente, quelle que soit son issue.",
    "terms.s5title": "5. Responsabilité",
    "terms.s5body":
      "AutoSale agit en qualité d'intermédiaire technique et n'est pas partie au contrat de vente conclu entre l'acheteur et le vendeur.",
    "terms.s6title": "6. Modification des conditions",
    "terms.s6body": "Ces conditions peuvent être modifiées à tout moment ; la version en vigueur est celle publiée sur cette page.",

    // --- privacy page ---
    "privacy.title": "Politique de confidentialité",
    "privacy.lastUpdated": "Dernière mise à jour : 30 août 2026 — document de démonstration.",
    "privacy.s1title": "Données collectées",
    "privacy.s1body":
      "Coordonnées du vendeur (nom, email, téléphone) et détails du véhicule lorsque vous publiez une annonce ; nom et email lorsque vous contactez un vendeur ou effectuez un paiement de démonstration.",
    "privacy.s2title": "Utilisation des données",
    "privacy.s2body":
      "Vos données servent uniquement à publier votre annonce et à vous mettre en relation avec les acheteurs ou vendeurs intéressés. AutoSale ne crée aucun compte utilisateur.",
    "privacy.s3title": "Stockage des données",
    "privacy.s3body":
      "Dans cette démonstration, les annonces publiées et les messages de contact envoyés aux vendeurs sont stockés côté serveur. Vos favoris et préférences d'affichage (thème, langue) restent uniquement dans votre navigateur (localStorage). Aucune donnée n'est transmise à un tiers.",
    "privacy.s4title": "Cookies",
    "privacy.s4body":
      "Le site n'utilise pas de cookies de suivi publicitaire. Seules des préférences techniques (thème clair/sombre, favoris) sont conservées localement.",
    "privacy.s5title": "Paiement par carte",
    "privacy.s5body":
      "Le flux de paiement de cette démonstration ne traite aucun paiement réel : aucun processeur de paiement n'est contacté et le numéro de carte n'est jamais stocké. Seuls les 4 derniers chiffres sont conservés côté serveur, uniquement pour l'écran de confirmation.",
    "privacy.s6title": "Vos droits",
    "privacy.s6body": "Vous pouvez à tout moment supprimer vos données en effaçant les données de navigation de votre navigateur pour ce site.",

    // --- checkout page ---
    "checkout.demoTitle": "Mode démonstration.",
    "checkout.demoBody":
      "Aucun paiement réel n'est traité ici — aucune carte n'est débitée, aucun numéro de carte n'est transmis à un vrai processeur de paiement. Ce flux illustre uniquement l'expérience d'achat par carte bancaire.",
    "checkout.title": "Finaliser l'achat",
    "checkout.askingPrice": "Prix demandé",
    "checkout.totalToPay": "Total à payer",
    "checkout.summary": "Récapitulatif",
    "checkout.sellerLabel": "Vendeur :",
    "checkout.deliveryHint": "La remise du véhicule est à organiser séparément avec le vendeur une fois le paiement confirmé.",
    "checkout.continueToPayment": "Continuer vers le paiement",
    "checkout.payByCard": "Paiement par carte bancaire (démo)",
    "checkout.yourName": "Votre nom",
    "checkout.yourEmail": "Votre email",
    "checkout.cardNumber": "Numéro de carte",
    "checkout.expiry": "Expiration",
    "checkout.cvc": "CVC",
    "checkout.payButton": "Payer",
    "checkout.payButtonDemo": "(démo)",
    "checkout.paying": "Paiement en cours…",
    "checkout.successTitle": "Paiement simulé avec succès",
    "checkout.successCardEnding": "Carte terminant par",
    "checkout.successDebited": "débitée (démo) de",
    "checkout.successBodySuffix":
      "Dans un vrai déploiement, le vendeur serait notifié pour organiser la remise de votre",
    "checkout.backHome": "Retour à l'accueil",
    "checkout.unavailableTitle": "Cette voiture n'est plus disponible",
    "checkout.unavailableBody": "Elle a déjà été vendue à un autre acheteur.",
    "checkout.seeOtherListings": "Voir d'autres annonces",
    "checkout.alreadySoldError": "Cette voiture vient d'être vendue à un autre acheteur.",
    "checkout.genericError": "Le paiement a échoué. Merci de réessayer.",

    // --- 404 ---
    "notFound.badge": "Erreur 404",
    "notFound.title": "Page introuvable",
    "notFound.body": "La page que vous cherchez n'existe pas ou a été déplacée.",
    "notFound.backHome": "Retour à l'accueil",
  },
  en: {
    // --- header / nav ---
    "nav.buy": "Buy",
    "nav.sold": "Sold",
    "nav.sell": "Sell",
    "nav.favorites": "Favorites",
    "nav.sellYourCar": "Sell your car",
    "search.placeholder": "Search (make, model...)",
    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",

    // --- footer ---
    "footer.tagline":
      "Buy and sell exceptional cars at a fixed price — modern sports cars, youngtimers and restored classics. Detailed listings, zero bidding, zero surprises.",
    "footer.listingsHeading": "Listings",
    "footer.forSale": "For sale",
    "footer.sold": "Sold",
    "footer.sellCar": "Sell my car",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.faq": "How it works",
    "footer.terms": "Terms of use",
    "footer.privacy": "Privacy",
    "footer.newsletter": "Newsletter",
    "footer.newsletterText": "The week's best listings, straight to your inbox.",
    "footer.emailPlaceholder": "you@example.com",
    "footer.copyright": "© 2026 AutoSale. Demo site — fictional cars and listings.",
    "footer.socialNetwork": "Social network",
    "footer.emailAria": "Email address",

    // --- home ---
    "home.featured": "Featured pick",
    "home.price": "Price",
    "home.viewListing": "View listing",
    "home.sellCar": "Sell your car",
    "home.availableListings": "Cars for sale",
    "home.seeSold": "See sold cars →",
    "home.noResults": "No listing matches these filters. Try widening your search.",
    "home.vp1.title": "Detailed listings",
    "home.vp1.text": "High-resolution photos, service history and flaws honestly listed on every listing.",
    "home.vp2.title": "Fixed price, no surprises",
    "home.vp2.text": "The listed price is the asking price. Negotiate directly with the seller, no bidding, no hidden fees.",
    "home.vp3.title": "Direct contact",
    "home.vp3.text": "Message or call the seller in one click, no middleman, no commission.",
    "home.resultCount": "result(s)",

    // --- pagination ---
    "pagination.prev": "Previous",
    "pagination.next": "Next",
    "pagination.page": "Page",

    // --- listing filters ---
    "filters.searchPlaceholder": "Make, model, keyword…",
    "filters.search": "Search",
    "filters.brand": "Make",
    "filters.allBrands": "All makes",
    "filters.year": "Year",
    "filters.allYears": "All years",
    "filters.year2023": "2023 or newer",
    "filters.year2020": "2020 or newer",
    "filters.year2015": "2015 or newer",
    "filters.yearBefore2015": "Before 2015 (classics)",
    "filters.price": "Price",
    "filters.allPrices": "All prices",
    "filters.priceUpTo50k": "Up to $50,000",
    "filters.priceUpTo100k": "Up to $100,000",
    "filters.priceUpTo150k": "Up to $150,000",
    "filters.priceUpTo250k": "Up to $250,000",
    "filters.mileage": "Mileage",
    "filters.allMileages": "All mileages",
    "filters.mileageUnder10k": "Under 10,000 km",
    "filters.mileageUnder25k": "Under 25,000 km",
    "filters.mileageUnder50k": "Under 50,000 km",
    "filters.sortBy": "Sort by",
    "filters.sortNewest": "Newest",
    "filters.sortPriceAsc": "Price: low to high",
    "filters.sortPriceDesc": "Price: high to low",
    "filters.sortMileageAsc": "Mileage: low to high",
    "filters.sortYearDesc": "Year (newest → oldest)",

    // --- listing card ---
    "listingCard.viewListing": "View listing →",
    "listingCard.featured": "Featured",
    "listingCard.addFav": "Add to favorites",
    "listingCard.removeFav": "Remove from favorites",
    "listingCard.available": "Available",
    "listingCard.sold": "Sold",

    // --- listing detail page ---
    "listing.backToListings": "← All listings",
    "listing.inFavorites": "In my favorites",
    "listing.addToFavorites": "Add to favorites",
    "listing.viewPhoto": "View photo",
    "listing.galleryLabel": "Photo gallery, image",
    "listing.galleryOf": "of",
    "listing.galleryHint": "Use the left/right arrow keys to navigate.",
    "listing.about": "About this car",
    "listing.highlights": "Highlights",
    "listing.notes": "Things to note",
    "listing.specs": "Technical specifications",
    "listing.year": "Year",
    "listing.brandModel": "Make / Model",
    "listing.mileage": "Mileage",
    "listing.fuel": "Fuel",
    "listing.transmission": "Transmission",
    "listing.drivetrain": "Drivetrain",
    "listing.extColor": "Exterior color",
    "listing.intColor": "Interior color",
    "listing.vin": "VIN",
    "listing.category": "Category",
    "listing.location": "Location",
    "listing.askingPrice": "Asking price",
    "listing.soldMessage": "This car has been sold.",
    "listing.buyNow": "Buy now",
    "listing.alsoSee": "You may also like",

    // --- contact seller form ---
    "contact.title": "Contact the seller",
    "contact.clickToReveal": "(click to reveal)",
    "contact.yourName": "Your name",
    "contact.yourEmail": "Your email",
    "contact.yourPhone": "Your phone (optional)",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sending": "Sending…",
    "contact.sentTitle": "Message sent to the seller",
    "contact.sentBodySuffix": "will receive your request and can reply to you directly by email.",
    "contact.defaultMessagePrefix": "Hi, I'm interested in your",
    "contact.defaultMessageSuffix": "Is it still available?",
    "contact.errorGeneric": "Something went wrong, please try again.",

    // --- sell-car page ---
    "sellCar.title": "Sell my car",
    "sellCar.subtitle": "Free listing, fixed price. Takes about 5 minutes.",
    "sellCar.stepVehicle": "Vehicle",
    "sellCar.stepPhotos": "Photos",
    "sellCar.stepPrice": "Price",
    "sellCar.vehicleInfo": "Vehicle information",
    "sellCar.brand": "Make",
    "sellCar.model": "Model",
    "sellCar.year": "Year",
    "sellCar.mileage": "Mileage",
    "sellCar.fuelType": "Fuel type",
    "sellCar.transmission": "Transmission",
    "sellCar.description": "Description (options, history, modifications)",
    "sellCar.photosTitle": "Vehicle photos",
    "sellCar.photosHint":
      "Add at least 3 photos (exterior, interior, engine). These photos stay on your device in this demo — they are never sent to the server.",
    "sellCar.addPhoto": "Add",
    "sellCar.removePhoto": "Remove photo",
    "sellCar.photosCountSuffix": "/ 8 photos added",
    "sellCar.priceTitle": "Asking price",
    "sellCar.fixedPrice": "Fixed price (USD)",
    "sellCar.priceHint":
      "This is the price shown on your listing. Buyers will then be able to contact you directly to negotiate or arrange a viewing.",
    "sellCar.summary": "Summary",
    "sellCar.contactShown": "Contact shown on the listing:",
    "sellCar.previous": "Previous",
    "sellCar.continue": "Continue",
    "sellCar.publish": "Publish listing",
    "sellCar.publishing": "Publishing…",
    "sellCar.published": "Listing published",
    "sellCar.yourCar": "Your",
    "sellCar.nowOnline": "is now live. Redirecting to your listing…",
    "sellCar.photoWord": "photo(s)",
    "sellCar.fuelExample": "Gasoline",
    "sellCar.submitError": "Something went wrong while publishing. Please try again.",

    // --- sold-cars page ---
    "soldCars.title": "Sold cars",
    "soldCars.subtitle": "A look at the latest sales completed on AutoSale — sale price, date and location.",
    "soldCars.soldCountSuffix": "car(s) sold",
    "soldCars.soldBadge": "Sold",
    "soldCars.salePrice": "Sale price",
    "soldCars.soldOn": "Sold on",
    "soldCars.recently": "Recently",
    "soldCars.empty": "No cars sold yet. Completed sales on AutoSale will appear here.",

    // --- favorites page ---
    "favorites.title": "My favorites",
    "favorites.subtitle":
      "The listings you're following, available or sold, found here. This list is kept in your browser.",
    "favorites.empty": "Your favorites list is empty",
    "favorites.emptyHint": "Click the heart on a listing to find it here.",
    "favorites.browse": "Browse listings",

    // --- about page ---
    "about.eyebrow": "Our story",
    "about.title": "About AutoSale",
    "about.p1":
      "AutoSale was born from a simple observation: car enthusiasts deserve a sales platform as rigorous in its listings as it is demanding on the quality of the cars featured. No blurry photos, no hidden history — every listing is documented in detail, flaws included.",
    "about.p2":
      "We connect private and professional sellers with serious buyers, with no middleman and no bidding. You set your price, the buyer contacts you directly to negotiate and arrange a viewing.",
    "about.p3":
      "From collectible youngtimers to modern sports cars to restored classics, our catalog reflects the diversity of automotive passions — without ever sacrificing transparency.",
    "about.commitmentTitle": "Our commitment",
    "about.li1": "Free listing publication, no hidden commission.",
    "about.li2": "Listings written with complete technical specifications.",
    "about.li3": "Direct contact between buyer and seller, no middleman.",
    "about.li4": "Dedicated support from listing to handover.",

    // --- faq page ---
    "faq.eyebrow": "Support",
    "faq.title": "How it works",
    "faq.subtitle": "Answers to the most frequently asked questions about selling, buying and contacting a seller.",
    "faq.q1": "How is a listing's price set?",
    "faq.a1":
      "The seller freely sets the asking price. That price is shown as-is on the listing — there is no bidding or counter-bidding.",
    "faq.q2": "How do I contact a seller?",
    "faq.a2":
      "On every listing, a contact form lets you send a message directly to the seller, and their phone number is available with one click.",
    "faq.q3": "How much does it cost to publish a listing?",
    "faq.a3": "Publishing is entirely free, with no commission on the sale.",
    "faq.q4": "How does payment and handover work?",
    "faq.a4":
      "Payment and key handover are negotiated directly between buyer and seller, once they've agreed on a price.",
    "faq.q5": "Can I edit or remove my listing?",
    "faq.a5": "Contact our support with your listing's title or link, and we'll take care of editing or removing it.",
    "faq.q6": "How are listings verified?",
    "faq.a6":
      "Our editorial team reviews every submission, checks the information provided for consistency, and asks the seller for clarification if needed before publishing.",

    // --- legal pages (shared) ---
    "legal.warningTitle": "Notice:",
    "legal.warningBody":
      "this text is a generic template written as an example for this prototype. It does not constitute legal advice and must be reviewed and adapted by a lawyer before any real production use.",

    // --- terms page ---
    "terms.title": "Terms of use",
    "terms.lastUpdated": "Last updated: August 30, 2026 — demo document, no legal value.",
    "terms.s1title": "1. Purpose",
    "terms.s1body":
      "These terms govern the use of the AutoSale platform, a service that directly connects sellers and buyers of vehicles at a fixed price.",
    "terms.s2title": "2. Fixed-price listings",
    "terms.s2body":
      "Each listing displays a fixed price freely set by the seller. AutoSale does not set, negotiate, or take any share of the sale price: the final negotiation happens directly between buyer and seller.",
    "terms.s3title": "3. Listings",
    "terms.s3body":
      "The seller is solely responsible for the accuracy of the information provided (condition, mileage, history). AutoSale reserves the right to remove any listing deemed incomplete or misleading.",
    "terms.s4title": "4. Free of charge",
    "terms.s4body": "Publishing a listing is entirely free, with no commission taken on the sale, regardless of outcome.",
    "terms.s5title": "5. Liability",
    "terms.s5body":
      "AutoSale acts as a technical intermediary and is not a party to the sale contract concluded between buyer and seller.",
    "terms.s6title": "6. Changes to these terms",
    "terms.s6body": "These terms may be changed at any time; the version in effect is the one published on this page.",

    // --- privacy page ---
    "privacy.title": "Privacy policy",
    "privacy.lastUpdated": "Last updated: August 30, 2026 — demo document.",
    "privacy.s1title": "Data collected",
    "privacy.s1body":
      "Seller contact details (name, email, phone) and vehicle details when you publish a listing; name and email when you contact a seller or make a demo payment.",
    "privacy.s2title": "Use of data",
    "privacy.s2body":
      "Your data is only used to publish your listing and connect you with interested buyers or sellers. AutoSale does not create any user accounts.",
    "privacy.s3title": "Data storage",
    "privacy.s3body":
      "In this demo, published listings and contact messages sent to sellers are stored server-side. Your favorites and display preferences (theme, language) stay only in your browser (localStorage). No data is shared with a third party.",
    "privacy.s4title": "Cookies",
    "privacy.s4body":
      "The site does not use advertising tracking cookies. Only technical preferences (light/dark theme, favorites) are stored locally.",
    "privacy.s5title": "Card payment",
    "privacy.s5body":
      "This demo's payment flow processes no real payment: no payment processor is contacted and the card number is never stored. Only the last 4 digits are kept server-side, solely for the confirmation screen.",
    "privacy.s6title": "Your rights",
    "privacy.s6body": "You can delete your data at any time by clearing this site's browsing data in your browser.",

    // --- checkout page ---
    "checkout.demoTitle": "Demo mode.",
    "checkout.demoBody":
      "No real payment is processed here — no card is charged, no card number is sent to a real payment processor. This flow only illustrates the card-payment purchase experience.",
    "checkout.title": "Complete your purchase",
    "checkout.askingPrice": "Asking price",
    "checkout.totalToPay": "Total to pay",
    "checkout.summary": "Summary",
    "checkout.sellerLabel": "Seller:",
    "checkout.deliveryHint": "Vehicle handover is to be arranged separately with the seller once payment is confirmed.",
    "checkout.continueToPayment": "Continue to payment",
    "checkout.payByCard": "Card payment (demo)",
    "checkout.yourName": "Your name",
    "checkout.yourEmail": "Your email",
    "checkout.cardNumber": "Card number",
    "checkout.expiry": "Expiry",
    "checkout.cvc": "CVC",
    "checkout.payButton": "Pay",
    "checkout.payButtonDemo": "(demo)",
    "checkout.paying": "Processing payment…",
    "checkout.successTitle": "Payment simulated successfully",
    "checkout.successCardEnding": "Card ending in",
    "checkout.successDebited": "charged (demo) for",
    "checkout.successBodySuffix": "In a real deployment, the seller would be notified to arrange handover of your",
    "checkout.backHome": "Back to home",
    "checkout.unavailableTitle": "This car is no longer available",
    "checkout.unavailableBody": "It has already been sold to another buyer.",
    "checkout.seeOtherListings": "See other listings",
    "checkout.alreadySoldError": "This car was just sold to another buyer.",
    "checkout.genericError": "Payment failed. Please try again.",

    // --- 404 ---
    "notFound.badge": "Error 404",
    "notFound.title": "Page not found",
    "notFound.body": "The page you're looking for doesn't exist or has been moved.",
    "notFound.backHome": "Back to home",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)["fr"];
