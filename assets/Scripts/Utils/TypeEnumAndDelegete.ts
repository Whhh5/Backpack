import { IBlood } from "../Interface/Interface";

export enum e_levelStatus{
    stop = 0,//暂停
    operation,//运行
    onLoading,//加载界面
    suspend,//继续
    UIInterface,//ui操作中
    finish,//结束
}

export enum e_playerStatus{
    mvoe = 0,
    jeep,
    attack,
}













export interface IDelegate{
    
}

export interface IDelegate_Void_Void{
    ({}):void;
}

export interface IDelegate_IBlood_Number_Void{
    ({blood:IBlood,value:number}):void;
}

export function executeDelegate(arr:Array<Function>,value:{}):void{
    for(let i:number = 0;i < arr.length;i++){
        arr[i](value);
    }
}

export function removeDelegate(arr:Array<Function>,value:Function):boolean{
    let index:number = arr.indexOf(value);
    if(index != -1){
        arr = arr.splice(index,1);
        return true;
    }
    else{
        return false;
    }
}
