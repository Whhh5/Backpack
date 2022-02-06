
import { _decorator, Component, Node, Sprite, Color, color, Enum, SpriteFrame } from 'cc';
import { IGoods } from '../../Utils/Interfaces';
import { e_goods, e_goodsClassify } from '../../Utils/TypeEnumAndDelegete';
const { ccclass, property } = _decorator;

@ccclass('Shield_Items')
export class Shield_Items implements IGoods{
    @property({visible:true})
    _name:string = "";
    @property({visible:true})
    _relevance:number = 0;
    @property({type:Enum(e_goodsClassify),displayOrder:3,visible:true})
    _classify: e_goodsClassify;
    @property({type:Enum(e_goods),visible:true})
    _type:e_goods;
    @property({visible:true,tooltip:"购买价值"})
    _buyValue:number = 0;
    @property({visible:true,tooltip:"出售价值"})
    _sellValue:number = 0;

    @property({type:SpriteFrame,visible:true})
    _icon:SpriteFrame;
    @property({type:Color,visible:true})
    _color:Color;
    @property({ visible:true,multiline:true})
    _information:string = "";

    use(this:Shield_Items): void{

    }
    sell(this:Shield_Items): void {
        
    }
    
}