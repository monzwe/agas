    const scriptUrl = "https://script.google.com/macros/s/AKfycbxrDnesoYawPLQHClhvAdgQ99RgiN-gSm2uwStbYuDarsovduTptgTzfamoxxQPuR5X/exec"; 

    async function loadHikes() {
      const container = document.getElementById("cards");
      container.innerHTML = "<div class='rollout-bar'>...</div>";

      try {
        const response = await fetch(scriptUrl);
        const hikes = await response.json();

        container.innerHTML = "";

        hikes.forEach(hike => {
          const card = document.createElement("div");
          card.className = "card";

          card.innerHTML = `
            <ul>
            <li><strong> ${hike.Rdv || ""}</strong><br>
            ${hike.Stops || ""}<br>
            ${hike.Details || ""}</li>
            </ul>
          `;

          container.appendChild(card);
        });

      } catch (err) {
        console.error(err);
        container.innerHTML = "<p>(Merci d'actualiser la page / Please refresh page) </p>";
      }
    }

    loadHikes();