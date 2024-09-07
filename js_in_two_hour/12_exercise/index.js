function StopWatch(){
    let duration = 0;
    let isActive = false;

    this.start = function(){
        if (this.isActive == true)
            throw new Error('Stopwatch has already started');
        
        this.isActive = true;
        console.log('start ' + Date.now());
        this.duration = Date.now();
        
    }

    this.stop = function(){ 
        if (this.isActive == false)
            throw new Error('Stopwatch hasnot been started');
        this.isActive = false;
        console.log('first ' + Date.now());
        this.duration = (Date.now() - this.duration) / 60;
    }
    
    this.reset = function(){
        this.duration = 0;
        this.isActive = false;    

    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }

    });
}


// const sw = new StopWatch();
// console.log(sw);
// console.log(sw.duration);
// console.log(sw.start());
// console.log(sw.stop());
// console.log(sw.duration);