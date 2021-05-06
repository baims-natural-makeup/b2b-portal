const { createServer } = require('http')

function main() {
  const server = createServer((_, res) => {
    res.end('response')
  })

  server.listen(3000, () => console.log('listening on 3000'))
}

function fatal(err, promise) {
  console.error(err, promise ?? '')
  process.exit(1)
}

process.on('unhandledRejection', fatal)
process.on('uncaughtException', fatal)
main()
