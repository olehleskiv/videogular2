"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SlidesPlayer = (function () {
    function SlidesPlayer() {
        this.slides = [
            {
                src: 'http://static.videogular.com/assets/images/videogular.png',
                start: 0,
                end: 5
            },
            {
                src: 'http://static.videogular.com/assets/images/bbb-splash.png',
                start: 5,
                end: 15
            },
            {
                src: 'http://static.videogular.com/assets/images/earth.png',
                start: 15,
                end: 30
            }
        ];
        this.sources = [
            {
                src: "http://static.videogular.com/assets/videos/videogular.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ];
    }
    SlidesPlayer = __decorate([
        core_1.Component({
            selector: 'slides-player',
            templateUrl: 'src/slides-player.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SlidesPlayer);
    return SlidesPlayer;
}());
exports.SlidesPlayer = SlidesPlayer;
//# sourceMappingURL=slides-player.js.map