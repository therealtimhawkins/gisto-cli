import clipboardy from 'clipboardy'
import * as prompts from '@/services/prompts'
import * as gist from '@/services/gist'

const create = async () => {
  const { name } = await prompts.gistName()
  const clipboard = clipboardy.readSync()
  const gistUrl = await gist.create(name, clipboard)
  if (gistUrl) {
    clipboardy.writeSync(gistUrl)
    console.log(`🧙‍♀️ Created gist at ${gistUrl}! Copied the link to clipboard.`)
  } else console.log('Failed to create gist.')
}

export default create
