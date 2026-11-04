// préparation de l'enronnement

// Fonction pour charger un composant HTML
async function loadComponent(elementId, filePath) {

    const element = document.getElementById(elementId);

    if (!element) {
        console.warn(`Élément #${elementId} introuvable.`);
        return;
    }

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        element.innerHTML = await response.text();

    } catch (error) {
        console.error(`Erreur de chargement : ${filePath}`, error);
    }
}

// Chargement du Header et du Footer
async function initComponents() {

    await Promise.all([
        loadComponent("header", "./components/header.html"),
        loadComponent("footer", "./components/footer.html")
    ]);

}

initComponents();
