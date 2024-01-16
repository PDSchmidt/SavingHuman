class Dog {
    constructor (game) {
        this.game = game;
        game.doggo = this;
        // walk
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./DogWalk.png"), 0, 0, 64, 64, 7, .1, 7, 1);
        this.x = 0;
        this.y = 128 + 48 + 128 + 128;
        this.speed = 0;
        // this.speed = 50;
        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking

        // animations
        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (var i = 0; i < 3; i++) { // 3 states
            this.animations.push([]);
            for (var j = 0; j < 2; j++) { // two directions
                this.animations[i].push([]);
            }
        }

        // idle animation for state = 0
        // facing right = 0, left = 1
        this.animations[0][0] = new Animator(ASSET_MANAGER.getAsset("Sprites/Dog/DogIdle.png"), 0, 0, 64, 64, 3, .3, 3, 1);
        this.animations[0][1] = new Animator(ASSET_MANAGER.getAsset("Sprites/Dog/DogIdleL.png"), 0, 0, 64, 64, 3, .3, 3, 1);

        // walk animation for state = 1
        // walking right = 0, left = 1
        this.animations[1][0] = new Animator(ASSET_MANAGER.getAsset("Sprites/Dog/DogWalk.png"), 0, 0, 64, 64, 7, .1, 7, 1);
        this.animations[1][1] = new Animator(ASSET_MANAGER.getAsset("Sprites/Dog/DogWalkL.png"), 0, 0, 64, 64, 7, .1, 7, 1);

        // run animation for state = 2
        // running right = 0, left = 1
        this.animations[2][0] = new Animator(ASSET_MANAGER.getAsset("Sprites/Dog/DogRunv2.png"), 0, 0, 64, 64, 10, .1, 12, 1);
        this.animations[2][1] = new Animator(ASSET_MANAGER.getAsset("Sprites/Dog/DogRunv2L.png"), 0, 0, 64, 64, 10, .1, 12, 1);

    }
    
    update() {
        let shiftSpeed = 0;
        this.speed = 0;
        if (this.game.keys["Shift"] == true) {
            shiftSpeed = 200;
            if (this.game.keys["a"] || this.game.keys["A"])  {
                this.game.keys["a"] = false;
                this.game.keys["A"] = true;
                this.speed = 0;
                console.log("here1");
            }
            if (this.game.keys["d"] || this.game.keys["D"]) {
                this.game.keys["d"] = false;
                this.game.keys["D"] = true;
                this.speed = 0;
                console.log("here2");
            }
        } else {
            if (this.game.keys["D"] == true)  {
                this.game.keys["d"] = true;
                this.game.keys["D"] = false;
                this.speed = 0;
                console.log("here3");
            }
            if (this.game.keys["A"] == true)  {
                this.game.keys["a"] = true;
                this.game.keys["A"] = false;
                this.speed = 0;
                console.log("here4");
            }
        }
        if (this.game.keys["a"] || this.game.keys["A"]) {
            this.facing = 1;
            this.state = 1;
            this.speed = -50 -shiftSpeed;
            console.log("here5");
        } else if (this.game.keys["d"] || this.game.keys["D"]) {
            this.facing = 0;
            this.state = 1;
            this.speed = 50 + shiftSpeed;
            console.log("here6");
        } else {
            this.state = 0;
            this.speed = 0;
        }
        this.x += this.speed * this.game.clockTick;
        if(this.speed > 50 || this.speed < -50) this.state = 2;

        this.speed = 0;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        // ctx.drawImage(ASSET_MANAGER.getAsset("./mr_hop.png"), 0, 0);
        // console.log("HUH " + this.state + " " + this.facing);
        this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}