
import { _decorator, Component, Node, tween, UIOpacity, Vec3, view } from 'cc';
import { MouseControler } from '../../Utils/MouseControler';
import { UIManager } from '../Singleton/UIManager';
const { ccclass, property } = _decorator;
@ccclass('GoodsMenus')
export class GoodsMenus extends Component {
    show(self:GoodsMenus,reach:number){
        
        tween(self.getComponent(UIOpacity))
            .delay(0)
            .to(0.5,{opacity:reach},{"onStart":()=>{
                let tempPosVec3:Vec3 = new Vec3(Vec3.subtract(new Vec3(),new Vec3(MouseControler.v_instance.v_moveSceenMoveX,MouseControler.v_instance.v_moveSceenMoveY,0),Vec3.multiply(new Vec3(),new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0),new Vec3(0.5, 0.5, 0.5))));
                this.node.position = tempPosVec3;
                console.log(tempPosVec3 +"  "+self.node.position);
            }})
            .union()
            .repeat(1)
            .start()
    }

    heid(self:GoodsMenus,reach:number){
        tween(self.getComponent(UIOpacity))
            .delay(0)
            .to(0.5,{opacity:reach},{"onComplete":()=>{
                let tempPosVec3:Vec3 = Vec3.multiply(new Vec3(),new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0),new Vec3(2, 2, 2));
                this.node.position = tempPosVec3;
                console.log(tempPosVec3 +"  "+self.node.position);
            }})
            .union()
            .repeat(1)
            .start()
    }

    cancelButton(){
        UIManager._instance._goodsMenu.heid(UIManager._instance._goodsMenu,0);
    }
}