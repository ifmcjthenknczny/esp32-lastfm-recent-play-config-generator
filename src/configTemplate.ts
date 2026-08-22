export interface ConfigData {
  wifiSsid: string
  wifiPassword: string
  lastfmApiKey: string
  lastfmUsername: string
  jpgUrl: string
  jpgApiKey: string
  jpgBucket: string
}

export const buildConfigHeader = (data: ConfigData): string => {
  return `#ifndef CONFIG_H
  #define CONFIG_H

  const char* WIFI_SSID     = "${data.wifiSsid}";
  const char* WIFI_PASSWORD = "${data.wifiPassword}";

  const char* LASTFM_APIKEY   = "${data.lastfmApiKey}";
  const char* LASTFM_USERNAME = "${data.lastfmUsername}";

  const char* JPG_CONVERTER_API_KEY = "${data.jpgApiKey}";

  #endif`
}
