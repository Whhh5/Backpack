
import { _decorator, Component, Node, spriteAssembler, Sprite, Color, tween, color, TypeScript, Vec3, input, view, BASELINE_RATIO, UIOpacity, Input, EventKeyboard, KeyCode, Label } from 'cc';
import { MouseControler } from '../../Utils/MouseControler';
import { UIManager } from '../Singleton/UIManager';
const { ccclass, property } = _decorator;
 
@ccclass('BackpackGoodsInformations')
export class BackpackGoodsInformations extends Component {
    @property({group:{name:" ",id:"1",displayOrder:1},type:Sprite,visible:true})
    _bj:Sprite;
    @property({group:{name:" ",id:"1",displayOrder:1},type:Label,visible:true})
    _informationString:Label;

    @property({group:{name:" ",id:"1"},displayOrder:1,range:[0,1],visible:true})
    _speed:number = 0;

    start(){
        
    }

    update (deltaTime: number) {
        if(UIManager._instance._isMove){
            this.move(this,new Vec3(MouseControler.v_instance.v2.x - view.getVisibleSizeInPixel().x/2,MouseControler.v_instance.v2.y - view.getVisibleSizeInPixel().y/2,0),this._speed);
        }
        else{

        }
    }

    move(self:BackpackGoodsInformations,pos:Vec3,speed:number){
        self.node.position = Vec3.lerp(new Vec3(),self.node.position,pos,speed);
    }

    setInformationMove(self:BackpackGoodsInformations,informationString:string,value:boolean){
        self._informationString.string = informationString;
        switch(value){
            case true:
                self.setOpacity(self,255);
                break;
            case false:
                self.setOpacity(self,0);
                break;
            default:
                self.setOpacity(self,0);
                break;
        }
    }

    setOpacity(self:BackpackGoodsInformations,to:number){
        tween(self.getComponent(UIOpacity))
            .delay(0.1)
            .to(0.5,{opacity:to},{"onComplete":()=>{}})
            .union()
            .repeat(1)
            .start()
    }
}