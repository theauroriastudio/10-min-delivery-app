// Simple icon generator script
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconDir = path.join(__dirname, '../public/icons');

// Create a simple data URL for the icon (teal background with white cross)
function generateIconDataURL(size) {
  // This creates a simple placeholder - in production you'd use actual images
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0D9488"/>
      <stop offset="100%" style="stop-color:#0891B2"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#bg)"/>
  <g transform="translate(${size/2}, ${size/2})">
    <rect x="${-size*0.23}" y="${-size*0.07}" width="${size*0.46}" height="${size*0.14}" rx="${size*0.03}" fill="white"/>
    <rect x="${-size*0.07}" y="${-size*0.23}" width="${size*0.14}" height="${size*0.46}" rx="${size*0.03}" fill="white"/>
  </g>
</svg>`;
  return svg;
}

// Ensure directory exists
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir, { recursive: true });
}

// Generate SVG icons for each size
sizes.forEach(size => {
  const svg = generateIconDataURL(size);
  const filename = `icon-${size}x${size}.svg`;
  fs.writeFileSync(path.join(iconDir, filename), svg);
  console.log(`Generated ${filename}`);
});

console.log('Icon generation complete!');
