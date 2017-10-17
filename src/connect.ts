import { Loader as FuseBox } from 'fuse-box/modules/fuse-loader'
import { SocketClient } from 'fuse-box/modules/fusebox-websocket'

const Client: typeof SocketClient = SocketClient

export const connect = (port: string, uri: string) => {
  if (FuseBox.isServer) {
    return
  }
  port = port || window.location.port
  let client = new Client({
    port,
    uri
  })
  client.connect()

  client.on('window-reload', error => {
    console.log('aaaaaaaaaaaaaaaa')
    return window.location.reload()
  })
}
