function gatherFeedback(feedbackArray) {
    // Your code goes here...
    // Positive scores 7-10
    // Neutral 4-6
    // Negative 0-3
    let feedback = {
        positive: 0,
        negative: 0,
        neutral: 0
    }
    for (let i = 0; i < feedbackArray.length; i++) {
        if (feedbackArray[i][1] > 7){
            feedback.positive += 1
        } else if (feedbackArray[i][1] < 4) {
            feedback.negative += 1
        } else {
            feedback.neutral += 1
        }
    }
    console.log(feedback)
    return feedback

}
gatherFeedback([['maddie', 10], ['jatinder', 3], ['rose', 6]]);
// returns {positive: 1, negative: 1, neutral:1}

gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 10]]);
// returns {positive: 3, negative: 0, neutral:0}

gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 1]]);
// returns {positive: 2, negative: 1, neutral:0}