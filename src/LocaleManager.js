import ConfigManager from "./ConfigManager";

export default class LocaleManager {
    static setLocale(locale) {
        localStorage.setItem("it_locale", locale);
    }

    static getLocale() {
        if (localStorage.getItem("it_locale") === undefined
            || localStorage.getItem("it_locale") === "") {
            this.setLocale(this.getDefaultLocale())
        }
        return localStorage.getItem("it_locale");
    }

    static isCurrentLocaleDefault() {
        return this.getLocale() === this.getDefaultLocale();
    }

    static getLocaleList() {
        if (ConfigManager.get() !== undefined) {
            return ConfigManager.get().site.languages.available;
        }
        return [];
    }

    static getDefaultLocale() {
        if (ConfigManager.get() !== undefined) {
            return ConfigManager.get().site.languages.default;
        }
        return "";
    }

    static getLocaleNameFromCode(code) {
        return this.getLocaleList()[code];
    }

    static getAPILangSuffix() {
        if (this.isCurrentLocaleDefault()) {
            return "";
        }
        return "/lang/" + this.getLocale();
    }
}
