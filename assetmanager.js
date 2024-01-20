class AssetManager {
    constructor() {
        this.successCount = 0;
        this.errorCount = 0;
        this.cache = [];
        this.downloadQueue = [];
    };

    queueDownload(path) {
        console.log("Queueing " + path);
        this.downloadQueue.push(path);
    };

    isDone() {
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {
        if (this.downloadQueue.length === 0) setTimeout(callback, 10);
        for (let i = 0; i < this.downloadQueue.length; i++) {
            var that = this;
            const path = this.downloadQueue[i];
            console.log(path);
            var ext = path.substring(path.length - 3);

            switch (ext) {
                case 'png':
                    const img = new Image();
                    img.addEventListener("load", () => {
                        console.log("Loaded " + img.src);
                        that.successCount++;
                        if (that.isDone()) callback();
                    });
        
                    img.addEventListener("error", () => {
                        console.log("Error loading " + img.src);
                        that.errorCount++;
                        if (that.isDone()) callback();
                    });
        
                    img.src = path;
                    this.cache[path] = img;
                    break;
                case 'wav':
                    var aud = new Audio();
                    aud.loop = true;
                    aud.addEventListener("loadeddata", function () {
                        console.log("Loaded " + this.src);
                        that.successCount++;
                        if (that.isDone()) callback();
                    });
                    aud.addEventListener("error", function () {
                        console.log("Error Loading " + this.src);
                        that.errorCount++;
                        if (that.isDone()) callback();
                    });
                    // aud.addEventListener("ended", function () {
                    //     aud.cuurentTime = 0;
                    // });
                    aud.addEventListener("timeupdate", function () {
                        if (aud.currentTime > aud.duration - .13) {
                            aud.currentTime = 0;

                            console.log("relooped");
                        }
                    });
                    aud.src = path;
                    aud.load();

                    this.cache[path] = aud;
                    break;
            }

            
        }
    };

    getAsset(path) {
        return this.cache[path];
    };

    playAsset(path) {
        let audio = this.cache[path];
        audio.currentTime = 0;
        audio.play();
    }

    // autoRepeat(path) {
    //     var aud = this.cache[path];
    //     aud.addEventListener("ended", function () {
    //         aud.play();
    //     });
    // }
};

