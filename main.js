const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("Sprites/Environment/NightSky.png");
ASSET_MANAGER.queueDownload("Sprites/Environment/Tree.png");
ASSET_MANAGER.queueDownload("Sprites/Environment/TreeL.png");
ASSET_MANAGER.queueDownload("Sprites/Dog/DogIdle.png");
ASSET_MANAGER.queueDownload("Sprites/Dog/DogIdleL.png");
ASSET_MANAGER.queueDownload("Sprites/Dog/DogWalk.png");
ASSET_MANAGER.queueDownload("Sprites/Dog/DogWalkL.png");
ASSET_MANAGER.queueDownload("Sprites/Dog/DogRunv2.png");
ASSET_MANAGER.queueDownload("Sprites/Dog/DogRunv2L.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	
	let reversed = true;
	for (let i = 0; i < 10; i++) {
		reversed = Math.random() > 0.5 ? true : false;
		gameEngine.addEntity(new Tree(gameEngine, 64*i + i*64, 256, reversed));
	}
	gameEngine.addEntity(new Dog(gameEngine));
	for (let i = 0; i < 11; i++) {
		reversed = Math.random() > 0.5 ? true : false;
		gameEngine.addEntity(new Tree(gameEngine, 32*i + i*64, 270, reversed));
	}
	gameEngine.addEntity(new NightSky(gameEngine, 0, 0));
	gameEngine.init(ctx);

	gameEngine.start();
});
