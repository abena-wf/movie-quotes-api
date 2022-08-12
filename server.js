const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())
app.use(express.static('public'));

const movieQuotes = {
    "comedy": {"one": [
        "I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.- Ron Swanson(Parks and Recreation)",
        "Well maybe I don't need your money. Wait, wait, I said maybe!- Rachel Green(Friends)",
        "The English language can not fully capture the depth and complexity of my thoughts, so I'm incorporating emojis into my speech to better express myself.- Gina Linetti(Brooklyn Nine-Nine)",
        "I'm fine. It's just that life is pointless and nothing matters and I'm always tired.- Andy Dwyer(Parks and Recreation)",
        "Captain Wunch, good to see you. But if you're here who's guarding Hades?- Captain Holt(Brooklyn Nine-Nine)",
        "Sometimes I'll start a sentence and I don't even know where it's going.-Michael Scott(The Office)",
        "Jake, piece of advice: Just give up. It's the Boyle way. It's why our family crest is a white flag.- Charles Boyle(Brooklyn Nine-Nine)",
        "Come on Ross you're a paleontologist. Dig a little deeper.- Phoebe Buffay(Friends)",
        "I appreciate the offer but I work best alone. Except when it comes to sex. Actually, sometimes including sex.- Jake Peralta(Brooklyn Nine-Nine)",
        "I wasn't listening but I strongly disagree- April Ludgate(Parks and Recreation)",
        "I talk a lot, so I've learned to tune myself out.- Kelly Kappor(The Office)",
        "Would you rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.-Michael Scott(The Office)",
        "You think you can just bully people, but you can't. That's not ok. I'm the bully around here. Ask anyone.- Gina Linetti(Brooklyn Nine- Nine)"
    ]},
    "psych thriller" : {"one": [
        "We're so cute. I wanna punch us in the face.- Amy Dunne(Gone Girl)",
        "The first thing my beloved internet gave me was your address.- Joe Goldberg(You)",
        "Unremarkable people don't worry about being unremarkable.- Joe Goldberg(You)",
        "What are you thinking? How are you feeling? What have we done to ech other? What will we do?- Nick Dunne(Gone Girl)",
        "Want to test your marriage for weak spots? Add one recession, subtract two jobs. It's surprisingly effective.- Amy Dunne(Gone Girl)",
        "Jealousy brings out the best in me.- Joe Goldberg(You)",
        "I think my mask of sanity is about to slip.- Patrick Bateman(American Psycho)"
    ]},
    "romcom" : {"one": [
        "I like you very much. Just as you are.-Mark Darcy(Bridget Jones' Diary)",
        "Shortcake if we were flirting, you'd know it.-Joshua Templeman(The Hating Game)",
        "I think I'd miss you even if we'd never met. (The Wedding Date)",
        "But mostly I hate the way I don't hate you. Not even close, not even a bit, not even at all.- Kat(10 Things I Hate About You)",
        "Hating someone feels disturbingly like falling in love with them.- Lucy Hutton(The Hating Game)",
        "Even when you're awful, I would rather be with you, even the you that you seem to think is diminished, than with anyone else in the world.- Louisa Clark(Me Before You)",
        "Psychological warfare. Time to mess with his head.- Lucy Hutton(The Hating Game)",
        "Life is goddamn short and you can't waste a minute of it.- (Friends With Benefits)"
    ]},
    "action" : {"one": [
        "They say your whole life flashes before your eyes when you die. And its true even for a blind man.- Matt Murdock(Daredevil 2013)",
        "We do what we do best. We improvise.- Brian O'Connor(Fast and Furious)",
        "The wheel constantly turns. We must adapt to it's position, or be crushed beneath it.- Madame Gao(Daredevil 2015)",
        "I've been poor my whole life, like a disease passing from generation to generation. But not my boys, not anymore.- Toby Howard(Hell or High Water II)",
        "The future has not been written. There is no fate but what we make for ourselves.- John Connor(The Terminator)",
        "I don't steal from anyone who can't afford it, and I don't hurt anyone who doesn't deserve it.- Parker(Parker)"
    ]}
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');   //__dirname: wherever the current file(server.js) is and find file.
})                                           

app.get('/:query', (req, res)=>{        //: lets us know that query is a query param
    const movieGenre = req.params.query.toLowerCase()
    console.log(movieGenre)
    if(movieQuotes[movieGenre]){
        res.json(movieQuotes[movieGenre])
    }else{
        res.send('Error')
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})