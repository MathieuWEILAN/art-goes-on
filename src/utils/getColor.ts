const createCanvasContext = (imgEl: HTMLImageElement) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = imgEl.width;
  canvas.height = imgEl.height;
  ctx?.drawImage(imgEl, 0, 0);

  return { canvas, ctx };
};

const getColorMap = (imageData: Uint8ClampedArray) => {
  const colorMap: { [key: string]: number } = {};

  for (let i = 0; i < imageData.length; i += 4) {
    const [r, g, b] = [imageData[i], imageData[i + 1], imageData[i + 2]];
    const rgb = `rgb(${r},${g},${b})`;
    colorMap[rgb] = (colorMap[rgb] || 0) + 1;
  }

  return colorMap;
};

const findDominantColor = (colorMap: { [key: string]: number }): string => {
  return Object.entries(colorMap).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
};

export const getDominantColor = (imgEl: HTMLImageElement): Promise<string> => {
  return new Promise((resolve) => {
    const { canvas, ctx } = createCanvasContext(imgEl);

    if (!ctx) {
      return resolve("#000000");
    }

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const colorMap = getColorMap(imageData);
    const dominantColor = findDominantColor(colorMap);

    resolve(dominantColor);
  });
};
