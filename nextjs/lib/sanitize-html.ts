// lib/sanitize-html.ts
export function sanitizeBlogHtml(html: string): string {
  if (!html) return '';
  
  let clean = html;
  
  // Remove <!DOCTYPE ...> declarations
  clean = clean.replace(/<!DOCTYPE[^>]*>/gi, '');
  
  // Remove <html> and </html> tags (with any attributes)
  clean = clean.replace(/<\/?html[^>]*>/gi, '');
  
  // Remove entire <head>...</head> block (includes <style>, <meta>, <title>)
  clean = clean.replace(/<head[\s\S]*?<\/head>/gi, '');
  
  // Remove <body> and </body> tags but keep inner content
  clean = clean.replace(/<\/?body[^>]*>/gi, '');
  
  // Remove any remaining <style>...</style> blocks
  clean = clean.replace(/<style[\s\S]*?<\/style>/gi, '');
  
  // Remove any <script>...</script> blocks
  clean = clean.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  // Remove inline style attributes from all elements
  clean = clean.replace(/\sstyle="[^"]*"/gi, '');
  clean = clean.replace(/\sstyle='[^']*'/gi, '');
  
  // Remove class attributes (Bubble-specific classes)
  clean = clean.replace(/\sclass="[^"]*"/gi, '');
  clean = clean.replace(/\sclass='[^']*'/gi, '');
  
  // Clean up excessive whitespace
  clean = clean.replace(/\n{3,}/g, '\n\n');
  
  return clean.trim();
}
