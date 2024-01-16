class NightSky {
    constructor (game, x, y) {
        this.game = game;
        this.animator = null;
        this.animator = new Animator(ASSET_MANAGER.getAsset("Sprites/Environment/NightSky.png"), 0, 0, 1024, 768, 1, 1, 1, 1);
        this.x = x;
        this.y = y;
    };
    
    update() {
    }
    draw(ctx) {
        // ctx.drawImage(ASSET_MANAGER.getAsset("./mr_hop.png"), 0, 0);
        // console.log("HUH " + this.state + " " + this.facing);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}