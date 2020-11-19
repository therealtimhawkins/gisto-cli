import { writeFile } from 'fs'
import { promisify } from 'util'
import env from '@/config/env.json'
const promiseWriteFile = promisify(writeFile)

export const addToken = async (token: string) => {
  env.token = token
  return await promiseWriteFile(
    __dirname + '/../../config/env.json',
    JSON.stringify(env),
    'utf8'
  )
}
