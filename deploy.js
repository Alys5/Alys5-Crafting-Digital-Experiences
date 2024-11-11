import { execSync } from 'child_process'
import simpleGit from 'simple-git'
import inquirer from 'inquirer'

const runCommand = (command) => execSync(command, { stdio: 'inherit' })

const deploy = async () => {
  try {
    console.log('Formatting code...')
    runCommand('npm run format')

    console.log('Linting code...')
    runCommand('npm run lint')

    console.log('Building project...')
    runCommand('npm run build')

    const git = simpleGit()
    await git.add('.')

    const { message } = await inquirer.prompt([
      {
        type: 'input',
        name: 'message',
        message: 'Commit message:',
        default: 'Auto-deploy commit',
      },
    ])
    await git.commit(message)
    await git.push('origin', 'develop')

    console.log('Changes pushed to develop branch.')

    await git.checkout('main')
    await git.merge('develop')
    await git.push('origin', 'main')

    console.log('Changes merged to main branch.')

    console.log('Deploying to Vercel...')
    runCommand('vercel --prod')

    console.log('Deploy to Vercel complete.')
  } catch (error) {
    console.error('Error during deploy:', error)
  }
}

deploy()
