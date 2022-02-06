import { Color, Sprite, SpriteFrame } from "cc";
import { e_goods, e_goodsClassify } from "./TypeEnumAndDelegete";

export interface IGoods{
    _name:string;
    _relevance:number;
    _classify:e_goodsClassify;
    _type:e_goods;
    _buyValue:number;
    _sellValue:number;
    _icon:SpriteFrame;
    _color:Color;
    _information:string;
    use(this:IGoods):void;
    sell(this:IGoods):void;
}