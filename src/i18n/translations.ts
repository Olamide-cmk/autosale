export type Locale = "fr" | "en";

// NOTE — coverage: this dictionary covers the entire site UI chrome (header,
// footer, every page, every form). Per-listing content written in the data
// file (car descriptions, highlights, notes) is not covered here — that is
// content translation, not UI translation, and stays in French regardless
// of the selected locale.
export const translations = {
  fr: {
    // --- header / nav ---
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.shop": "Shop",
    "nav.featured": "Vedette",
    "nav.contact": "Contact",
    "search.placeholder": "Rechercher (marque, modèle...)",
    "theme.toLight": "Passer en mode clair",
    "theme.toDark": "Passer en mode sombre",

    // --- footer ---
    "footer.tagline":
      "Achat et vente de voitures d'exception à prix fixe — sportives modernes, youngtimers et classiques restaurées. Annonces détaillées, zéro enchère, zéro surprise.",
    "footer.listingsHeading": "Annonces",
    "footer.forSale": "À vendre",
    "footer.sold": "Vendues",
    "footer.company": "Société",
    "footer.about": "À propos",
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
    "listingCard.featured": "Vedette",
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

    // --- contact page (general, not tied to a listing) ---
    "contactPage.title": "Contactez-nous",
    "contactPage.subtitle": "Une question ? Écrivez-nous, nous vous répondrons rapidement.",
    "contactPage.name": "Nom",
    "contactPage.email": "Email",
    "contactPage.message": "Message",
    "contactPage.send": "Envoyer",
    "contactPage.sending": "Envoi…",
    "contactPage.sentTitle": "Message envoyé",
    "contactPage.sentBody": "Merci de nous avoir contactés, nous vous répondrons dès que possible.",
    "contactPage.error": "Une erreur est survenue, merci de réessayer.",

    // --- home page v2 (hero video, trust, carousel, testimonials) ---
    "home.heroTitle": "Trouvez la voiture de vos rêves",
    "home.heroSubtitle": "Des voitures d'exception, vérifiées et vendues à prix fixe — partout en Europe et en Afrique.",
    "home.ctaShop": "Prendre ma voiture",
    "home.ctaContact": "Contactez-nous",
    "home.trust1.title": "Paiement sécurisé",
    "home.trust1.text": "Paiement par carte ou mobile money, traité en toute confidentialité.",
    "home.trust2.title": "Voitures vérifiées",
    "home.trust2.text": "Chaque annonce est vérifiée et documentée avant publication.",
    "home.trust3.title": "Livraison suivie",
    "home.trust3.text": "Expédition suivie de bout en bout, en Europe comme en Afrique.",
    "home.carouselIntro": "Un aperçu de ce qui vous attend",
    "home.testimonialsIntro": "Ce que nos clients en disent",
    "home.testimonialsTitle": "Témoignages",
    "home.testimonial1.name": "Karim B.",
    "home.testimonial1.text": "Achat simple et rapide, la voiture correspondait exactement à l'annonce. Livraison suivie du début à la fin.",
    "home.testimonial2.name": "Aïcha D.",
    "home.testimonial2.text": "Très bon contact avec le vendeur, aucune mauvaise surprise à la réception du véhicule.",
    "home.testimonial3.name": "Julien M.",
    "home.testimonial3.text": "Le paiement sécurisé m'a rassuré, et le délai de livraison annoncé a été respecté.",
    "home.testimonial4.name": "Fatou S.",
    "home.testimonial4.text": "Annonce très détaillée, exactement ce que je cherchais. Je recommande sans hésiter.",

    // --- about page images ---
    "about.trustImageAlt": "Remise des clés au client",
    "about.carImageAlt": "Voiture illustrant notre activité",

    // --- shop sidebar categories ---
    "shop.categoriesTitle": "Catégories",
    "shop.allCategories": "Toutes catégories",
    "shop.featuredTag": "Vedette",

    // --- checkout v2 (3-step form) ---
    "checkout.step1Title": "Informations de contact",
    "checkout.firstName": "Prénom",
    "checkout.lastName": "Nom",
    "checkout.phoneLabel": "Numéro de téléphone",
    "checkout.sameNumberQuestion": "Est-ce le même numéro que vous utilisez pour être appelé ?",
    "checkout.yes": "Oui",
    "checkout.no": "Non",
    "checkout.callNumber": "Numéro à utiliser pour vous appeler",
    "checkout.country": "Pays",
    "checkout.selectCountry": "Sélectionner un pays",
    "checkout.step2Title": "Livraison",
    "checkout.address": "Adresse",
    "checkout.city": "Ville",
    "checkout.postalCode": "Code postal",
    "checkout.region": "Région / État",
    "checkout.addressComplement": "Complément d'adresse (optionnel)",
    "checkout.step3Title": "Paiement",
    "checkout.paymentMethod": "Moyen de paiement",
    "checkout.methodCard": "Carte bancaire",
    "checkout.methodMobileMoney": "Mobile money",
    "checkout.mobileNumber": "Numéro mobile money",
    "checkout.mobileProvider": "Opérateur",
    "checkout.deliveryLocalTitle": "Livraison estimée : 3 jours à 1 semaine",
    "checkout.deliveryIntlTitle": "Livraison estimée : délai plus long, votre pays étant hors zone locale",
    "checkout.next": "Suivant",
    "checkout.back": "Précédent",
    "checkout.confirmOrder": "Confirmer la commande",

    // --- footer legal links ---
    "footer.cookieSettings": "Paramètres des cookies",

    // --- cookie consent banner ---
    "cookies.message":
      "Nous utilisons des cookies techniques pour améliorer votre expérience sur AutoSale. Aucun cookie publicitaire n'est utilisé.",
    "cookies.accept": "Accepter",
    "cookies.decline": "Refuser",
    "cookies.learnMore": "En savoir plus",

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
      "Nous proposons une sélection de véhicules à prix fixe, sans enchère ni surprise. Le prix affiché est le prix final, et vous pouvez contacter directement notre équipe pour négocier ou organiser une visite.",
    "about.p3":
      "De la youngtimer de collection à la sportive moderne en passant par les classiques restaurées, notre catalogue reflète la diversité des passions automobiles — sans jamais sacrifier la transparence.",
    "about.commitmentTitle": "Notre engagement",
    "about.li1": "Des prix fixes, sans commission cachée.",
    "about.li2": "Des annonces rédigées avec des spécifications techniques complètes.",
    "about.li3": "Un contact direct entre acheteur et vendeur, sans intermédiaire.",
    "about.li4": "Un support dédié de la prise de contact jusqu'à la remise des clés.",
    "about.howTitle": "Comment ça marche",
    "about.howSubtitle": "Les réponses aux questions les plus fréquentes sur l'achat et le contact vendeur.",
    "about.howQ1": "Comment contacter un vendeur ?",
    "about.howA1":
      "Sur chaque annonce, un formulaire de contact vous permet d'envoyer un message directement au vendeur, et son numéro de téléphone est accessible en un clic.",
    "about.howQ2": "Comment se passe le paiement et la remise du véhicule ?",
    "about.howA2":
      "Le paiement et la remise des clés se négocient directement entre l'acheteur et le vendeur, une fois qu'ils se sont mis d'accord sur le prix.",

    // --- legal pages (shared) ---
    "legal.warningTitle": "Avertissement :",
    "legal.warningBody":
      "ce texte est un modèle générique rédigé à titre d'exemple pour ce prototype. Il ne constitue pas un avis juridique et doit être relu et adapté par un juriste avant toute mise en production réelle.",

    // --- terms page ---
    "terms.title": "Conditions d'utilisation",
    "terms.lastUpdated": "Dernière mise à jour : 30 août 2026 — document de démonstration, sans valeur juridique.",
    "terms.s1title": "1. Objet",
    "terms.s1body":
      "Les présentes conditions régissent l'utilisation du site AutoSale, un site de vente de véhicules d'occasion à prix fixe.",
    "terms.s2title": "2. Annonces à prix fixe",
    "terms.s2body":
      "Chaque véhicule est proposé à un prix fixe. Il n'y a ni enchère ni surenchère : le prix affiché sur l'annonce est le prix demandé.",
    "terms.s3title": "3. Annonces",
    "terms.s3body":
      "AutoSale s'efforce de fournir des informations exactes sur l'état, le kilométrage et l'historique de chaque véhicule présenté. Ces informations sont données à titre indicatif et peuvent être mises à jour à tout moment.",
    "terms.s4title": "4. Responsabilité",
    "terms.s4body":
      "AutoSale est le vendeur des véhicules proposés sur ce site. Le paiement en ligne présenté dans cette démonstration est fictif ; la remise du véhicule est organisée séparément avec l'acheteur une fois la vente confirmée.",
    "terms.s5title": "5. Modification des conditions",
    "terms.s5body": "Ces conditions peuvent être modifiées à tout moment ; la version en vigueur est celle publiée sur cette page.",

    // --- privacy page ---
    "privacy.title": "Politique de confidentialité",
    "privacy.lastUpdated": "Dernière mise à jour : 30 août 2026 — document de démonstration.",
    "privacy.s1title": "Données collectées",
    "privacy.s1body":
      "Nom et email lorsque vous contactez un vendeur ou effectuez un paiement de démonstration.",
    "privacy.s2title": "Utilisation des données",
    "privacy.s2body":
      "Vos données servent uniquement à vous mettre en relation avec le vendeur ou à traiter votre achat de démonstration. AutoSale ne crée aucun compte utilisateur.",
    "privacy.s3title": "Stockage des données",
    "privacy.s3body":
      "Dans cette démonstration, les messages de contact envoyés aux vendeurs et les demandes d'achat sont stockés côté serveur. Vos favoris et préférences d'affichage (thème, langue) restent uniquement dans votre navigateur (localStorage). Aucune donnée n'est transmise à un tiers.",
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
    "nav.home": "Home",
    "nav.about": "About",
    "nav.shop": "Shop",
    "nav.featured": "Featured",
    "nav.contact": "Contact",
    "search.placeholder": "Search (make, model...)",
    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",

    // --- footer ---
    "footer.tagline":
      "Buy and sell exceptional cars at a fixed price — modern sports cars, youngtimers and restored classics. Detailed listings, zero bidding, zero surprises.",
    "footer.listingsHeading": "Listings",
    "footer.forSale": "For sale",
    "footer.sold": "Sold",
    "footer.company": "Company",
    "footer.about": "About",
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

    // --- contact page (general, not tied to a listing) ---
    "contactPage.title": "Contact us",
    "contactPage.subtitle": "Got a question? Send us a message and we'll get back to you quickly.",
    "contactPage.name": "Name",
    "contactPage.email": "Email",
    "contactPage.message": "Message",
    "contactPage.send": "Send",
    "contactPage.sending": "Sending…",
    "contactPage.sentTitle": "Message sent",
    "contactPage.sentBody": "Thanks for reaching out, we'll get back to you as soon as possible.",
    "contactPage.error": "Something went wrong, please try again.",

    // --- home page v2 (hero video, trust, carousel, testimonials) ---
    "home.heroTitle": "Find the car of your dreams",
    "home.heroSubtitle": "Exceptional cars, verified and sold at a fixed price — across Europe and Africa.",
    "home.ctaShop": "Get my car",
    "home.ctaContact": "Contact us",
    "home.trust1.title": "Secure payment",
    "home.trust1.text": "Pay by card or mobile money, processed with full confidentiality.",
    "home.trust2.title": "Verified cars",
    "home.trust2.text": "Every listing is verified and documented before publishing.",
    "home.trust3.title": "Tracked delivery",
    "home.trust3.text": "End-to-end tracked shipping, across Europe and Africa.",
    "home.carouselIntro": "A glimpse of what awaits you",
    "home.testimonialsIntro": "What our customers say",
    "home.testimonialsTitle": "Testimonials",
    "home.testimonial1.name": "Karim B.",
    "home.testimonial1.text": "Simple, fast purchase — the car matched the listing exactly. Tracked delivery from start to finish.",
    "home.testimonial2.name": "Aïcha D.",
    "home.testimonial2.text": "Great contact with the seller, no bad surprises when the car arrived.",
    "home.testimonial3.name": "Julien M.",
    "home.testimonial3.text": "The secure payment reassured me, and the announced delivery time was respected.",
    "home.testimonial4.name": "Fatou S.",
    "home.testimonial4.text": "Very detailed listing, exactly what I was looking for. I recommend without hesitation.",

    // --- about page images ---
    "about.trustImageAlt": "Handing over the keys to the customer",
    "about.carImageAlt": "Car illustrating our business",

    // --- shop sidebar categories ---
    "shop.categoriesTitle": "Categories",
    "shop.allCategories": "All categories",
    "shop.featuredTag": "Featured",

    // --- checkout v2 (3-step form) ---
    "checkout.step1Title": "Contact information",
    "checkout.firstName": "First name",
    "checkout.lastName": "Last name",
    "checkout.phoneLabel": "Phone number",
    "checkout.sameNumberQuestion": "Is this the same number you use to be called?",
    "checkout.yes": "Yes",
    "checkout.no": "No",
    "checkout.callNumber": "Number to use to call you",
    "checkout.country": "Country",
    "checkout.selectCountry": "Select a country",
    "checkout.step2Title": "Shipping",
    "checkout.address": "Address",
    "checkout.city": "City",
    "checkout.postalCode": "Postal code",
    "checkout.region": "Region / State",
    "checkout.addressComplement": "Address line 2 (optional)",
    "checkout.step3Title": "Payment",
    "checkout.paymentMethod": "Payment method",
    "checkout.methodCard": "Card",
    "checkout.methodMobileMoney": "Mobile money",
    "checkout.mobileNumber": "Mobile money number",
    "checkout.mobileProvider": "Provider",
    "checkout.deliveryLocalTitle": "Estimated delivery: 3 days to 1 week",
    "checkout.deliveryIntlTitle": "Estimated delivery: longer, as your country is outside the local zone",
    "checkout.next": "Next",
    "checkout.back": "Back",
    "checkout.confirmOrder": "Confirm order",

    // --- footer legal links ---
    "footer.cookieSettings": "Cookie settings",

    // --- cookie consent banner ---
    "cookies.message": "We use technical cookies to improve your experience on AutoSale. No advertising cookies are used.",
    "cookies.accept": "Accept",
    "cookies.decline": "Decline",
    "cookies.learnMore": "Learn more",

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
      "We offer a curated selection of vehicles at a fixed price, with no bidding and no surprises. The listed price is the final price, and you can contact our team directly to negotiate or arrange a viewing.",
    "about.p3":
      "From collectible youngtimers to modern sports cars to restored classics, our catalog reflects the diversity of automotive passions — without ever sacrificing transparency.",
    "about.commitmentTitle": "Our commitment",
    "about.li1": "Fixed pricing, no hidden commission.",
    "about.li2": "Listings written with complete technical specifications.",
    "about.li3": "Direct contact between buyer and seller, no middleman.",
    "about.li4": "Dedicated support from first contact to handover.",
    "about.howTitle": "How it works",
    "about.howSubtitle": "Answers to the most frequently asked questions about buying and contacting a seller.",
    "about.howQ1": "How do I contact a seller?",
    "about.howA1":
      "On every listing, a contact form lets you send a message directly to the seller, and their phone number is available with one click.",
    "about.howQ2": "How does payment and handover work?",
    "about.howA2":
      "Payment and key handover are negotiated directly between buyer and seller, once they've agreed on a price.",

    // --- legal pages (shared) ---
    "legal.warningTitle": "Notice:",
    "legal.warningBody":
      "this text is a generic template written as an example for this prototype. It does not constitute legal advice and must be reviewed and adapted by a lawyer before any real production use.",

    // --- terms page ---
    "terms.title": "Terms of use",
    "terms.lastUpdated": "Last updated: August 30, 2026 — demo document, no legal value.",
    "terms.s1title": "1. Purpose",
    "terms.s1body":
      "These terms govern the use of the AutoSale site, a site selling used vehicles at a fixed price.",
    "terms.s2title": "2. Fixed-price listings",
    "terms.s2body":
      "Each vehicle is offered at a fixed price. There is no bidding or counter-bidding: the price shown on the listing is the asking price.",
    "terms.s3title": "3. Listings",
    "terms.s3body":
      "AutoSale strives to provide accurate information about the condition, mileage, and history of each vehicle listed. This information is provided for guidance and may be updated at any time.",
    "terms.s4title": "4. Liability",
    "terms.s4body":
      "AutoSale is the seller of the vehicles offered on this site. The online payment shown in this demo is fictional; vehicle handover is arranged separately with the buyer once the sale is confirmed.",
    "terms.s5title": "5. Changes to these terms",
    "terms.s5body": "These terms may be changed at any time; the version in effect is the one published on this page.",

    // --- privacy page ---
    "privacy.title": "Privacy policy",
    "privacy.lastUpdated": "Last updated: August 30, 2026 — demo document.",
    "privacy.s1title": "Data collected",
    "privacy.s1body":
      "Name and email when you contact a seller or make a demo payment.",
    "privacy.s2title": "Use of data",
    "privacy.s2body":
      "Your data is only used to connect you with the seller or to process your demo purchase. AutoSale does not create any user accounts.",
    "privacy.s3title": "Data storage",
    "privacy.s3body":
      "In this demo, contact messages sent to sellers and purchase requests are stored server-side. Your favorites and display preferences (theme, language) stay only in your browser (localStorage). No data is shared with a third party.",
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
