
import { _decorator, Component, Node, EventMouse, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = InputButton
 * DateTime = Tue Feb 01 2022 15:58:32 GMT+0800 (中国标准时间)
 * Author = A_z0_9
 * FileBasename = InputButton.ts
 * FileBasenameNoExtension = InputButton
 * URL = db://assets/Scripts/Utils/InputButton.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('NodeInputButton')
export class NodeInputButton extends Component {
    // @property({group:{name:"Item",id:"1",displayOrder:1},visible:true})
    // _index:number = 0

    tempPos:Vec3;
    start(){
        this.node.on(Node.EventType.MOUSE_DOWN,(event:EventMouse)=>{
            /**
             * 1.记录子对象的索引，Transform组件，
             * 2.跟随鼠标移动
             * 3.判断最终鼠标触碰到的对象
             * 4.判断：空：返回原来位置，else 交换位置
             */
            switch(event.getButton()){
                case 0:
                    this.tempPos = this.node.getWorldPosition(new Vec3());
                    console.log("1");
                    break;
                case 1:
                    break;
                case 2:
                    break;
                default:
                    break;
            }
        },this.node);
        this.node.on(Node.EventType.MOUSE_MOVE,(event:EventMouse)=>{
            switch(event.getButton()){
                case 0:
                    this.node.worldPosition = Vec3.lerp(new Vec3(),this.node.getWorldPosition(new Vec3()),new Vec3(event.getUILocationX(),event.getUILocationY(),0),1);
                    console.log("2");
                    break;
                case 1:
                    break;
                case 2:
                    break;
                default:
                    break;
            }
        },this.node);
        this.node.on(Node.EventType.MOUSE_UP,(event:EventMouse)=>{
            switch(event.getButton()){
                case 0:
                    if(true){
    
                    }
                    break;
                case 1:
                    break;
                case 2:
                    break;
                default:
                    break;
            }
        },this.node);

    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
