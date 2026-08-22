<script setup lang="ts">
import { ref, reactive } from 'vue'
import { buildConfigHeader } from './configTemplate'
import { buildConverterHeader } from './converterTemplate'

const form = reactive({
  wifiSsid: '',
  wifiPassword: '',
  lastfmApiKey: '',
  lastfmUsername: '',
  jpgApiKey: '',
})

const status = ref<{ type: 'success' | 'error'; msg: string } | null>(null)

const saveFile = async (filename: string, content: string) => {
  if ('showSaveFilePicker' in window) {
    const handle = await (window as any).showSaveFilePicker({
      suggestedName: filename,
      types: [
        {
          description: 'C Header File',
          accept: { 'text/x-c': ['.h'] },
        },
      ],
    })
    const writable = await handle.createWritable()
    await writable.write(content)
    await writable.close()
  } else {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }
}

const handleSave = async () => {
  status.value = null

  try {
    const configContent = buildConfigHeader(form)
    await saveFile('config.h', configContent)

    let generatedFilesMsg = 'Zapisano plik config.h.'

    if (form.jpgApiKey.trim()) {
      const converterContent = buildConverterHeader()
      await saveFile('converter.h', converterContent)
      generatedFilesMsg = 'Zapisano pliki config.h oraz converter.h.'
    }

    status.value = { type: 'success', msg: generatedFilesMsg }
  } catch (err: any) {
    if (err.name !== 'AbortError') {
      status.value = { type: 'error', msg: 'Nie udało się zapisać plików.' }
    }
  }
}

const inputClass =
  'w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition outline-none'
</script>

<template>
  <div className="min-h-screen p-6 md:p-10 bg-slate-50">
    <div
      className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100"
    >
      <header className="mb-10 pb-6 border-b border-slate-200">
        <h1 className="text-3xl font-bold text-slate-950">Generator config.h</h1>
        <p className="text-slate-600 mt-2">Wypełnij formularz, aby wygenerować plik nagłówkowy.</p>
      </header>

      <div className="space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">1. Sieć WiFi</h3>
            <p className="text-sm text-slate-500">Dane dostępowe do sieci.</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <input v-model="form.wifiSsid" placeholder="Nazwa sieci (SSID)" :class="inputClass" />
            <input
              v-model="form.wifiPassword"
              type="password"
              placeholder="Hasło WiFi"
              :class="inputClass"
            />
          </div>
        </section>

        <hr className="border-slate-200" />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">2. Last.fm API</h3>
            <p className="text-sm text-slate-500">
              Pobierz klucz na
              <a
                href="https://www.last.fm/api/account/create"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
                >last.fm/api</a
              >.
            </p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <input v-model="form.lastfmApiKey" placeholder="API Key" :class="inputClass" />
            <input
              v-model="form.lastfmUsername"
              placeholder="Nazwa użytkownika"
              :class="inputClass"
            />
          </div>
        </section>

        <hr className="border-slate-200" />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">3. Konwerter (Opcjonalne)</h3>
            <p className="text-sm text-slate-500">Ustawienia dla własnego serwera okładek.</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <input v-model="form.jpgApiKey" placeholder="Converter API Key" :class="inputClass" />
          </div>
        </section>
      </div>

      <footer
        className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex-1 text-center sm:text-left">
          <p
            v-if="status?.type === 'success'"
            className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block"
          >
            {{ status.msg }}
          </p>
          <p
            v-if="status?.type === 'error'"
            className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block"
          >
            {{ status.msg }}
          </p>
        </div>

        <button
          @click="handleSave"
          className="w-full sm:w-auto px-8 py-3 bg-slate-950 text-white font-semibold rounded-xl hover:bg-slate-800 active:scale-95 transition-all shadow-md shadow-slate-200 flex items-center gap-2 justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Zapisz config.h
        </button>
      </footer>
    </div>
  </div>
</template>
