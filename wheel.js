console.log("Welcome! 3");

var keycloak = new Keycloak({
    url: "https://sso.consumer.games/auth",
    realm: "magic",
    clientId: "game-client",
});
console.log(keycloak);
async function initializeKeycloak() {
    try {
        const authenticated = await keycloak.init({
            onLoad: "login-required",
            timeSkew: 60000,
            flow: "standard",
            pkceMethod: "S256",
        });
        console.log(
            `User is ${authenticated ? "authenticated" : "not authenticated"}`
        );
        console.log(keycloak.token, " wow");
        document.getElementById("login-button").style("display", "none");
        document.getElementById("unity-container").style("display", "block");
    } catch (error) {
        console.error("Failed to initialize adapter:", error.toString());
        console.error("Failed to initialize adapter:", JSON.stringify(error));
    }
}
initializeKeycloak();
