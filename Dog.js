class Dog {
    constructor (game) {
        this.game = game;
        // idle
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./DogIdle.png"), 0, 0, 64, 64, 3, .3, 3, 1.5);
        // walk
        this.animator = new Animator(ASSET_MANAGER.getAsset("./DogWalk.png"), 0, 0, 64, 64, 7, .25, 7, 3);
        this.x = 0;
        this.y = 0;
        this.speed = 50;
    };
    
    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        // ctx.drawImage(ASSET_MANAGER.getAsset("./mr_hop.png"), 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}