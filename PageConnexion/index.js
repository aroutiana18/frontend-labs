document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const navLoginBtn = document.getElementById("navLoginBtn");
    const createAccountBtn = document.getElementById("createAccountBtn");

    if (navLoginBtn) {
        navLoginBtn.addEventListener("click", () => {
            alert("Vous êtes déjà sur la page de connexion.");
        });
    }

    if (createAccountBtn) {
        createAccountBtn.addEventListener("click", () => {
            alert("Redirection vers la page de création de compte...");
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); 

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            alert("Tentative de connexion pour : " + email);
        });
    }
});