class question {
    constructor(numeroQuestion, question, propostions){
        this.numeroQuestion = numeroQuestion;
        this.question = question;
        this.propostions = propostions;
    }
}

let question1 = new question("1", "Quelle est ta couleur préférée", [{}, {}, {}, {}])


export const dataQuestion = [
    {
        numeroQuestion: "1",
        question: "loul",
        propositions: [
            {
                nomChoix: "aaaa",
                pointPour: "poufsouffle",
            },
            {
                nomChoix: "bbbb",
                pointPour: "serdaigle",
            },
            {
                nomChoix: "cccc",
                pointPour: "serpentard",
            },
            {
                nomChoix: "dddd",
                pointPour: "gryffondor",
            }
        ]
    }
]