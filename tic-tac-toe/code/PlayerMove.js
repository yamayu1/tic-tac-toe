import { Error_number, choiceError, Error_coordinate } from "./error.js";
import * as readline from 'node:readline/promises';


export async function PlayerCoordinate(messageList,input,output,board){
    //座標を入力するインターフェイスを作成
    const rl = readline.createInterface({ input, output });
    let x = await rl.question(messageList["coordinate_x"]);
    let y = await rl.question(messageList["coordinate_y"]);
    rl.close();

    //座標のエラー確認
    const [error_number, errorMessage] = Error_number(x,y);
    if(error_number === true){
        console.log(errorMessage);
        return PlayerCoordinate(messageList,input,output,board);
    }
    const [error_coordinate, errorMessage2] = Error_coordinate(x,y,board);
    if(error_coordinate === true){
        console.log(errorMessage2);
        return PlayerCoordinate(messageList,input,output,board)
    }
    return [x,y];
}

export async function PlayerChoice(messageList, input, output) {
    //先攻・後攻を入力するインターフェイスを作成
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question(messageList["select_turn"]);
    rl.close();
    
    //先攻・後攻のエラー確認
    const [error, errorMessage] = choiceError(answer);
    if(error === true){
    console.log(errorMessage);
    return PlayerChoice(messageList,input,output);
    }
    return answer;
}


//ハンズオンJavaScriptの本を読む、11章は飛ばす