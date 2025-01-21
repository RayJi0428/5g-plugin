"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = void 0;
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
exports.methods = {
    findCustomComponents() {
        //點擊menu的按鈕(呼叫scene.ts內的方法)
        const options = {
            name: "5g-plugin",
            method: 'findCustomComponentsMethod',
            args: []
        };
        // result: {}
        Editor.Message.request('scene', 'execute-scene-script', options);
    }
};
/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
function load() { }
exports.load = load;
/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
function unload() { }
exports.unload = unload;
