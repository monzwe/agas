    const scriptUrl = "https://script.google.com/macros/s/AKfycbz4KiP_MMVQrpB0dVLBZlo2B4vXDUcZYkHdFmEoXRsFd0r9Te9BVqCUhftdlcWYeroTeg/exec";

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
            <li><strong> ${hike.Date || ""}
            ${hike.Event}</strong> -  
            ${hike.Rdv}<br>
            <mark> ${hike.Participants || ""} participants</mark><br>
            ${hike.Descriptif || ""}</li>
            </ul>
          `;
          if (hike.Participants > 0) {
            container.appendChild(card);
          }
        });

      } catch (err) {
        console.error(err);
        container.innerHTML = "<p>(Merci d'actualiser la page / Please refresh page) </p>";
      }
    }

    loadHikes();
