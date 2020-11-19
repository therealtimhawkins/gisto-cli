#! /usr/bin/env node

require('module-alias/register')
import env from '@/config/env.json'
import { get, create } from '@/services/actions'
import * as prompts from '@/services/prompts'
import { addToken } from '@/services/token'

const main = async () => {
  if (!env.token) {
    const { token } = await prompts.getToken()
    await addToken(token)
  }
  const { action } = await prompts.gistAction()
  if (action === 'create') await create()
  if (action === 'get') await get()
}

main()
