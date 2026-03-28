const { OfflineCompiler } = require('mind-ar/src/image-target/offline-compiler');
const fs = require('fs');
const { loadImage } = require('canvas');

const compileImages = async () => {
  const compiler = new OfflineCompiler();
  // Rasmlar nomini bu erda tartib bilan yozing
  const imageFiles = [
    'admin/source_images/0.jpg',
    'admin/source_images/1.jpg'
  ];

  const images = [];
  for (const file of imageFiles) {
    const img = await loadImage(file);
    images.push(img);
  }

  const data = await compiler.compileFiles(images);
  fs.writeFileSync('public/students.mind', Buffer.from(data));
  console.log("✅ Marker 'public/students.mind' yaratildi!");
};
compileImages();