# fuse-box-window-reload-plugin

## Requirements

* [fuse-box-https-server](https://github.com/yutahaga/fuse-box-https-server)

## Install

```sh
yarn add https://github.com/yutahaga/fuse-box-window-reload-plugin.git -D
```

## Usage

```ts
import { FuseBox } from 'fuse-box'
import { serve } from 'fuse-box-https-server'
import { WindowReloadPlugin } from 'fuse-box-window-reload-plugin'

let server

const fuse = FuseBox.init({
  /* your options */
  plugins: [
    WindowReloadPlugin({
      port: number,
      uri?: string
    })
  ]
})

//
// Start HTTPS & WebSocket Server
//

const app = fuse.bundle('app')
let socketServer

fuse.producer.sharedEvents.on('SocketServerReady', server => {
  socketServer = server
})

serve(
  fuse,
  {
    port?: number
    root?: string
    host?: string
    key?: string
    cert?: string
    backlog?: number
    emitter?: HotReloadEmitter
    httpsServer?: boolean
    socketURI?: string
    hmr?: boolean
    open?: boolean | string
    proxy?: {
      [key: string]: {
        target: string
        changeOrigin?: boolean
        pathRewrite: { [key: string]: string }
        router: { [key: string]: string }
      }
    }
  },
  () => {
    app.hmr()
  }
)

//
// Watch API Task
//
Sparky.task('watch:api', () => {
  return Sparky.watch('**/*.+(php)', { base?: string })
    .completed(() => {
      if (socketServer) {
        socketServer.send('window-reload')
      }
    });
});

//
// Default Task
//
Sparky.task('default', ['dev', 'watch:api'], () => {
  app.watch()
    .instructions(`>scripts/main.js`)

  fuse.run()
})
```
