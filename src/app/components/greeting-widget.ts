import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'greeting-widget',
    standalone: true,
    templateUrl: './greeting-widget.html',

})


export class GreetingWidget implements OnInit, OnDestroy {
    currentTime: string = '';
    greeting: string = '';

    private timerInterval: any;

    ngOnInit() {
        this.updateTime();
        this.timerInterval = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    ngOnDestroy() {
        clearInterval(this.timerInterval);
    }

    updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        let hour12Format = hours % 12;
        hour12Format = hour12Format ? hour12Format : 12; // Convert 0 to 12

        const ampm = hours >= 12 ? 'PM' : 'AM';

        this.currentTime = `${this.padZero(hour12Format)}:${this.padZero(minutes)}:${this.padZero(seconds)} ${ampm}`;

        if (hours >= 5 && hours < 12) {
            this.greeting = 'Good Morning';
        } else if (hours >= 12 && hours < 17) {
            this.greeting = 'Good Afternoon';
        } else {
            this.greeting = 'Good Evening';
        }
    }

    padZero(num: number): string {
        return num < 10 ? '0' + num : num.toString();
    }


}