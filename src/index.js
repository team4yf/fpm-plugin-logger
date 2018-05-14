import _ from 'lodash'
import log4js from 'log4js'

export default {
  bind: (fpm) => {
    // Run When Server Init
    fpm.registerAction('INIT', () => {
      const c = _.assign({
          appenders: {
            app: { type: 'dateFile', filename: 'logs/app.log', pattern: '.yyyy-MM-dd-hh', compress: true }
          },
          categories: {
            default: { appenders: [ 'app' ], level: 'error'}
          }
        }, fpm.getConfig('log4js'))
        log4js.configure(c);
        fpm.logger = log4js.getLogger("app");
    })

    fpm.registerAction('BEFORE_SERVER_START', () => {
      fpm.logger.log('Run BEFORE_SERVER_START Actions')
    })

  }
}
