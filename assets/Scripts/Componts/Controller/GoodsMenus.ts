
import { _decorator, Component, Node, tween, UIOpacity, Vec3, view, Sprite } from 'cc';
import { NodeInputButton } from '../../Model/NodeInputButton';
import { IGoods } from '../../Utils/Interfaces';
import { MouseControler } from '../../Utils/MouseControler';
import { PublicVariable } from '../../Utils/PublicVariable';
import { e_goods } from '../../Utils/TypeEnumAndDelegete';
import { UIManager } from '../Singleton/UIManager';
import { Hint } from './Hint';
const { ccclass, property } = _decorator;
@ccclass('GoodsMenus')
export class GoodsMenus extends Component {
    _tempGoodsItem:IGoods = null;
    _tempImage:Node = null;
    _tempImageParent:Node = null;

    start(){
        this.heid(this,0);
    }
    show(self:GoodsMenus,reach:number){
        tween(self.getComponent(UIOpacity))
            .delay(0)
            .to(0.5,{opacity:reach},{"onStart":()=>{
                let tempPosVec3:Vec3 = new Vec3(Vec3.subtract(new Vec3(),new Vec3(MouseControler.v_instance.v_moveSceenMoveX,MouseControler.v_instance.v_moveSceenMoveY,0),Vec3.multiply(new Vec3(),new Vec3(view.getVisibleSize().x,view.getVisibleSize().y,0),new Vec3(0.5, 0.5, 0.5))));
                this.node.position = tempPosVec3;
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
            },"onStart":()=>{
                
                this._tempGoodsItem = null;
            }})
            .union()
            .repeat(1)
            .start()
    }

    cancelButton(){
        UIManager._instance._goodsMenu.heid(UIManager._instance._goodsMenu,0);
    }

    useButton(){
        if(this._tempGoodsItem != null){
            switch(this._tempGoodsItem._type){
                case e_goods.weapon:
                        UIManager._instance._damageValue += this._tempGoodsItem._relevance;
                    break;
                case e_goods.shield:
                    UIManager._instance._defenseValue += this._tempGoodsItem._relevance;
                    break;
                case e_goods.potion:
                    UIManager._instance._bloodValue += this._tempGoodsItem._relevance;
                    break;
            }
            this._tempImage.getChildByName("iconSprite").getComponent(Sprite).spriteFrame = null;
            this._tempGoodsItem = null;
            this._tempImage = null;

            this._tempImageParent.getComponent(NodeInputButton)._gooditemp = null;
            PublicVariable._instance._mouseDownButton = null;

        }else{
            console.log("使用时找不到物品!");
        }
        UIManager._instance._goodsMenu.heid(UIManager._instance._goodsMenu,0);
    }

    sellButton(){
        if(this._tempGoodsItem != null){
            UIManager._instance._money += this._tempGoodsItem._sellValue;
            
            this._tempImage.getChildByName("iconSprite").getComponent(Sprite).spriteFrame = null;
            this._tempGoodsItem = null;
            this._tempImage = null;

            this._tempImageParent.getComponent(NodeInputButton)._gooditemp = null;
            PublicVariable._instance._mouseDownButton = null;
        }else{
            console.log("使用时找不到物品!");
        }
        UIManager._instance._goodsMenu.heid(UIManager._instance._goodsMenu,0);
    }

    unused(){
        UIManager._instance._hint.getComponent(Hint).show();
    }
}