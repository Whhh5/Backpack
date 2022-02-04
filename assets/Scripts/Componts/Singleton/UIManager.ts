
import { _decorator, Component, Node, input, Input, EventTouch, EventMouse } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('UIManager')
export class UIManager extends Component {
    static _instance:UIManager = null;
    onLoad(){
        UIManager._instance = this;
    }
    
    @property({group:{name:"装备提示信息",id:"1",displayOrder:1},type:Node,visible:true})
    _information:Node;
    @property({group:{name:"装备提示信息",id:"1",displayOrder:2},type:Node,visible:true})
    _tempParent:Node = null;

    start () {
        // [3]
        // this.node.on(Node.EventType.MOUSE_DOWN,this.mouseDown,this.node);

    }
}
