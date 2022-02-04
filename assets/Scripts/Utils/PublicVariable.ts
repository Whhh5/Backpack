
import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('PublicVariable')
export class PublicVariable extends Component {
    static _instance:PublicVariable = null;
    onLoad(){
        PublicVariable._instance = this;
    }


    _mouseDownButton:Node = null;
    _tempPos:Vec3 = Vec3.ZERO;
    _tempParent:Node = null;


}
