"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fuse_loader_1 = require("fuse-box/modules/fuse-loader");
const fusebox_websocket_1 = require("fuse-box/modules/fusebox-websocket");
const Client = fusebox_websocket_1.SocketClient;
exports.connect = (port, uri) => {
    if (fuse_loader_1.Loader.isServer) {
        return;
    }
    port = port || window.location.port;
    let client = new Client({
        port,
        uri
    });
    client.connect();
    client.on('window-reload', error => {
        console.log('aaaaaaaaaaaaaaaa');
        return window.location.reload();
    });
};
