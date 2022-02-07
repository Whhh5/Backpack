
import { _decorator, Component, Node, input, Input, EventTouch, EventMouse, labelAssembler, Label, tween, Vec3, Vec2 } from 'cc';
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
    
    @property({group:{name:"背包装备提示信息",id:"1",displayOrder:1},displayOrder:2,type:Node,visible:true})
    _information:Node;
    @property({group:{name:"背包装备提示信息",id:"1",displayOrder:3},displayOrder:2,visible:true})
    private t_isMove:boolean = false;


    set _isMove(value:boolean){
        UIManager._instance.t_isMove = value;
    }
    get _isMove(){
        return UIManager._instance.t_isMove;
    }
    

    @property({group:{name:"玩家属性",id:"2",displayOrder:1},displayOrder:1,visible:true})
    private t_bloodValue:number = 0;
    @property({group:{name:"玩家属性",id:"2",displayOrder:2},displayOrder:1,visible:true})
    private t_damageValue:number = 0;
    @property({group:{name:"玩家属性",id:"2",displayOrder:3},displayOrder:1,visible:true})
    private t_defenseValue:number = 0;
    @property({group:{name:"玩家属性",id:"2",displayOrder:4},displayOrder:1,visible:true})
    private t_money:number = 0;
    @property({group:{name:"相关UI组件",id:"2",displayOrder:1},displayOrder:2,type:Label,visible:true})
    private _bloodLabel:Label;
    @property({group:{name:"相关UI组件",id:"2",displayOrder:2},displayOrder:2,type:Label,visible:true})
    private _damageLabel:Label;
    @property({group:{name:"相关UI组件",id:"2",displayOrder:3},displayOrder:2,type:Label,visible:true})
    private _defenseLabel:Label;
    @property({group:{name:"相关UI组件",id:"2",displayOrder:4},displayOrder:2,type:Label,visible:true})
    private _moneyLabel:Label;


    @property({group:{name:"物品菜单",id:"3",displayOrder:1},displayOrder:1,type:GoodsMenus,visible:true})
    _goodsMenu:GoodsMenus;
    @property({group:{name:"UI提示框",id:"3",displayOrder:1},displayOrder:2,type:Node,visible:true})
    _hint:Node = null;
    
    get _bloodValue(){
        return UIManager._instance.t_bloodValue;
    }
    set _bloodValue(value:number){
        let tempValue:Vec2 = new Vec2(UIManager._instance.t_bloodValue,0);
        UIManager._instance.t_bloodValue = value;
        if(UIManager._instance.t_bloodValue >= 100){
            UIManager._instance.t_bloodValue = 100;
        }else if(UIManager._instance.t_bloodValue <= 0){
            UIManager._instance.t_bloodValue  = 0;
        }
        tween(tempValue)
            .delay(0.1)
            .to(1,new Vec3(UIManager._instance.t_bloodValue,0),{"onUpdate":(target:Vec3,ratio:number)=>{
                UIManager._instance._bloodLabel.string = tempValue.x.toFixed(3);
            },"onComplete":()=>{
                UIManager._instance._bloodLabel.string = tempValue.x.toFixed(0);
            }})
            .union()
            .repeat(1)
            .start()
    }

    get _damageValue(){
        return UIManager._instance.t_damageValue;
    }
    set _damageValue(value:number){
        let tempValue:Vec2 = new Vec2(UIManager._instance.t_damageValue,0);
        UIManager._instance.t_damageValue = value;
        if(UIManager._instance.t_damageValue >= 100){
            UIManager._instance.t_damageValue = 100;
        }else if(UIManager._instance.t_damageValue <= 0){
            UIManager._instance.t_damageValue  = 0;
        }
        tween(tempValue)
            .delay(0.1)
            .to(1,new Vec3(UIManager._instance.t_damageValue,0),{"onUpdate":(target:Vec3,ratio:number)=>{
                UIManager._instance._damageLabel.string = tempValue.x.toFixed(3);
            },"onComplete":()=>{
                UIManager._instance._damageLabel.string = tempValue.x.toFixed(0);
            }})
            .union()
            .repeat(1)
            .start()
    }


    get _defenseValue(){
        return UIManager._instance.t_defenseValue;
    }
    set _defenseValue(value:number){
        let tempValue:Vec2 = new Vec2(UIManager._instance.t_defenseValue,0);
        UIManager._instance.t_defenseValue = value;
        if(UIManager._instance.t_defenseValue >= 100){
            UIManager._instance.t_defenseValue = 100;
        }else if(UIManager._instance.t_defenseValue <= 0){
            UIManager._instance.t_defenseValue  = 0;
        }
        tween(tempValue)
            .delay(0.1)
            .to(1,new Vec3(UIManager._instance.t_defenseValue,0),{"onUpdate":(target:Vec3,ratio:number)=>{
                UIManager._instance._defenseLabel.string = tempValue.x.toFixed(3);
            },"onComplete":()=>{
                UIManager._instance._defenseLabel.string = tempValue.x.toFixed(0);
            }})
            .union()
            .repeat(1)
            .start()
    }

    get _money(){
        return UIManager._instance.t_money;
    }
    set _money(value:number){
        let tempValue:Vec2 = new Vec2(UIManager._instance.t_money,0);
        UIManager._instance.t_money = value;
        if(UIManager._instance.t_money >= 1000){
            UIManager._instance.t_money = 1000;
        }else if(UIManager._instance.t_money <= 0){
            UIManager._instance.t_money  = 0;
        }
        tween(tempValue)
            .delay(0.1)
            .to(1,new Vec3(UIManager._instance.t_money,0),{"onUpdate":(target:Vec3,ratio:number)=>{
                UIManager._instance._moneyLabel.string = tempValue.x.toFixed(3);
            },"onComplete":()=>{
                UIManager._instance._moneyLabel.string = tempValue.x.toFixed(0);
            }})
            .union()
            .repeat(1)
            .start()
    }





    
    

    initialization(thisTs:UIManager){
        UIManager._instance._bloodValue = UIManager._instance._bloodValue;
        UIManager._instance._damageValue = UIManager._instance._damageValue;
        UIManager._instance._defenseValue = UIManager._instance._defenseValue;
        
        for(let i=0;i<thisTs._backList.length;i++){
            thisTs._dic[thisTs._backList[i]._key] = thisTs._backList[i]._value;
        }
    }
}

