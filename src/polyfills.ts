/* global Element, CharacterData, DocumentType */
/**
 * Add polyfills for
 */
import polyfillElementRemove from './polyfill.remove.ts'
import polyfillElementMatches from './polyfill.matches.ts'

polyfillElementRemove([Element.prototype, CharacterData.prototype, DocumentType.prototype])
polyfillElementMatches(Element)
