import { WorkFlowContext } from 'fuse-box/dist/typings/core/WorkflowContext';
import { Plugin } from 'fuse-box/dist/typings/core/WorkflowContext';
export { connect } from './connect';
export interface WindowReloadPluginOptions {
    port?: number | string;
    uri?: string;
}
export declare class WindowReloadPluginClass implements Plugin {
    dependencies: string[];
    port: any;
    uri: any;
    constructor(opts?: WindowReloadPluginOptions);
    init(): void;
    bundleEnd(context: WorkFlowContext): void;
}
export declare const WindowReloadPlugin: (options?: WindowReloadPluginOptions) => WindowReloadPluginClass;
