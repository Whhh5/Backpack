
import { _decorator, Component, Node, input, Input, color, Color, Sprite } from 'cc';
import { NodeInputButton } from '../../Model/NodeInputButton';
import { IGoods } from '../../Utils/Interfaces';
import { e_goods, e_goodsClassify } from '../../Utils/TypeEnumAndDelegete';
import { LivingExample_Items } from '../Singleton/LivingExample_Items';
import { UIManager } from '../Singleton/UIManager';
const { ccclass, property } = _decorator;
 
@ccclass('WordLinkBackpack')
export class WordLinkBackpack extends Component {
    
    addGoods(){
        let goods:IGoods = LivingExample_Items._instance._sword;

        let backpack:Node = UIManager._instance._dic[goods._classify];
        for(let i=0;i<backpack.getChildByName("Layout").children.length;i++){
            if(backpack.getChildByName("Layout").children[i].getComponent(NodeInputButton)._iconSprite.spriteFrame == null){
                backpack.getChildByName("Layout").children[i].getComponent(NodeInputButton)._iconSprite.spriteFrame = goods._icon;
                backpack.getChildByName("Layout").children[i].getComponent(NodeInputButton)._gooditemp = goods;
                console.log("获取装备：" + goods._name);
                return;
            }
            console.log("当前第" +"   "+ i + " 个装备栏已经有装备");
        }
        console.log("装备栏已满");
    }

    putInBackpack(){
        
    }
}