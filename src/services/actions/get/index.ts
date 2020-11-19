import clipboardy from 'clipboardy'
import * as prompts from '@/services/prompts'
import { getAll, getContent } from '@/services/gist'

const get = async () => {
  const { term } = await prompts.search()
  const { descriptions, gists } = await getAll(term)
  if (gists.length) {
    const gist = await prompts.getGist(descriptions, gists)
    const data = await getContent(gist)
    if (data) clipboardy.writeSync(data)
    console.log('🧙‍♀️ Copied to your clipboard!')
  } else console.log('No gists matched your seach.')
}

export default get
