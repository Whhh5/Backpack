
import { _decorator, Component, Node } from 'cc';
import { Potion_Items } from '../Item/Potion_Items';
import { Shield_Items } from '../Item/Shield_Items';
import { Sword_Items } from '../Item/Sword_Items';

const { ccclass, property } = _decorator;
 
@ccclass('LivingExample_Items')
export class LivingExample_Items extends Component {
    static _instance:LivingExample_Items = null;
    onLoad(){
        LivingExample_Items._instance = this;
    }



    @property({group:{name:"生锈的剑",id:"1",displayOrder:1},type:Sword_Items,visible:true})
    _sword:Sword_Items = null;
    @property({group:{name:"生锈的盾牌",id:"1",displayOrder:2},type:Shield_Items,visible:true})
    _Shield:Shield_Items = null;
    @property({group:{name:"劣质的药水",id:"1",displayOrder:3},type:Potion_Items,visible:true})
    _potion:Potion_Items = null;
}
