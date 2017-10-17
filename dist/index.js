"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connect_1 = require("./connect");
exports.connect = connect_1.connect;
class WindowReloadPluginClass {
    constructor(opts = {}) {
        this.dependencies = ['fuse-box-window-reload-plugin'];
        this.port = '';
        this.uri = '';
        if (opts.port) {
            this.port = opts.port;
        }
        if (opts.uri) {
            this.uri = opts.uri;
        }
    }
    init() { }
    bundleEnd(context) {
        context.source.addContent(`FuseBox.import('fuse-box-window-reload-plugin').connect(${this.port}, ${JSON.stringify(this.uri)})`);
    }
}
exports.WindowReloadPluginClass = WindowReloadPluginClass;
exports.WindowReloadPlugin = (options) => {
    return new WindowReloadPluginClass(options);
};
