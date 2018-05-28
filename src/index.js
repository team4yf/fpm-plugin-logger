import _ from 'lodash'
import log4js from 'log4js'

export default {
  bind: (fpm) => {
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
  }
}
