export const getTextLines = (paragraphElement: HTMLElement) => {
  if (!paragraphElement) return [];

  // Récupère le style du paragraphe
  const computedStyle = getComputedStyle(paragraphElement);
  const width = paragraphElement.clientWidth;

  // Clone le paragraphe dans un span invisible pour le calcul des lignes
  const tempSpan = document.createElement("span");
  tempSpan.style.position = "absolute";
  tempSpan.style.visibility = "hidden";
  tempSpan.style.whiteSpace = "nowrap";
  tempSpan.style.font = computedStyle.font;
  document.body.appendChild(tempSpan);

  try {
    const lines: string[] = [];
    let currentLine = "";

    // Sépare d'abord par les retours à la ligne explicites
    const paragraphs = paragraphElement.innerText.split("\n");

    paragraphs.forEach((paragraph, index) => {
      const words = paragraph.split(" ");

      words.forEach((word) => {
        // Vérifie si le mot seul est plus long que la largeur
        tempSpan.innerText = word;
        if (tempSpan.clientWidth > width) {
          // Si la ligne courante n'est pas vide, on l'ajoute
          if (currentLine) lines.push(currentLine);
          // On force le mot long sur sa propre ligne
          lines.push(word);
          currentLine = "";
          return;
        }

        tempSpan.innerText = currentLine + (currentLine ? " " : "") + word;
        if (tempSpan.clientWidth > width) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine += (currentLine ? " " : "") + word;
        }
      });

      // Ajoute la dernière ligne du paragraphe
      if (currentLine) {
        lines.push(currentLine);
        currentLine = "";
      }

      // Ajoute une ligne vide entre les paragraphes, sauf pour le dernier
      if (index < paragraphs.length - 1) {
        lines.push("");
      }
    });

    return lines;
  } finally {
    document.body.removeChild(tempSpan);
  }
};
