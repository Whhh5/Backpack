
import { _decorator, Component, Node, input, Input, EventTouch, EventMouse, labelAssembler, Label } from 'cc';
import { dic } from '../../Utils/Struct';
import { e_goodsClassify } from '../../Utils/TypeEnumAndDelegete';
import { BackpackGoodsInformations } from '../Controller/BackpackGoodsInformations';
import { GoodsMenus } from '../Controller/GoodsMenus';
const { ccclass, property } = _decorator;
@ccclass('UIManager')
export class UIManager extends Component {
    static _instance:UIManager = null;
    onLoad(){
        UIManager._instance = this;

        this.initialization(this);
    }

    @property({group:{name:"背包列表",id:"1",displayOrder:1},displayOrder:1,type:Array(Node),visible:true})
    _backpacks:Array<Node> = new Array<Node>();
    @property({group:{name:"背包列表",id:"1",displayOrder:1},type:Array(dic),displayOrder:1,visible:true})
    private _backList:Array<dic> = new Array<dic>();
    _dic:Map<e_goodsClassify,Node> = new Map<e_goodsClassify,Node>();
    // @property({group:{name:"背包列表",id:"1",displayOrder:2},type:Node,visible:true})
    // _tempParent:Node = null;
    @property({group:{name:"背包装备提示信息",id:"1",displayOrder:1},displayOrder:2,type:Node,visible:true})
    _information:Node;
    @property({group:{name:"背包装备提示信息",id:"1",displayOrder:2},displayOrder:2,type:Node,visible:true})
    _tempParent:Node = null;
    @property({group:{name:"背包装备提示信息",id:"1",displayOrder:3},displayOrder:2,visible:true})
    private t_isMove:boolean = false;
    set _isMove(value:boolean){
        UIManager._instance.t_isMove = value;
    }
    get _isMove(){
        return UIManager._instance.t_isMove;
    }
    

    @property({group:{name:"玩家属性",id:"2",displayOrder:1},displayOrder:1,visible:true})
    _bloodValue:number = 0;
    @property({group:{name:"玩家属性",id:"2",displayOrder:2},displayOrder:1,visible:true})
    _damageValue:number = 0;
    @property({group:{name:"玩家属性",id:"2",displayOrder:3},displayOrder:1,visible:true})
    _defenseValue:number = 0;
    @property({group:{name:"相关UI组件",id:"2",displayOrder:1},displayOrder:2,type:Label,visible:true})
    _bloodLabel:Label;
    @property({group:{name:"相关UI组件",id:"2",displayOrder:2},displayOrder:2,type:Label,visible:true})
    _damageLabel:Label;
    @property({group:{name:"相关UI组件",id:"2",displayOrder:3},displayOrder:2,type:Label,visible:true})
    _defenseLabel:Label;

    @property({group:{name:"物品菜单",id:"3",displayOrder:1},displayOrder:1,type:GoodsMenus,visible:true})
    _goodsMenu:GoodsMenus;
    

    initialization(thisTs:UIManager){
        for(let i=0;i<thisTs._backList.length;i++){
            thisTs._dic[thisTs._backList[i]._key] = thisTs._backList[i]._value;
        }
    }
}

