const fs = require('fs');

const categories = ['DSLR', 'Mirrorless', 'Compact', 'Action'];
const cameraNames = ['Canon EOS 5D', 'Nikon D850', 'Sony Alpha a7', 'Fujifilm X-T4', 'Olympus OM-D E-M1'];

function generateCameraData(page, limit) {
  const cameras = [];
  for (let i = 0; i < limit; i++) {
    cameras.push({
      name: `${cameraNames[Math.floor(Math.random() * cameraNames.length)]} ${Math.floor(Math.random() * 10000)}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      price: `$${(Math.random() * 2000 + 300).toFixed(2)}`,
    });
  }
  return {
    cameras,
    total: 2000, // Simulating a total count
  };
}

const page = process.argv[2] || 1;
const limit = process.argv[3] || 20;
const data = generateCameraData(page, limit);

fs.writeFileSync('sample-data.json', JSON.stringify(data, null, 2), 'utf-8');
console.log('Sample data generated in sample-data.json');
