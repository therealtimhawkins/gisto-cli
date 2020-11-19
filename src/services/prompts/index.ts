import inquirer from 'inquirer'
import { Gists } from '@/services/gist/gist.types'

export const getToken = () => {
  return inquirer.prompt({
    name: 'token',
    type: 'input',
    message:
      ' Can\'t find a github token... \n  Head to https://github.com/settings/tokens to generate a token and enter it here:'
  })
}

export const gistAction = () => {
  return inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What action do you want to take?',
    choices: ['get', 'create']
  })
}

export const gistName = () => {
  return inquirer.prompt({
    name: 'name',
    type: 'input',
    message: "What do you want to name your gist?"
  })
}

export const search = () => {
  return inquirer.prompt({
    name: 'term',
    type: 'input',
    message: "Enter a search term to find a gist..."
  })
}

export const getGist = async (
  choices: Array<string>,
  gists: Array<Gists.Gist>
) => {
  const { choice } = await inquirer.prompt({
    name: 'choice',
    type: 'list',
    message: 'Which gist do you want to copy?',
    choices
  })
  const index = choices.indexOf(choice)
  return gists[index]
}
