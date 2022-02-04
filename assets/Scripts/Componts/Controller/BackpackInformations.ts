
import { _decorator, Component, Node, spriteAssembler, Sprite, Color, tween, color, TypeScript, Vec3, input, view, BASELINE_RATIO, UIOpacity, Input, EventKeyboard, KeyCode } from 'cc';
import { MouseControler } from '../../Utils/MouseControler';
import { PublicVariable } from '../../Utils/PublicVariable';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BackpackInformations
 * DateTime = Tue Feb 01 2022 23:02:04 GMT+0800 (中国标准时间)
 * Author = A_z0_9
 * FileBasename = BackpackInformations.ts
 * FileBasenameNoExtension = BackpackInformations
 * URL = db://assets/Scripts/Componts/Controller/BackpackInformations.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('BackpackInformations')
export class BackpackInformations extends Component {
    @property({group:{name:" ",id:"1",displayOrder:1},type:Sprite,visible:true})
    _bj:Sprite;

    @property({group:{name:" ",id:"1"},displayOrder:1,range:[0,1],visible:true})
    _speed:number = 0;

    _isMove:boolean = false;
    start(){
        input.on(Input.EventType.KEY_DOWN,(event:EventKeyboard)=>{
            switch(event.keyCode){
                case KeyCode.DIGIT_5:
                    this.setInformationMove(this,true);
                    break;
                case KeyCode.DIGIT_6:
                    this.setInformationMove(this,false);
                    break;
            }
        },this);
    }

    update (deltaTime: number) {
        if(this._isMove){
            this.move(this,new Vec3(MouseControler.v_instance.v2.x - view.getVisibleSizeInPixel().x/2,MouseControler.v_instance.v2.y - view.getVisibleSizeInPixel().y/2,0),this._speed);
        }
        else{

        }
    }

    move(self:BackpackInformations,pos:Vec3,speed:number){
        self.node.position = Vec3.lerp(new Vec3(),self.node.position,pos,speed);
    }

    setInformationMove(self:BackpackInformations,value:boolean){
        self._isMove = value;
        switch(value){
            case true:
                self.setColorA(self,255);
                break;
            case false:
                self.setColorA(self,0);
                break;
            default:
                self.setColorA(self,0);
                break;
        }
    }

    setColorA(self:BackpackInformations,to:number){
        tween(self.getComponent(UIOpacity))
            .delay(0.1)
            .to(0.5,{opacity:to},{"onComplete":()=>{console.log("1");}})
            .union()
            .repeat(1)
            .start()
    }
}