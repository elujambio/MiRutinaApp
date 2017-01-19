import {Component, Input} from '@angular/core';
import {ITimer} from '../timer/itimer';


@Component({
    selector: 'timer',
    templateUrl: 'timer.html'
})
export class TimerComponent {

    @Input() timeInSeconds: number;
    public timer: ITimer;

    constructor(
    ) {
    }

    ngOnInit() {
        this.initTimer();
    }

    hasFinished() {
        return this.timer.hasFinished;
    }

    hasStart(){
    return this.timer.hasStarted;
    }

    initTimer() {
        if(!this.timeInSeconds) { this.timeInSeconds = 0; }

        this.timer = <ITimer>{
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };

        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    }

    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }

    pauseTimer() {
        this.timer.runTimer = false;
    }

    getStatus(){
    return this.timer.runTimer;
    }

    resumeTimer() {
        this.startTimer();
    }

    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.secondsRemaining++;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                 this.timerTick();
                //this.timer.hasFinished = true;
            }
        }, 10);
    }

    getSecondsAsDigitalClock(inputSeconds: number) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 360000);
        var minutes = Math.floor((sec_num - (hours * 360000)) / 60000);
        var seconds = Math.floor((sec_num - (hours * 360000)) / 100);
        var miliseconds = sec_num - (hours * 360000) - (minutes * 60000) - (seconds * 100);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        var milisecondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        milisecondsString = (miliseconds < 10) ? "0" + miliseconds : miliseconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString + ':' + milisecondsString;
    }

}
