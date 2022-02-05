
import { _decorator, Component, Node, EventMouse, Vec3, view, debug, tween, Tween } from 'cc';
import { UIManager } from '../Componts/Singleton/UIManager';
import { MouseControler } from '../Utils/MouseControler';
import { PublicVariable } from '../Utils/PublicVariable';
const { ccclass, property } = _decorator;
 a:Node;
@ccclass('NodeInputButton')
export class NodeInputButton extends Component {
    @property({type:Node})
    icon:Node;

    _speed:number = 0.5;
    _isMove:boolean = false;
    _tempPos:Vec3 = Vec3.ZERO;

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
                    if(PublicVariable._instance._mouseDownButton == null){
                        PublicVariable._instance._mouseDownButton = this.icon;
                        PublicVariable._instance._tempPos = this.icon.position;
                        PublicVariable._instance._tempParent = this.icon.getParent();

                        let _tempPos:Vec3 = Vec3.add(new Vec3(),this.node.position,this.node.parent.position);
                        this.icon.setParent(UIManager._instance._tempParent);
                        this.icon.setPosition(_tempPos);
                        if(this.icon.getComponent(GridIconTemp) != null){
                            console.log("显示组件");
                            this.icon.getComponent(GridIconTemp).enabled = true;
                        }else{
                            console.log("添加组件");
                            this.icon.addComponent(GridIconTemp);
                        }
                        
                        this._isMove = true;
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
        this.node.on(Node.EventType.MOUSE_MOVE,(event:EventMouse)=>{
            switch(event.getButton()){
                case 0:
                    /**
                     * 1.判断当前对象是否是正在准备移动的对象
                     * 2.true 不显示信息 false 显示信息
                     */

                    if(PublicVariable._instance._mouseDownButton != this.node){
                        //显示装备信息
                        // console.log("xinashi1111111111111111111111");
                    }
                    else{
                        //不做反应
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
        this.node.on(Node.EventType.MOUSE_UP,(event:EventMouse)=>{
            switch(event.getButton()){
                case 0:
                    //判断交换位置
                    // console.log(this._tempPos);
                    if(PublicVariable._instance._mouseDownButton != null){

                        this.exChangePosition(this.icon,PublicVariable._instance._mouseDownButton);

                        if(PublicVariable._instance._mouseDownButton != null){
                            PublicVariable._instance._tempParent.getComponent(NodeInputButton)._isMove = false;
                            PublicVariable._instance._mouseDownButton = null;
                            PublicVariable._instance._tempParent = null;
                            PublicVariable._instance._tempPos = Vec3.ZERO;
                        }
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


        // this.node.on(Node.EventType.MOUSE_ENTER,(event:EventMouse)=>{
        //     switch(event.getButton()){
        //         case 0:
        //             /**
        //              * 1.判断当前对象是否是正在准备移动的对象
        //              * 2.true 不显示信息 false 显示信息
        //              */

        //             if(PublicVariable._instance._mouseDownButton != this.node){
        //                 //显示
        //                 // console.log("xinashi");
        //             }
        //             else{
        //                 //不做反应
        //             }
        //             break;
        //         case 1:
        //             break;
        //         case 2:
        //             break;
        //         default:
        //             break;
        //     }
        // },this.node);

        // this.node.on(Node.EventType.MOUSE_LEAVE,(event:EventMouse)=>{
        //     switch(event.getButton()){
        //         case 0:
        //             /**
        //              * 1.判断当前对象是否是正在准备移动的对象
        //              * 2.true 不显示信息 false 显示信息
        //              */

        //             if(PublicVariable._instance._mouseDownButton != this.node){
        //                 //显示
        //                 // console.log("1");
        //             }
        //             else{
        //                 //不做反应
        //             }
        //             break;
        //         case 1:
        //             break;
        //         case 2:
        //             break;
        //         default:
        //             break;
        //     }
        // },this.node);
    }

    tempTS:NodeInputButton = this;
    update(del:number){
        if(this._isMove){
            this.move(this,this.icon,new Vec3(MouseControler.v_instance.v2.x - view.getVisibleSizeInPixel().x/2,MouseControler.v_instance.v2.y - view.getVisibleSizeInPixel().y/2,0),this._speed);

        }
    }

    move(self:NodeInputButton,moveNode:Node,pos:Vec3,speed:number){
        moveNode.position = Vec3.lerp(new Vec3(),moveNode.position,pos,speed);
    }

    //交换位置
    exChangePosition(a:Node,b:Node){
        if(a != b){
            let tempv3a = Vec3.subtract(new Vec3(),a.parent.position,PublicVariable._instance._tempParent.position);
            let tempv3b = Vec3.subtract(new Vec3(),Vec3.subtract(new Vec3(),b.position,a.parent.position),new Vec3(0,250,0));
            b.setParent(a.getParent());
            a.setParent(PublicVariable._instance._tempParent);
            a.position = (tempv3a);
            b.position = (tempv3b);

            tween(a)
                .to(1,{position:new Vec3(0,0,0)},{"onStart":()=>{
                    a.getParent().getComponent(NodeInputButton).icon = a;},
                })
                .union()
                .repeat(1)
                .start()
            
            tween(b)
                .to(1,{position:new Vec3(0,0,0)},{"onStart":()=>{
                    b.getParent().getComponent(NodeInputButton).icon = b;},
                    "onComplete":()=>{b.getComponent(GridIconTemp).enabled = false;}
                })
                .union()
                .repeat(1)
                .start()
        }
        else{
            let temp:Vec3 = Vec3.subtract(new Vec3(),Vec3.subtract(new Vec3(),b.position,PublicVariable._instance._tempParent.position),new Vec3(0,250,0))
            b.setParent(PublicVariable._instance._tempParent);
            b.setPosition(temp);
            tween(b)
                .to(1,{position:new Vec3(0,0,0)},{"onComplete":()=>{
                    b.getComponent(GridIconTemp).enabled = false;
                }})
                .union()
                .repeat(1)
                .start()
        }
        
    }
}


export class GridIconTemp extends Component{
    start(){
        this.node.on(Node.EventType.MOUSE_UP,(event:EventMouse)=>{
            switch(event.getButton()){
                case 0:
                    //判断交换位置
                    if(PublicVariable._instance._mouseDownButton != null){

                        this.exChangePosition(PublicVariable._instance._mouseDownButton);

                        if(PublicVariable._instance._mouseDownButton != null){
                            PublicVariable._instance._tempParent.getComponent(NodeInputButton)._isMove = false;
                            PublicVariable._instance._mouseDownButton = null;
                            PublicVariable._instance._tempParent = null;
                            PublicVariable._instance._tempPos = Vec3.ZERO;
                        }
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

    exChangePosition(b:Node){
            let temp:Vec3 = Vec3.subtract(new Vec3(),Vec3.subtract(new Vec3(),b.position,PublicVariable._instance._tempParent.position),new Vec3(0,250,0))
            b.setParent(PublicVariable._instance._tempParent);
            b.setPosition(temp);
            tween(b)
                .to(1,{position:new Vec3(0,0,0)},{"onComplete":()=>{
                    this.enabled = false;
                }})
                .union()
                .repeat(1)
                .start()
    }
}
