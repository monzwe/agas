    const scriptUrl = "https://script.google.com/macros/s/AKfycbyNYq4NchpnncjEwNjLZMEKiAaMyzsnimAt2u97eKTo6A-vus6mHo0FZJExXhym_-MFLQ/exec";

    async function loadItems() {
      const container = document.getElementById("names");
      container.innerHTML = "<div class='rollout-bar'>...</div>";

      try {
        const response = await fetch(scriptUrl);
        const items = await response.json();

        container.innerHTML = "";

        items.forEach(item => {
          const card = document.createElement("li");

          card.innerHTML = `
            -- ${item.txtDate || ""} 
            <mark> ${item.Nom || ""} </mark> 
            ${item.Remarques || ""}
          `;

          container.appendChild(card);
        });

      } catch (err) {
        console.error(err);
        container.innerHTML = "<p>(Merci d'actualiser la page / Please refresh page) </p>";
      }
    }

    loadItems();
