const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Tree.png");
ASSET_MANAGER.queueDownload("./TreeL.png");
ASSET_MANAGER.queueDownload("./DogIdle.png");
ASSET_MANAGER.queueDownload("./DogIdleL.png");
ASSET_MANAGER.queueDownload("./DogWalk.png");
ASSET_MANAGER.queueDownload("./DogWalkL.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	
	
	for (let i = 0; i < 10; i++) {
		gameEngine.addEntity(new Tree(gameEngine, 64*i + i*64, 0, false));
	}
	gameEngine.addEntity(new Dog(gameEngine));
	for (let i = 0; i < 10; i++) {
		gameEngine.addEntity(new Tree(gameEngine, 32*i + i*64, 0, true));
	}
	
	gameEngine.init(ctx);

	gameEngine.start();
});
