import * as log4js from 'log4js'

log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '%d\t| %p\t| %m%n',
      },
    },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'debug',
    },
  },
})

const eenie = () => log4js.getLogger().debug('meenie')

export default eenie
