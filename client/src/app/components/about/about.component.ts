import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
<ng-container *ngFor="let card of cards">
    <mat-card class="mat-elevation-z6 text-center">
        <div [innerHTML]="card.title"></div>
        <img style="border-radius:50%;" width="100px" [src]="card.image">
        <div [innerHTML]="card.text"></div>
    </mat-card>
    <br />
    <br />
</ng-container>
    `
})
export class AboutComponent implements OnInit {

    cards: {title: string, image: string, text: string}[] = [];

    constructor() { }

    public ngOnInit(): void {
        this.cards = [
            {
                title: 'About the Developer',
                image: 'http://cdn.nathangawith.com/images/twitter_profile.png',
                text: `
Hello, my name is Nathan Gawith. I am a senior at UMKC and
graduating in December of 2020. This application was designed
by me for my CS456 (Human Computer Interaction) course.
You can check out other web applications I have made at my website
<a href="https://nathangawith.com/" target="_blank">https://nathangawith.com/</a>
or contact me at <a href="mailto:nmg3hw@mail.umkc.edu">nmg3hw@mail.umkc.edu</a>`
            },
            {
                title: 'Testimonial',
                image: 'https://pbs.twimg.com/profile_images/857430767068004352/DshBij_v_400x400.jpg',
                text: `
Hello, my name is Michelle Gawith. This program has helped me to streamline
two documents into one application. The data is organized cleanly and easy to
search through. Instead of searching a messy, 225-plus page document (as well
as a second document), it's all right here. Thanks!
<a href="http://thepicandbow.com/" target="_blank">http://thepicandbow.com/</a>`
            }
        ];
    }
}
