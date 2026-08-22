/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_JPG_CONVERTER_URL: string;
  readonly VITE_JPG_CONVERTER_BUCKET_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
