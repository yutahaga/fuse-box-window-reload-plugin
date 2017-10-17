import { WorkFlowContext } from 'fuse-box/dist/typings/core/WorkflowContext'
import { Plugin } from 'fuse-box/dist/typings/core/WorkflowContext'

export { connect } from './connect'

export interface WindowReloadPluginOptions {
  /** The port that the client JS connects to */
  port?: number | string
  uri?: string
}

/**
 * Window reload plugin
 */
export class WindowReloadPluginClass implements Plugin {
  public dependencies = ['fuse-box-window-reload-plugin'];
  public port: any = ''
  public uri: any = ''
  constructor (opts: WindowReloadPluginOptions = {}) {
    if (opts.port) {
      this.port = opts.port
    }
    if (opts.uri) {
      this.uri = opts.uri
    }
  }
  public init () {}

  public bundleEnd (context: WorkFlowContext) {
    context.source.addContent(
      `FuseBox.import('fuse-box-window-reload-plugin').connect(${this.port}, ${JSON.stringify(this.uri)})`
    )
  }
}

export const WindowReloadPlugin = (options?: WindowReloadPluginOptions) => {
  return new WindowReloadPluginClass(options)
}
