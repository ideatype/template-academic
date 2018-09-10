export default class ConfigManager {
	static set(config) {
		window.site_config = config;
	}

	static get() {
		return window.site_config;
	}
}