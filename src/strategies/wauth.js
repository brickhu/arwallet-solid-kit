import { WAuth, WAuthProviders } from "@wauth/sdk";

// Initialize the SDK
const wauth = new WAuth({ dev: false });

// Optional: Listen for authentication state changes
wauth.onAuthDataChange((authData) => {
    if (authData) {
        console.log("User authenticated:", authData);
    } else {
        console.log("User logged out");
    }
});

