import { createServer } from 'http'

function main(): void {
  const server = createServer((_, res) => {
    res.end('response')
  })

  server.listen(3000, () => console.log('listening on 3000'))
}

function fatal(err: Error, promise?: Promise<any>): never {
  console.error(err, promise ?? '')
  process.exit(1)
}

process.on('unhandledRejection', fatal)
process.on('uncaughtException', fatal)
main()
