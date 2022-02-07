
import { _decorator, Component, Node, tween, UIOpacity, Tween, Vec3, View, view } from 'cc';
import { MouseControler } from '../../Utils/MouseControler';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Hint
 * DateTime = Mon Feb 07 2022 12:40:11 GMT+0800 (中国标准时间)
 * Author = A_z0_9
 * FileBasename = Hint.ts
 * FileBasenameNoExtension = Hint
 * URL = db://assets/Scripts/Componts/Controller/Hint.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('Hint')
export class Hint extends Component {
    show(){
        tween(this.node.getComponent(UIOpacity))
            .to(1,{opacity:255},{"onStart":()=>{
                //设置位置
                this.node.position = new Vec3(0,0,0);
            },"onComplete":()=>{
                tween(this.node.getComponent(UIOpacity))
                    .to(1,{opacity:0},{"onComplete":()=>{
                    //设置位置
                    this.node.position = new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0);
                    }})
                    .union()
                    .repeat(1)
                    .start()
            }})
            .union()
            .repeat(1)
            .start()
    }

    // move():Tween<Node>{
    //     let tempTween = tween(this.node)
    //         .to()

    //     return tempTween;
    // }
}
