
//マスが埋まったかどうかのみを確認する
export function draw(board){
    for (let x = 0; x < 3; x++){
        for (let y = 0; y < 3; y++) {
            if (board[y][x] == ' ') {
                return false;
            }  
        }
    }
    return true;
}