
import { _decorator, Component, Node, Enum } from 'cc';
import { e_goodsClassify } from './TypeEnumAndDelegete';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Struct
 * DateTime = Sat Feb 05 2022 13:49:46 GMT+0800 (中国标准时间)
 * Author = A_z0_9
 * FileBasename = Struct.ts
 * FileBasenameNoExtension = Struct
 * URL = db://assets/Scripts/Utils/Struct.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('Struct')
export class dic{
    @property({type:Enum(e_goodsClassify),visible:true})
    _key:e_goodsClassify;
    @property({type:Node,visible:true})
    _value:Node;
}
