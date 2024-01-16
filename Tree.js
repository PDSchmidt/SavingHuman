class Tree {
    constructor (game, x, y, flipped) {
        this.game = game;
        this.animator = null;
        if (!flipped) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("Sprites/Environment/Tree.png"), 0, 0, 128, 256, 1, 1, 1, 1);
        } else {
            this.animator = new Animator(ASSET_MANAGER.getAsset("Sprites/Environment/TreeL.png"), 0, 0, 128, 256, 1, 1, 1, 1);
        }
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