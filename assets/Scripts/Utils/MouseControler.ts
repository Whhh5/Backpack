
import { _decorator, Component, Node, input ,Input, EventMouse,geometry, Camera, physics, PhysicsSystem, game, EventTouch, Vec2, view} from 'cc';
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
        input.on(Input.EventType.MOUSE_DOWN,this._MouseDown,this.node);
        input.on(Input.EventType.MOUSE_MOVE,this._MouseMove,this.node);
        input.on(Input.EventType.MOUSE_UP,this._MouseUp,this.node);
        input.on(Input.EventType.MOUSE_WHEEL,this._MouseWheel,this.node);

        input.on(Input.EventType.TOUCH_START,this.startTouch,this.node);
        input.on(Input.EventType.TOUCH_END,this.startTouch,this.node);
        input.on(Input.EventType.TOUCH_MOVE,this.startTouch,this.node);
    }

    _MouseDown(event:EventMouse){
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
    }

    _MouseMove(event:EventMouse){
        MouseControler.v_instance.v_movementX = event.movementX;
        MouseControler.v_instance.v_movementY = event.movementY;
        
        MouseControler.v_instance.v_moveSceenMoveX = event.getUILocationX();
        MouseControler.v_instance.v_moveSceenMoveY = event.getUILocationY();
    }


    _MouseUp(event:EventMouse){
        if (event.getButton() == 0) {
            MouseControler.v_instance.v_isOnMouseLeftButotn = !MouseControler.v_instance.v_isOnMouseLeftButotn;
            // this.unschedule(My_Tools02_Delegates.f_Delegate_Response(MouseControler.del_mouse,{}));
        }
        if (event.getButton() == 2) {
            MouseControler.v_instance.v_isOnMouseRightButotn = !MouseControler.v_instance.v_isOnMouseRightButotn;
        }
        if (event.getButton() == 1) {
            MouseControler.v_instance.v_isOnMouseTochButotn = !MouseControler.v_instance.v_isOnMouseTochButotn;
        }
    }
    _MouseWheel(event:EventMouse){
        // console.log("鼠标滚轮" + event.getDeltaX + "  " + event.movementY + event.getDeltaX);
    }

    startTouch(event:EventTouch){
        console.log(event.getLocation(new Vec2()) + "   " + view.getVisibleSize().width/2 + "   " + event.getLocation(new Vec2()).x + "   " + view.getVisibleSize().width/2);
        if(event.getLocation(new Vec2()).x <= view.getVisibleSize().width/2){
            console.log("yes !!!");
        }
        // window.DataView
    }

    // update(del:number){
    //     this.f_MainCameraToMouseRay();
    // }

    // f_MainCameraToMouseRay(){
    //     // let ray:geometry.Ray = new Ray();
    //     // GameManager.v_instance.v_mainCamera.getComponent(Camera).screenPointToRay(MouseControler.v_instance.v_moveSceenMoveX,MouseControler.v_instance.v_moveSceenMoveY,ray);
    //     // PhysicsSystem.instance.raycast(ray);
    //     // this.hit = PhysicsSystem.instance.raycastResults;
    // }
}