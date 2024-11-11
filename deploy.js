import { execSync } from 'child_process'
import simpleGit from 'simple-git'
import inquirer from 'inquirer'

const runCommand = (command) => execSync(command, { stdio: 'inherit' })

const deploy = async () => {
  try {
    // **Automated Testing**
    console.log('Running tests...')
    runCommand('npm test')

    // **Formatting and Linting**
    console.log('Formatting code...')
    runCommand('npm run format')

    console.log('Linting code...')
    runCommand('npm run lint')

    // **Building the Project**
    console.log('Building project...')
    runCommand('npm run build')

    // **Git Commit and Push to Develop**
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

    // **Merge to Main and Deploy to Vercel**
    await git.checkout('main')
    await git.merge(['develop', '-m', 'Merge develop into main'])
    await git.push('origin', 'main')

    console.log('Changes merged to main branch.')

    // **Consider using a CI/CD pipeline tool like Vercel's built-in one for automated deployment**
    console.log('Deploying to Vercel...')
    runCommand('vercel --prod')

    console.log('Deploy to Vercel complete.')
  } catch (error) {
    console.error('Error during deploy:', error)
  }
}

deploy()
