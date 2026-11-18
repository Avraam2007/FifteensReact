export class StatsSingleton {
    protected moves = 0;
    protected seconds = 0;
    protected start = new Date().getTime();
    protected showSeconds = this.seconds%60;
    protected showMinutes = Math.floor(this.seconds/60)
    
    static #instance : StatsSingleton;

    static get instance() : StatsSingleton{
        if (!StatsSingleton.#instance) {
            StatsSingleton.#instance = new StatsSingleton();
        }

        return StatsSingleton.#instance;
    }

    setMoves(movesTotal:number) {
        if(movesTotal >= 0) this.moves = movesTotal;
    }

    getMoves() {
        return this.moves;
    }

    setSeconds(seconds1:number) {
        if(seconds1 >= 0) this.seconds = seconds1;
    }

    getSeconds() {
        return this.seconds;
    }

    getShowMinutes() {
        return this.showMinutes;
    }

    getShowSeconds() {
        return this.showSeconds;
    }

    setStart(startTime:number) {
        if(Number.isInteger(startTime)) this.start = startTime;
    }

    getStart() {
        return this.start
    }
}
