let backendHost;

if (process.env.NODE_ENV === "development") {
    backendHost = "http://ideatype.local";
} else {
    backendHost = "";
}

console.log(backendHost);

export const API_ROOT = backendHost;