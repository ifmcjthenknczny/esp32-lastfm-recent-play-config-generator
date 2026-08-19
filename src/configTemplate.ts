export interface ConfigData {
    wifiSsid: string
    wifiPassword: string
    lastfmApiKey: string
    lastfmUsername: string
    jpgUrl: string
    jpgApiKey: string
    jpgBucket: string
  }
  
  export const generateConfigHeader = (data: ConfigData): string => {
    return `#ifndef CONFIG_H
  #define CONFIG_H
  
  static const char* WIFI_SSID     = "${data.wifiSsid}";
  static const char* WIFI_PASSWORD = "${data.wifiPassword}";
  
  static const char* LASTFM_APIKEY   = "${data.lastfmApiKey}";
  static const char* LASTFM_USERNAME = "${data.lastfmUsername}";
  
  static const char* JPG_CONVERTER_API_KEY = "${data.jpgApiKey}";
  
  #endif`
  }