
import { _decorator, Component, Node, EventMouse, Vec3, view, debug, tween, Tween, Sprite, SpriteFrame } from 'cc';
import { BackpackGoodsInformations } from '../Componts/Controller/BackpackGoodsInformations';
import { UIManager } from '../Componts/Singleton/UIManager';
import { IGoods } from '../Utils/Interfaces';
import { MouseControler } from '../Utils/MouseControler';
import { PublicVariable } from '../Utils/PublicVariable';
const { ccclass, property } = _decorator;
 a:Node;
@ccclass('NodeInputButton')
export class NodeInputButton extends Component {
    @property({type:Node})
    icon:Node;
    @property({type:Sprite,visible:true})
    _iconSprite:Sprite;
    

    _speed:number = 0.5;
    _isMove:boolean = false;
    _tempPos:Vec3 = Vec3.ZERO;
    /**该 背包格子的物品属性 */
    _gooditemp:IGoods = null;

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
                            console.log("开启非法拖拽判断组件");
                            this.icon.getComponent(GridIconTemp).enabled = true;
                        }else{
                            console.log("添加非法拖拽判断组件");
                            this.icon.addComponent(GridIconTemp);
                            this.icon.getComponent(GridIconTemp).enabled = true;
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
                            // console.log("隐藏组件");
                            // PublicVariable._instance._mouseDownButton.getComponent(GridIconTemp).enabled = false;
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


        this.node.on(Node.EventType.MOUSE_ENTER,(event:EventMouse)=>{
            switch(event.getButton()){
                case 0:
                    /**
                     * 1.判断当前对象是否是正在准备移动的对象
                     * 2.true 不显示信息 false 显示信息
                     */
                    if(PublicVariable._instance._mouseDownButton != this.icon){
                        //显示
                        UIManager._instance._isMove = true;
                        if(this._gooditemp != null){
                            UIManager._instance._information.getComponent(BackpackGoodsInformations).setInformationMove(UIManager._instance._information.getComponent(BackpackGoodsInformations),this._gooditemp._information,UIManager._instance._isMove);
                        }
                        console.log("进入");
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

        this.node.on(Node.EventType.MOUSE_LEAVE,(event:EventMouse)=>{
            switch(event.getButton()){
                case 0:
                    /**
                     * 1.判断当前对象是否是正在准备移动的对象
                     * 2.true 不显示信息 false 显示信息
                     */

                    if(PublicVariable._instance._mouseDownButton != this.icon){
                        //隐藏
                        UIManager._instance._isMove = false;
                        UIManager._instance._information.getComponent(BackpackGoodsInformations).setInformationMove(UIManager._instance._information.getComponent(BackpackGoodsInformations),"",UIManager._instance._isMove);
                        console.log("隐藏");
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

            let tempSprite:Sprite = a.getParent().getComponent(NodeInputButton)._iconSprite;
            a.getParent().getComponent(NodeInputButton)._iconSprite = b.getParent().getComponent(NodeInputButton)._iconSprite;
            b.getParent().getComponent(NodeInputButton)._iconSprite = tempSprite;

            let tempGoodsItem = a.getParent().getComponent(NodeInputButton)._gooditemp;
            a.getParent().getComponent(NodeInputButton)._gooditemp = b.getParent().getComponent(NodeInputButton)._gooditemp;
            b.getParent().getComponent(NodeInputButton)._gooditemp = tempGoodsItem;

            tween(a)
                .to(1,{position:new Vec3(0,0,0)},{"onStart":()=>{
                    a.getParent().getComponent(NodeInputButton).icon = a;
                },})
                .union()
                .repeat(1)
                .start()
            
            tween(b)
                .to(1,{position:new Vec3(0,0,0)},{"onStart":()=>{
                    b.getParent().getComponent(NodeInputButton).icon = b;
                    b.getComponent(GridIconTemp).enabled = false;
                    console.log(b.getComponent(GridIconTemp).enabled+"    "+"关闭非法拖拽判断");},
                })
                .union()
                .repeat(1)
                .start()
        }
        else{
            let temp:Vec3 = Vec3.subtract(new Vec3(),Vec3.subtract(new Vec3(),b.position,PublicVariable._instance._tempParent.position),new Vec3(0,250,0))
            b.setParent(PublicVariable._instance._tempParent);
            b.setPosition(temp);
            //显示物品菜单
            UIManager._instance._goodsMenu.show(UIManager._instance._goodsMenu,255);
            tween(b)
                .to(1,{position:new Vec3(0,0,0)},{"onStart":()=>{
                    b.getComponent(GridIconTemp).enabled = false;console.log(b.getComponent(GridIconTemp).enabled+"    "+"关闭非法拖拽判断");
                }})
                .union()
                .repeat(1)
                .start()
        }
        
    }
}


export class GridIconTemp extends Component{
    onEnable(){
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

    onDisable(){
        this.node.off(Node.EventType.MOUSE_UP);
    }

    exChangePosition(b:Node){
            let temp:Vec3 = Vec3.subtract(new Vec3(),Vec3.subtract(new Vec3(),b.position,PublicVariable._instance._tempParent.position),new Vec3(0,250,0))
            b.setParent(PublicVariable._instance._tempParent);
            b.setPosition(temp);
            // 显示当前物品你可操作的菜单
            this.showGoodsMenu();
            tween(b)
                .to(1,{position:new Vec3(0,0,0)},{"onStart":()=>{
                    console.log("当前拖动位置错误,返回原处" +"     "+"关闭非法拖拽判断");
                    this.enabled = false;
                }})
                .union()
                .repeat(1)
                .start()
    }

    showGoodsMenu(){

    }
}
