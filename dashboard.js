function Dashboard() {
    this.render = function () {
        push()
        stroke('lavender')
        line(800,0,800,600)
        pop();
        push()
        fill('lavender') 
        textSize ('20')
        text("Number of shot:", 830, 100)
        text (numberofpressed, 890, 150)
        text("Score:", 870, 250)
        text(row.score, 890,300)
        text("Accuracy:", 870, 400)

        if (numberofpressed == 0) {
                 text('start', 890,450)
        } else {
                text((100*(row.score/numberofpressed)).toFixed(2) + '%', 880,450)
            }

        pop()
    }

}