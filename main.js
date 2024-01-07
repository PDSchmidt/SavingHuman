const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./DogIdle.png");
ASSET_MANAGER.queueDownload("./DogIdleL.png");
ASSET_MANAGER.queueDownload("./DogWalk.png");
ASSET_MANAGER.queueDownload("./DogWalkL.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Dog(gameEngine));
	gameEngine.init(ctx);

	gameEngine.start();
});
