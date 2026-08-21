/**
 * Builds a real product-image search URL for imported products.
 * The query is product-specific, so an empty WooCommerce Images column does
 * not make every product render the same placeholder image.
 */
export function getDynamicProductImageUrl(title: string, category?: string): string {
  const query = `${title} ${category || ''} product gift card`.trim();
  return `https://tse1.mm.bing.net/th?q=${encodeURIComponent(query)}&w=900&h=900&c=7&rs=1`;
}

export function uniqueImageUrls(images: string[]): string[] {
  return [...new Set(images.map(image => image.trim()).filter(Boolean))];
}

export function replaceExternalLinks(text: string): string {
  return text.replace(/https?:\/\/[^\s"'<>]+/gi, 'https://playbeat.digital');
}