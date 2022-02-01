
import { _decorator, Component, Node ,input,Input,EventKeyboard,KeyCode, debug} from 'cc';
const { ccclass, property } = _decorator;
@ccclass('KeyInputControler')
export class KeyInputControler extends Component {
    static v_instance:KeyInputControler;

    @property
    v_Horizontal : number = 0;
    @property
    v_Vertical : number = 0;
    @property
    v_Height : number = 0;

    public onLoad () {
        KeyInputControler.v_instance = this;
        
        input.on(Input.EventType.KEY_PRESSING,this.onKeyPressing,this);
        input.on(Input.EventType.KEY_DOWN,this.onKeyDown,this);
        input.on(Input.EventType.KEY_UP,this.onKeyDown,this);
    }

    public GetHorizontal() : number{
        return this.v_Horizontal;
    }
    public GetVertical() : number{
        return this.v_Vertical;
    }

    onKeyPressing (event : EventKeyboard) {
        if (event.keyCode == KeyCode.KEY_A) {
            if (this.v_Horizontal <= 1) {
                // this.v_Horizontal += 0.1;
                this.v_Horizontal = 1;
            }
            
        }
        if (event.keyCode == KeyCode.KEY_D) {
            if (this.v_Horizontal >= -1) {
                // this.v_Horizontal -= 0.1;
                this.v_Horizontal = -1;
            }
            
        }
        if (event.keyCode == KeyCode.KEY_W) {
            if (this.v_Vertical <= 1) {
                // this.v_Vertical += 0.1;
                this.v_Vertical = 1;
            }
            
        }
        if (event.keyCode == KeyCode.KEY_S) {
            if (this.v_Vertical >= -1) {
                // this.v_Vertical -= 0.1;
                this.v_Vertical = -1;
            }
            
        }
        if (event.keyCode == KeyCode.KEY_E) {
            if (this.v_Height >= -1) {
                // this.v_Vertical -= 0.1;
                this.v_Height = 1;
            }
            
        }
        if (event.keyCode == KeyCode.KEY_Q) {
            if (this.v_Height >= -1) {
                // this.v_Vertical -= 0.1;
                this.v_Height = -1;
            }
            
        }
    }

    onKeyDown (event : EventKeyboard) {

        if (event.keyCode == KeyCode.KEY_D || event.keyCode == KeyCode.KEY_A) {
            this.v_Horizontal = 0;
        }
        if (event.keyCode == KeyCode.KEY_W || event.keyCode == KeyCode.KEY_S) {

            this.v_Vertical = 0;
        }
        if (event.keyCode == KeyCode.KEY_E || event.keyCode == KeyCode.KEY_Q) {

            this.v_Height = 0;
        }
    }
}
