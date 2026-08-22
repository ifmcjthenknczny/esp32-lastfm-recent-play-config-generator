export interface ConverterData {
  url: string
  bucketHost: string
}

export const buildConverterHeader = (): string => {
  const url = import.meta.env.VITE_JPG_CONVERTER_URL ?? ''
  const bucketHost = import.meta.env.VITE_JPG_CONVERTER_BUCKET_HOST ?? ''

  return `#ifndef CONVERTER_H
#define CONVERTER_H

static const char* JPG_CONVERTER_URL         = "${url}";
static const char* JPG_CONVERTER_BUCKET_HOST = "${bucketHost}";

#endif`
}
