/**
 * Source : docs/references/prestations-source.md (transcription des visuels
 * tarifaires envoyés par la cliente). Tarifs provisoires, à valider avec elle
 * avant mise en ligne définitive — voir la note affichée sur la page.
 */

export interface PrestationItem {
  id: string
  title: string
  price: string
  /** Tag court optionnel (durée, mention spéciale...) — non fourni pour l'instant. */
  meta?: string
  description?: string
  order: number
}

export interface PrestationCategory {
  id: string
  title: string
  order: number
  items: PrestationItem[]
}

export interface PackageItem {
  id: string
  label: string
}

export interface Package {
  id: string
  title: string
  duration: string
  price: string
  includes: PackageItem[]
  /** Libellé pour un futur visuel (ImagePlaceholder en attendant une vraie photo). */
  imageLabel?: string
  order: number
}

export const prestationCategories: PrestationCategory[] = [
  {
    id: 'soins-laser-classiques',
    title: 'Soins laser classiques',
    order: 1,
    items: [
      { id: 'jambes-completes', title: 'Jambes complètes', price: '350 CHF', order: 1 },
      { id: 'demi-jambes', title: 'Demi-jambes', price: '280 CHF', order: 2 },
      { id: 'bras-entiers', title: 'Bras entiers', price: '300 CHF', order: 3 },
      { id: 'dos-complet', title: 'Dos complet', price: '350 CHF', order: 4 },
      { id: 'demi-dos', title: 'Demi-dos', price: '250 CHF', order: 5 },
      { id: 'torse', title: 'Torse', price: '250 CHF', order: 6 },
      { id: 'maillot-integral', title: 'Maillot intégral', price: '220 CHF', order: 7 },
      { id: 'maillot-echancre', title: 'Maillot échancré', price: '200 CHF', order: 8 }
    ]
  },
  {
    id: 'petites-interventions',
    title: 'Petites interventions',
    order: 2,
    items: [
      { id: 'nez', title: 'Nez', price: '80 CHF', order: 1 },
      { id: 'oreilles', title: 'Oreilles', price: '80 CHF', order: 2 },
      { id: 'levre-superieure', title: 'Lèvre supérieure', price: '80 CHF', order: 3 },
      { id: 'menton', title: 'Menton', price: '80 CHF', order: 4 },
      { id: 'pieds', title: 'Pieds', price: '80 CHF', order: 5 },
      { id: 'genoux', title: 'Genoux', price: '80 CHF', order: 6 }
    ]
  },
  {
    id: 'moyennes-interventions',
    title: 'Moyennes interventions',
    order: 3,
    items: [
      { id: 'avant-bras', title: 'Avant-bras', price: '180 CHF', order: 1 },
      { id: 'ventre', title: 'Ventre', price: '160 CHF', order: 2 },
      { id: 'epaules', title: 'Épaules', price: '160 CHF', order: 3 },
      { id: 'sillon-inter-fessier', title: 'Sillon inter-fessier', price: '120 CHF', order: 4 },
      { id: 'ligne-abdominale', title: 'Ligne abdominale', price: '100 CHF', order: 5 },
      { id: 'aisselles', title: 'Aisselles', price: '110 CHF', order: 6 }
    ]
  }
]

export const packages: Package[] = [
  {
    id: 'forfait-1',
    title: 'Forfait 1',
    duration: '45 min',
    price: '180 CHF / 1 séance',
    order: 1,
    includes: [
      { id: 'demi-jambes', label: 'Demi-jambes' },
      { id: 'bikini-au-choix', label: 'Bikini au choix' },
      { id: 'aisselles', label: 'Aisselles' }
    ]
  },
  {
    id: 'forfait-2',
    title: 'Forfait 2',
    duration: '60 min',
    price: '210 CHF / 1 séance',
    order: 2,
    includes: [
      { id: 'jambes-entieres', label: 'Jambes entières' },
      { id: 'bikini-ou-aisselles', label: 'Bikini au choix ou aisselles' }
    ]
  },
  {
    id: 'forfait-3',
    title: 'Forfait 3',
    duration: '60 min',
    price: '230 CHF / 1 séance',
    order: 3,
    includes: [
      { id: 'jambes-entieres', label: 'Jambes entières' },
      { id: 'bikini-au-choix', label: 'Bikini au choix' },
      { id: 'aisselles', label: 'Aisselles' }
    ]
  },
  {
    id: 'forfait-4',
    title: 'Forfait 4',
    duration: '75 min',
    price: '280 CHF / 1 séance',
    order: 4,
    includes: [
      { id: 'demi-jambes', label: 'Demi-jambes' },
      { id: 'bikini-au-choix', label: 'Bikini au choix' },
      { id: 'aisselles', label: 'Aisselles' },
      { id: 'demi-bras', label: 'Demi-bras' }
    ]
  }
]
