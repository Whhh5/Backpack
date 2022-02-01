
import { _decorator, Component, Node, input, Input, EventTouch, EventMouse } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UIManager
 * DateTime = Tue Feb 01 2022 15:32:17 GMT+0800 (中国标准时间)
 * Author = A_z0_9
 * FileBasename = UIManager.ts
 * FileBasenameNoExtension = UIManager
 * URL = db://assets/Scripts/Componts/Singleton/UIManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('UIManager')
export class UIManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
        this.node.on(Node.EventType.MOUSE_DOWN,this.mouseDown,this.node);

    }
    mouseDown(event:EventMouse){
        // switch(event.){

        // }
        console.log(event.getButton());
    }

}
