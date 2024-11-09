import { exec } from 'child_process'
import simpleGit from 'simple-git'

// Funzione per eseguire un comando shell
const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
        return
      }
      resolve(stdout || stderr)
    })
  })
}

// Funzione principale per il deploy
const deploy = async () => {
  try {
    console.log('Formattazione del codice...')
    await executeCommand('npm run format')

    console.log('Lint del codice...')
    await executeCommand('npm run lint')

    console.log('Build del progetto...')
    await executeCommand('npm run build')

    // Aggiungi e commetti le modifiche su GitHub
    const git = simpleGit()
    await git.add('.')
    await git.commit('Auto-deploy commit')
    await git.push('origin', 'main') // Assumi che il branch principale sia 'main'

    console.log('Modifiche pushate su GitHub.')

    // Deploy su Vercel
    await executeCommand('vercel --prod')

    console.log('Deploy su Vercel completato.')
  } catch (error) {
    console.error('Errore durante il deploy:', error)
  }
}

deploy()
