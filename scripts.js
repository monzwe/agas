    const scriptUrl = "https://script.google.com/macros/s/AKfycbxrDnesoYawPLQHClhvAdgQ99RgiN-gSm2uwStbYuDarsovduTptgTzfamoxxQPuR5X/exec"; 

    async function loadHikes() {
      const container = document.getElementById("cards");
      container.innerHTML = "<p>Un instant...</p>";

      try {
        const response = await fetch(scriptUrl);
        const hikes = await response.json();

        container.innerHTML = "";

        hikes.forEach(hike => {
          const card = document.createElement("div");
          card.className = "card";

          card.innerHTML = `
            <p><strong> ${hike.Rdv || ""}</strong></p>
            <p> ${hike.Stops || ""}</p>
          `;

          container.appendChild(card);
        });

      } catch (err) {
        console.error(err);
        container.innerHTML = "<p>Oops.</p>";
      }
    }

    loadHikes();

