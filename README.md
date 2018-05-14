## FPM-PLUGIN-LOGGER
用于输出日志的插件

### Install
```bash
yarn add fpm-plugin-logger
```

### Useage

config in config.json
```javascript
{
    //...
    log4js:{
        appenders: {
        app: { type: 'dateFile', filename: 'logs/app.log', pattern: '.yyyy-MM-dd-hh', compress: true }
        },
        categories: {
        default: { appenders: [ 'app' ], level: 'error'}
        }
    }
    //...
}
```