/**
 * Apply newspaper-style filters to an image using Canvas API
 * - Grayscale conversion
 * - Subtle sepia tone
 * - Increased contrast
 * - Reduced sharpness (slight blur)
 * - Paper grain/noise effect
 */

export function applyNewspaperFilter(
    canvas: HTMLCanvasElement,
    image: HTMLImageElement
): string {
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    // Set canvas dimensions to match image
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw original image
    ctx.drawImage(image, 0, 0);

    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Apply filters
    applyGrayscale(data);
    applySepiaTone(data);
    applyContrast(data, 1.3);
    applyPaperGrain(data);

    // Put modified image data back
    ctx.putImageData(imageData, 0, 0);

    // Apply slight blur effect using canvas filter
    ctx.filter = 'blur(0.5px)';
    ctx.drawImage(canvas, 0, 0);

    // Return canvas as data URL
    return canvas.toDataURL('image/jpeg', 0.95);
}

function applyGrayscale(data: Uint8ClampedArray): void {
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Standard grayscale formula (luminosity method)
        const gray = r * 0.299 + g * 0.587 + b * 0.114;

        data[i] = gray;      // R
        data[i + 1] = gray;  // G
        data[i + 2] = gray;  // B
        // data[i + 3] is alpha, keep unchanged
    }
}

function applySepiaTone(data: Uint8ClampedArray): void {
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Apply slight sepia tone (10% sepia strength for subtle effect)
        const sepiaStrength = 0.1;

        data[i] = Math.min(255, r + 15 * sepiaStrength);      // R - add warm tone
        data[i + 1] = Math.min(255, g + 5 * sepiaStrength);   // G - slight boost
        data[i + 2] = Math.max(0, b - 10 * sepiaStrength);    // B - reduce blue
    }
}

function applyContrast(data: Uint8ClampedArray, contrast: number): void {
    // Contrast formula: (value - 128) * contrast + 128
    const intercept = 128 * (1 - contrast);

    for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.max(0, Math.min(255, data[i] * contrast + intercept));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] * contrast + intercept));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] * contrast + intercept));
    }
}

function applyPaperGrain(data: Uint8ClampedArray): void {
    // Add subtle noise/grain effect (2% grain strength for newspaper texture)
    const grainStrength = 2;

    for (let i = 0; i < data.length; i += 4) {
        // Random grain value between -grainStrength and +grainStrength
        const grain = (Math.random() - 0.5) * 2 * grainStrength;

        data[i] = Math.max(0, Math.min(255, data[i] + grain));      // R
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + grain)); // G
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + grain)); // B
    }
}
