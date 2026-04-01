import sharp from 'sharp'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const target = join(__dirname, '../src/assets/logo-unespar.png')

const { data, info } = await sharp(target)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height } = info
for (let i = 0; i < data.length; i += 4) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  const mx = Math.max(r, g, b)
  const mn = Math.min(r, g, b)
  if (mx < 42 && mn < 36 && r + g + b < 115) {
    data[i + 3] = 0
  }
}

await sharp(data, {
  raw: { width, height, channels: 4 },
})
  .png()
  .toFile(target)
