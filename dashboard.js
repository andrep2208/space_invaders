function Dashboard() {
    this.render = function () {
        push()
        stroke('lavender')
        line(800,0,800,600)
        pop();
        push()
        fill('lavender') 
        textSize ('20')
        text("Number of shot:", 830, 50)
        text (numberofpressed, 890, 100)
        text("Score:", 870, 200)
        text(row.score, 890,250)
        text("Got Shot:", 860, 350)
        text(gotshot, 890,400)


        text("Accuracy:", 860, 500)

        if (numberofpressed == 0) {
                 text('start', 890,550)
        } else {
                text((100*((row.score-gotshot)/numberofpressed)).toFixed(2) + '%', 880,550)
            }

        pop()
    }

}