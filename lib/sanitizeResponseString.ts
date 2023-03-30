import { decode } from 'html-entities'
import striptags from 'striptags'

/**
 * Sanitizes an HTML string by decoding HTML entities and stripping out HTML tags.
 * @param {string} htmlString - The HTML string to sanitize.
 * @returns {string} The sanitized string.
 */
export function sanitize(htmlString: string): string {
  const decoded = decode(htmlString)
  const sanitized = striptags(decoded)
  return sanitized
}
