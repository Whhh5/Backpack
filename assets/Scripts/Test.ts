
import { _decorator, Component, Node, input, Input, EventKeyboard, KeyCode, Vec3 } from 'cc';
import { UIManager } from './Componts/Singleton/UIManager';
import { PublicVariable } from './Utils/PublicVariable';
const { ccclass, property } = _decorator;
 
@ccclass('Test')
export class Test extends Component {

    static v1:Vec3 = Vec3.ZERO;
    static v2:Vec3 = Vec3.ONE;
    onload(){
        console.log(UIManager._instance._tempParent.name);
    }

    start () {
        input.on(Input.EventType.KEY_DOWN,(event:EventKeyboard)=>{
            switch(event.keyCode){
                case KeyCode.DIGIT_1:
                    break;
                case KeyCode.DIGIT_2:
                    this.node.position = Vec3.add(new Vec3,this.node.position,Vec3.ONE);
                    console.log(this.node.position);
                    break;
                case KeyCode.DIGIT_3:
                    break;
                case KeyCode.DIGIT_4:
                    break;
                default:
                    break;
            }
        },this);
    }
}