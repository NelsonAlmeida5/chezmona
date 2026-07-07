export interface GalleryImage {
  id: string
  label: string
}

/** Galerie courte affichée sur la page d'accueil. */
export const homeGallery: GalleryImage[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'cabine', label: 'Cabine de soin' },
  { id: 'detail', label: 'Détail' },
  { id: 'espace-laser', label: 'Espace laser' },
  { id: 'detente', label: 'Détente' }
]

/** Galerie complète affichée sur la page Galerie / À propos. */
export const aboutGallery: GalleryImage[] = [
  { id: 'facade', label: 'Façade' },
  { id: 'accueil', label: 'Accueil' },
  { id: 'cabine', label: 'Cabine' },
  { id: 'soin-visage', label: 'Soin visage' },
  { id: 'espace-laser', label: 'Espace laser' },
  { id: 'produits', label: 'Produits' },
  { id: 'detente', label: 'Détente' },
  { id: 'detail', label: 'Détail' }
]
