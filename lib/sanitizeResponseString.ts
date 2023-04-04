import { decode } from 'html-entities'
import striptags from 'striptags'

/**
 * Sanitizes an HTML string by decoding HTML entities and stripping out HTML tags.
 * @param {string} htmlString - The HTML string to sanitize.
 * @returns {string} The sanitized string.
 */
export function sanitizeHTML(htmlString: string): string {
  const decoded = decode(htmlString)
  const sanitized = striptags(decoded)
  return sanitized
}
/**
 * Sanitizes a url by removing the protocol, trailing slashes and routes.
 * e.g. https://github.com/ahamedzoha/scrapify => example.com
 * @param {string} url - The url to sanitize.
 * @returns {string} The sanitized url.
 */
export function sanitizeUrl(url: string): string {
  const sanitized = url
    .replace(/(^\w+:|^)\/\//, '')
    .replace(/\/$/, '')
    .replace(/\/.*$/, '')
  return sanitized
}
