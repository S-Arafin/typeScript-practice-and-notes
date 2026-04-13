// abstraction 

// 1 interface 2 abstract class

// interface MediaPlayer{
//     play(): void;
//     pause(): void;
//     stop(): void;
// }
// // implementation
// class Musicplayer implements MediaPlayer{
//     play(){
//         console.log('playing music');
//     }
//     pause(){
//         console.log('paused')
//     }
//     stop(){
//         console.log('stops')
//     }
// }

// const TsPlayer = new Musicplayer();
// TsPlayer.play()


abstract class MediaPlayer{
   abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class TsPlayer extends MediaPlayer {
     play(){
        console.log('playing music');
    }
    pause(){
        console.log('paused')
    }
    stop(){
        console.log('stops')
    }

}

const tsPlayer = new TsPlayer()

tsPlayer.pause