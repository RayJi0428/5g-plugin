import { join } from 'path';
module.paths.push(join(Editor.App.path, 'node_modules'));


/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    findCustomComponentsMethod() {
        console.log('開始分析場景-----------------------------------------------------------------------------');

        const { director, Node, Component } = require('cc');

        director.getScene().walk((node: any) => {
            if (node.getPathInHierarchy().includes('Editor') === true) return;
            let components = node.getComponents(Component);
            let xxx = ['UITransform', 'Widget', 'AudioSource', 'Sprite', 'Mask',
                'Canvas', 'Skeleton', 'Label', 'Animation', 'UIOpacity', 'ScrollView',
                'LabelOutline', 'EditBox', 'Graphics', 'ScrollBar', 'Camera'
            ];
            components.forEach((component: any) => {
                if (xxx.includes(component.constructor.name) === false) {
                    if (component.constructor.name == 'Button') {
                        if (component.clickEvents.length > 0) {
                            console.warn(`[Button] uuid->{node(${node.uuid})}／name->${node.name}／class->${component.constructor.name}／path->${node.getPathInHierarchy()}`);
                        }
                    }
                    else {
                        console.log(`[Component] uuid->{node(${node.uuid})}／name->${node.name}／class->${component.constructor.name}／path->${node.getPathInHierarchy()}`);
                    }
                }
            })
        })
        console.log('場景分析完畢-----------------------------------------------------------------------------');
    }
};

/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
export function load() {
}

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export function unload() { }
