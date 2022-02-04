
import { _decorator, Component, Node, input ,Input, EventMouse,geometry, Camera, physics, PhysicsSystem, game,director, EventTouch, Vec2, view, PhysicsRayResult} from 'cc';

import { PublicVariable } from './PublicVariable';
const { ccclass, property } = _decorator;
const {Ray} = geometry;
 
@ccclass('MouseControler')
export class MouseControler extends Component {
    @property
    v_movementX:number = 0;
    @property
    v_movementY:number = 0;
    @property
    v_moveSceenMoveX:number = 0;
    @property
    v_moveSceenMoveY:number = 0;

    v2:Vec2 = Vec2.ZERO;

    @property({type:[physics.PhysicsRayResult]})
    hit:physics.PhysicsRayResult[] = [];


    @property
    v_isOnMouseLeftButotn:boolean = false;
    @property
    v_isOnMouseRightButotn:boolean = false;
    @property
    v_isOnMouseTochButotn:boolean = false;

    // del_mouseDown:Array<My_Tools02_Delegates.I_Delegate_void_void> = new Array<My_Tools02_Delegates.I_Delegate_void_void>();
    
    static v_instance:MouseControler;

    onLoad(){
        MouseControler.v_instance = this;
        game.canvas.style.cursor = "crosshair";
        //
        input.on(Input.EventType.MOUSE_DOWN,(event:EventMouse)=>{
            // console.log("鼠标按下");
            if (event.getButton() == 0) {
                MouseControler.v_instance.v_isOnMouseLeftButotn = !MouseControler.v_instance.v_isOnMouseLeftButotn;
                // console.log(event.getLocation)
                //触发一个事件，每隔多长时间调用一次委托，子弹生成！！！！！！！！！！！！！！
                //将输入系统调整一下，从 0.5 累加 开始
                // My_Tools02_Delegates.f_Delegate_Response(MouseControler.v_instance.del_mouseDown,{});
            }
            if (event.getButton() == 2) {
                MouseControler.v_instance.v_isOnMouseRightButotn =! MouseControler.v_instance.v_isOnMouseRightButotn;
            }
            if (event.getButton() == 1) {
                MouseControler.v_instance.v_isOnMouseTochButotn = !MouseControler.v_instance.v_isOnMouseTochButotn;
            }
        },this.node);
        //
        input.on(Input.EventType.MOUSE_MOVE,(event:EventMouse)=>{
            MouseControler.v_instance.v_movementX = event.movementX;
            MouseControler.v_instance.v_movementY = event.movementY;
            
            MouseControler.v_instance.v_moveSceenMoveX = event.getUILocationX();
            MouseControler.v_instance.v_moveSceenMoveY = event.getUILocationY();
    
            MouseControler.v_instance.v2 = event.getLocation();
        },this.node);
        //
        input.on(Input.EventType.MOUSE_UP,(event:EventMouse)=>{
            if (event.getButton() == 0) {
                MouseControler.v_instance.v_isOnMouseLeftButotn = !MouseControler.v_instance.v_isOnMouseLeftButotn;
                
            }
            if (event.getButton() == 2) {
                MouseControler.v_instance.v_isOnMouseRightButotn = !MouseControler.v_instance.v_isOnMouseRightButotn;
            }
            if (event.getButton() == 1) {
                MouseControler.v_instance.v_isOnMouseTochButotn = !MouseControler.v_instance.v_isOnMouseTochButotn;
            }
        },this.node);
    }

    

    //鼠标抬起时判断是否要返回开始位置
    upMoveStart(){
        /**
         * 判断对象的父对象
         */
        if(PublicVariable._instance._mouseDownButton != null){

        }
        else{

        }

    }





    // @property({type:Camera})
    // cameraCom:Camera;
    // rayInformation(){
    //     //射线检测
        
    //     let outRay = new Ray();
    //     this.cameraCom.screenPointToRay(MouseControler.v_instance.v_moveSceenMoveX,MouseControler.v_instance.v_moveSceenMoveY,outRay);
    //     let a:physics.PhysicsRayResult[] =  PhysicsSystem.instance.raycastResults;
    //     console.log(a.length);
    //     // a.forEach(element => {
    //     //     console.log(element.collider.name);
    //     // });
    // }
}