export interface OpeningHours {
  day: string
  hours: string
  closed?: boolean
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: OpeningHours[]
  /** Lien de réservation Fresha — placeholder en attendant le lien réel du client. */
  bookingUrl: string
}

export const contactInfo: ContactInfo = {
  address: 'Rue exemple 12, 1530 Valais (à compléter)',
  phone: '+41 00 000 00 00 (à compléter)',
  email: 'contact@chezmona.ch (à compléter)',
  hours: [
    { day: 'Lundi – Vendredi', hours: '09:00 – 19:00' },
    { day: 'Samedi', hours: '09:00 – 16:00' },
    { day: 'Dimanche', hours: 'Fermé', closed: true }
  ],
  bookingUrl: '#reservation'
}
