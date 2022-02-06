
import { _decorator, Component, Node, input, Input, EventKeyboard, KeyCode, Vec3 } from 'cc';
import { UIManager } from './Componts/Singleton/UIManager';
import { PublicVariable } from './Utils/PublicVariable';
const { ccclass, property,executeInEditMode  } = _decorator;
 
@ccclass('Test')
@executeInEditMode(true)
export class Test extends Component {

    static v1:Vec3 = Vec3.ZERO;
    static v2:Vec3 = Vec3.ONE;
    onload(){
        console.log(UIManager._instance._tempParent.name);
    }

    t:number = 0;

    get a(){
        return this.t;
    }
    set a(value:number){
        this.t = value;
    }

    start () {
        input.on(Input.EventType.KEY_DOWN,(event:EventKeyboard)=>{
            switch(event.keyCode){
                case KeyCode.DIGIT_1:
                    UIManager._instance._goodsMenu.show(UIManager._instance._goodsMenu,255);
                    break;
                case KeyCode.DIGIT_2:
                    UIManager._instance._goodsMenu.heid(UIManager._instance._goodsMenu,0);
                    break;
                case KeyCode.DIGIT_3:
                    break;
                case KeyCode.DIGIT_4:
                    break;
                default:
                    break;
            }
        },this);

        //----------------------------------测试区域
        console.log("4");
    }


    addSword(){
        
    }
    addShield(){
        
    }
    addPotion(){
        
    }
}