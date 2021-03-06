export function startGame(gameId, users){
    return {
        type: "START_GAME",
        data: {
            gameWillStart: false,
            iSgame: true,
            gameId: gameId,
            users: users
        }
    }
}

export function sendQuestion(data){
    return {
        type: "SEND_QUESTION",
        data: {
            questionNumber: data.questionNumber,
            totalQuestion: data.totalQuestion,
            question: data.question,
            answers: data.answers,
        }
    };
}

export function answerResult(answerId, correctAnswer){
    return {
        type: "ANSWER_RESULT",
        data: {
            chosenAnswer: answerId,
            correctAnswer: correctAnswer
        }
    }
}

// export function gameResult(data) {
//     return {
//         type: "GAME_RESULT",
//         data: {
//             standings: data.standings,
//
//         }
//     }
// }