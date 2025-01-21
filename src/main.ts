import { ExecuteSceneScriptMethodOptions } from "../@types/packages/scene/@types/public";

/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    findCustomComponents() {
        //點擊menu的按鈕(呼叫scene.ts內的方法)
        const options: ExecuteSceneScriptMethodOptions = {
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
export function load() { }

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export function unload() { }