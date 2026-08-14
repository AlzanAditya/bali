import fs from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { pages } from '../src/pages/registry'

const dist = path.resolve('dist')
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

for (const page of pages) {
  const markup = renderToString(React.createElement(page.component))
  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/s, `<meta name="description" content="${escapeAttr(page.description)}" />`)
    .replace(/<div id="root"><\/div>/, `<div id="root">${markup}</div>`)
  const target = path.join(dist, page.file)
  await fs.mkdir(path.dirname(target), { recursive: true })
  await fs.writeFile(target, html)
}
await fs.copyFile(path.join(dist, 'index.html'), path.join(dist, '404.html'))

function escapeHtml(value: string) { return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;') }
function escapeAttr(value: string) { return escapeHtml(value).replaceAll('"', '&quot;') }
