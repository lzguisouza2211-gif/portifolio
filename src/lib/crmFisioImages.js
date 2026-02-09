// Retorna lista ordenada de imagens numericamente da pasta CRMFISIO
export function getCrmFisioImages() {
  const images = Object.entries(
    import.meta.glob('/assets/CRMFISIO/*.{png,jpg,jpeg}', { eager: true })
  );
  // Ordena pelo nome do arquivo (assume nomes como 1.png, 2.jpg, etc)
  images.sort(([a], [b]) => {
    const numA = parseInt(a.match(/(\d+)/)?.[0] || '0', 10);
    const numB = parseInt(b.match(/(\d+)/)?.[0] || '0', 10);
    return numA - numB;
  });
  return images.map(([_, mod]) => mod.default || mod);
}
