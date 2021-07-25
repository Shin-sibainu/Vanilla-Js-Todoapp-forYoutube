//イベントが発生したときにイベントリスナーを呼び出すクラス
export class EventEmitter{
    constructor(){
        //　登録する[イベント名、Set（リスナー関数）]を管理するMap
        this._listeners = new Map();
    }

    /**
     * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
     * @param {string} type 
     * @param {Function} listener 
     */
    addEvenetListener(type, listener){
        if(!this._listeners.has(type)) {
            this._listeners.set(type, new Set());
        }
        const listenerSet = this._listeners.get(type);
        listenerSet.add(listener);
    }


    /**
     * 指定したイベントをディスパッチする。実行する。
     * @param {string} type 
     */
    emit(type) {
        const listenerSet = this._listeners.get(type);
        if(!listenerSet){
            return;
        }
        listenerSet.forEach(listener => {
            listener.call(this);
        });
    }    
}