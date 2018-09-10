export default class LoadingManager {
	static start(name) {
		if (!Array.isArray(window.loadingStack)) {
			window.loadingStack = [];
		}
		document.getElementById("root").classList.add("loading");
		window.loadingStack[name] = 1;
	}

	static finish(name) {
		delete window.loadingStack[name];
		if (Object.keys(window.loadingStack).length === 0) {
			document.getElementById("root").classList.remove("loading");
		}
	}
}