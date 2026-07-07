export interface PrestationItem {
  id: string
  title: string
  description: string
  /** Court tag affiché à côté du prix (ex. une durée "30 min" ou une mention "-20%"). */
  meta: string
  price: string
}

export interface PrestationCategory {
  id: string
  number: string
  title: string
  items: PrestationItem[]
}

export const prestationCategories: PrestationCategory[] = [
  {
    id: 'laser-femme',
    number: '01',
    title: 'Épilation laser — Femme',
    items: [
      {
        id: 'aisselles',
        title: 'Aisselles',
        description: "Séance à l'unité — résultats progressifs et durables.",
        meta: '15 min',
        price: 'CHF 60.–'
      },
      {
        id: 'demi-jambes',
        title: 'Demi-jambes',
        description: 'Zone tibias ou cuisses, à choix.',
        meta: '30 min',
        price: 'CHF 110.–'
      },
      {
        id: 'jambes-completes',
        title: 'Jambes complètes',
        description: 'Tibias et cuisses pour un résultat homogène.',
        meta: '50 min',
        price: 'CHF 180.–'
      },
      {
        id: 'maillot',
        title: 'Maillot',
        description: 'Classique ou intégral — sur devis en cabine.',
        meta: '20 min',
        price: 'dès CHF 70.–'
      }
    ]
  },
  {
    id: 'laser-homme',
    number: '02',
    title: 'Épilation laser — Homme',
    items: [
      {
        id: 'nuque',
        title: 'Nuque',
        description: 'Contours nets et durables.',
        meta: '15 min',
        price: 'CHF 65.–'
      },
      {
        id: 'dos-complet',
        title: 'Dos complet',
        description: "Séance à l'unité.",
        meta: '40 min',
        price: 'CHF 150.–'
      },
      {
        id: 'torse',
        title: 'Torse',
        description: 'Pour un résultat net et confortable.',
        meta: '35 min',
        price: 'CHF 140.–'
      }
    ]
  },
  {
    id: 'visage',
    number: '03',
    title: 'Soins du visage',
    items: [
      {
        id: 'soin-eclat-express',
        title: 'Soin éclat express',
        description: 'Nettoyage, gommage et hydratation pour une mine fraîche.',
        meta: '30 min',
        price: 'CHF 75.–'
      },
      {
        id: 'soin-profond-personnalise',
        title: 'Soin profond personnalisé',
        description: 'Diagnostic de peau et protocole adapté à vos besoins.',
        meta: '60 min',
        price: 'CHF 120.–'
      },
      {
        id: 'soin-anti-age',
        title: 'Soin anti-âge',
        description: 'Action repulpante et lissante, effet bonne mine.',
        meta: '75 min',
        price: 'CHF 145.–'
      }
    ]
  },
  {
    id: 'corps',
    number: '04',
    title: 'Soins du corps',
    items: [
      {
        id: 'gommage-corps',
        title: 'Gommage corps',
        description: "Peau douce et lumineuse, idéal avant l'été.",
        meta: '40 min',
        price: 'CHF 90.–'
      },
      {
        id: 'modelage-relaxant',
        title: 'Modelage relaxant',
        description: 'Une parenthèse de détente complète.',
        meta: '50 min',
        price: 'CHF 110.–'
      }
    ]
  },
  {
    id: 'forfaits',
    number: '05',
    title: 'Forfaits',
    items: [
      {
        id: 'forfait-laser-6-seances',
        title: 'Forfait laser 6 séances',
        description: 'Sur une même zone — payable en plusieurs fois.',
        meta: '-20%',
        price: 'sur devis'
      },
      {
        id: 'forfait-visage-decouverte',
        title: 'Forfait visage découverte',
        description: 'Trois soins du visage pour des résultats durables.',
        meta: '3 × 60 min',
        price: 'CHF 320.–'
      }
    ]
  }
]
