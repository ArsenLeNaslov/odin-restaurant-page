export default function loadHome(parentContainer) {
  const presentation = document.createElement("div");
  presentation.classList.add("presentation");
  const title = document.createElement("div");
  const titleText = document.createElement("h1");
  titleText.textContent = "Odin's Orbital Station Restaurant";
  title.appendChild(titleText);
  const presentationText = document.createElement("div");
  const paragraph1 = document.createElement("p");
  paragraph1.textContent = `Odin’s Orbital Station Restaurant grows from a devotion to the flavors of home, thoughtfully adapted for life in orbit. 
            Its culinary vision brings authentic Earth cuisine to guests traveling the Central Ring.
            Ingredients follow standards for freshness used in orbital habitats, and every dish relies on genuine Earth products delivered through scheduled cargo flights.
            Our warm and welcoming atmosphere offers comfort even hundreds of kilometers above Earth.\n\n`;
  const paragraph2 = document.createElement("p");
  paragraph2.textContent = `Our mission is to make our guests experience happiness at every gathering in orbit, granting a unique dining experience.
            The restaurant layout's follows the modern style of the Station’s Central Ring and features distinct areas that draw from architectural and culinary traditions across Earth.
            Guests can enjoy the clean lines and warm textures of Mediterranean courtyards, or the refined simplicity influenced by East Asian dining spaces.
            Each section provides a familiar touchpoint from home, offering comfort and connection while we circle high above Earth.
            Join us in celebrating the flavors and cultures that shape our passion for Earth cuisine.`;
  presentationText.appendChild(paragraph1);
  presentationText.appendChild(paragraph2);
  presentation.appendChild(title);
  presentation.appendChild(presentationText);
  parentContainer.appendChild(presentation);
}