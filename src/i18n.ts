import { createI18n } from 'vue-i18n'

const messages = {
  pl: {
    title: 'Generator config.h',
    subtitle: 'Wypełnij formularz, aby wygenerować plik nagłówkowy.',
    wifi: {
      title: '1. Sieć WiFi',
      desc: 'Dane dostępowe do sieci.',
      ssid: 'Nazwa sieci (SSID)',
      password: 'Hasło WiFi'
    },
    lastfm: {
      title: '2. Last.fm API',
      desc: 'Pobierz klucz na',
      apiKey: 'API Key',
      username: 'Nazwa użytkownika'
    },
    converter: {
      title: '3. Konwerter (Opcjonalne)',
      desc: 'Ustawienia dla własnego serwera okładek.',
      url: 'Converter URL',
      apiKey: 'Converter API Key',
      bucket: 'Bucket Host'
    },
    status: {
      saved: 'Zapisano plik na dysku.',
      downloaded: 'Pobrano plik.',
      error: 'Nie udało się zapisać pliku.'
    },
    saveButton: 'Zapisz config.h'
  },
  en: {
    title: 'config.h Generator',
    subtitle: 'Fill in the form to generate the header file.',
    wifi: {
      title: '1. WiFi Network',
      desc: 'Network access credentials.',
      ssid: 'Network name (SSID)',
      password: 'WiFi Password'
    },
    lastfm: {
      title: '2. Last.fm API',
      desc: 'Get your key at',
      apiKey: 'API Key',
      username: 'Username'
    },
    converter: {
      title: '3. Converter (Optional)',
      desc: 'Settings for custom cover server.',
      url: 'Converter URL',
      apiKey: 'Converter API Key',
      bucket: 'Bucket Host'
    },
    status: {
      saved: 'File saved to disk.',
      downloaded: 'File downloaded.',
      error: 'Failed to save the file.'
    },
    saveButton: 'Save config.h'
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'pl',
  fallbackLocale: 'en',
  messages
})