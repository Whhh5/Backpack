
import { _decorator, Component, tween, UIOpacity, Vec3, view } from 'cc';
import { UIManager } from '../Singleton/UIManager';
const { ccclass, property } = _decorator;
 
@ccclass('BackpackButton')
export class BackpackButton extends Component {
    cutCombat(){
        UIManager._instance._backpacks[0].position = new Vec3(0,0,0);
        UIManager._instance._backpacks[1].position = Vec3.multiply(new Vec3(),new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0),new Vec3(2, 2, 2));
        tween(UIManager._instance._backpacks[1].getComponent(UIOpacity))
            .to(1,{opacity:0},{"onComplete":()=>{
                // let tempPosVec3:Vec3 = Vec3.multiply(new Vec3(),new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0),new Vec3(2, 2, 2));
                // UIManager._instance._backpacks[1].position = tempPosVec3;
            }})
            .union()
            .repeat(1)
            .start()
        tween(UIManager._instance._backpacks[0].getComponent(UIOpacity))
            .to(1,{opacity:255},{"onStart":()=>{
                // let tempPosVec3:Vec3 = new Vec3(0,0,0);
                // UIManager._instance._backpacks[0].position = tempPosVec3;
            }})
            .union()
            .repeat(1)
            .start()
            //位置
        tween(UIManager._instance._backpacks[1])
            .to(1,{position:Vec3.multiply(new Vec3(),new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0),new Vec3(2, 2, 2))})
            .union()
            .repeat(1)
            .start()
        tween(UIManager._instance._backpacks[0])
            .to(1,{position:new Vec3(0,0,0)})
            .union()
            .repeat(1)
            .start()
            
    }
    cutConsumables(){
        UIManager._instance._backpacks[1].position = new Vec3(0,0,0);
        UIManager._instance._backpacks[0].position = Vec3.multiply(new Vec3(),new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0),new Vec3(2, 2, 2));

        tween(UIManager._instance._backpacks[0].getComponent(UIOpacity))
            .to(1,{opacity:0},{"onComplete":()=>{
                // let tempPosVec3:Vec3 = Vec3.multiply(new Vec3(),new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0),new Vec3(2, 2, 2));
                // UIManager._instance._backpacks[0].position = tempPosVec3;
            }})
            .union()
            .repeat(1)
            .start()
        tween(UIManager._instance._backpacks[1].getComponent(UIOpacity))
            .to(1,{opacity:255},{"onStart":()=>{
                // let tempPosVec3:Vec3 = new Vec3(0,0,0);
                // UIManager._instance._backpacks[1].position = tempPosVec3;
            }})
            .union()
            .repeat(1)
            .start()

        //位置
        tween(UIManager._instance._backpacks[0])
            .to(1,{position:Vec3.multiply(new Vec3(),new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0),new Vec3(2, 2, 2))})
            .union()
            .repeat(1)
            .start()
        tween(UIManager._instance._backpacks[1])
            .to(1,{position:new Vec3(0,0,0)})
            .union()
            .repeat(1)
            .start()

    }
}