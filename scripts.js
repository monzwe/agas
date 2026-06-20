    const scriptUrl = "https://script.google.com/macros/s/AKfycbxrDnesoYawPLQHClhvAdgQ99RgiN-gSm2uwStbYuDarsovduTptgTzfamoxxQPuR5X/exec"; 

    async function loadHikes() {
      const container = document.getElementById("cards");
      container.innerHTML = "<p><i class='fas fa-hourglass-start'></i>...</p>";

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
        container.innerHTML = "<p><i class='fas fa-info-circle'></i> Internet ?</p>";
      }
    }

    loadHikes();

