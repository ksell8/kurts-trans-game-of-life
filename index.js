// snake and camel case in one file is killing me, but sure, this is art ;//////sdjifoajsdofij;das;lfjadskl;hj;oghqewourhgbidhsz;bghkjdsah;goijds'a
// which one is it supposed to be?  I don't know, I don't write javascript :P
// you see, I'm autistic, so if I don't work with linters....things become outta whack
// like people don't like that shit in industry wack
// but they also don't pay the fuck attention to me
// like one time I went and made Brahman a stand in for everything and no one read it -- we went live
// I guess I'm a little hard to review to tell the truth
// My code is often huge
// I can't go live with one little thing
// I have to go live with every possible thing that this one little thing could one day become in the future
// you see, that makes it so I can stand up new future things really fast
// but it makes me hard to review
// and being outta whack makes it harder to review (me entiendes)
// and I guess all those industry fucks can go fuck themselves because they can't understand me no matter how I write
// and I like to write like this
let num_of_times_pushed_truth = 0
let is_out = false
let has_support = false
let fakeItTillYaMakeIt = Math.floor(Math.random()*100)
let elon = false
let rich = false
let times_you_push_truth_to_get_support = 1000
let mental_health_handicap = 0
let base_salary = 0
let birthday_money = 0
/*
    I suppose since I left that long ass comment above about how I write code
    I should also document what this is about

    I suppose I'm a bit confused why the world sucks so much

    I'm a trans man and a year after I came out I was paralyzed from the
    chest down because I had a set of blood tubes get crossed in my spine and it
    burst.  So I never really had the chance to experience my body as myself.

    I guess that's made me a bit salty.  A bit salty for missing my life.

    So I've created this paradox of a mindfuck.

    In which you can choose to get older, thus losing precious moments
    of your life, but also getting closer to the time in which everyone
    stops giving and absolute fuck about you, so you're free to be whoever you want.

    There's probably an ideal way to play the game.  It helps if you open the console.

    You at least know what you're up against.

    I don't really know where the conditions I put on this game came from.
    I was kinda high and I just put what I put.

    I imagine if you change the values, you get a new game of life.
    I really like Conway's.

    I like it because someone told me that emergent behavior of conways suggests that
    seemingly deterministic rules can create randomness.

    I don't like free will.  I've been beaten to near death by the seemingly random
    consequences of the universe.  But, if I had free will, that means I could've done something
    to avoid my shitty fate.  And that makes me more sad than living in the hell that was forced upon me.

    Whenever I tell people they don't have free will, they seem to believe I'd be able to predict their future.
    But determinism does not entail omniscience.
    There are really n different variables that go into the mental and physical health of a human being.
    I decided to focus on gender and money.  The money maths aren't mathing right now, you only ever really make money.
    But there is an American dream of sorts.

    I do find this to be more accurate to our experience than Conway's life.  In Conway's you choose the start state
    of the universe and let it run.  But, we don't choose our start.  And our start binds our choices, until we really have none.
 */

function trans_people_dont_know_theyre_trans_but_cis_people_can_know_theyre_cis(){
    let whatchaSay
    let age = getAge()
    let response
    if(is_out){
        let howTheyFeeling = Math.random()
        if(howTheyFeeling > 0.45 || has_support){
            whatchaSay = "Cool dude, that's awesome."
        }
        else{
            whatchaSay = "I DON'T NEED TO KNOW THAT."
        }
        if(num_of_times_pushed_truth>times_you_push_truth_to_get_support && !has_support)
        {
            has_support = true
        }
    }
    else{
        if(age < 18){
            if(num_of_times_pushed_truth>times_you_push_truth_to_get_support){
                whatchaSay = "Cool, that's awesome. I believe you.  Let's make it happen."
                is_out = true
                has_support = true
                setIsOutOnBoard()
                console.log("You are one of the rare trans youths who will have the option to get their puberty blockers and HRT in time.")
                console.log("Congrats on your persistence.")
            }
            else{
                response = negativeUnder18()
            }
        }
        else{
            if(num_of_times_pushed_truth>times_you_push_truth_to_get_support){
                whatchaSay = "Cool, that's awesome. I believe you.  Thanks for telling me."
                has_support = true
                console.log("You came out way too late for puberty blockers bro, but you are now out and have support.")
            }
            else{
                whatchaSay = "Sure, weirdo."
            }
            is_out = true
            setIsOutOnBoard()
        }
    }
    if(!response){
        response = {"text":whatchaSay}
    }
    setSoyTransResponse(response)
}

function negativeUnder18(){
    const mean_things = {
        0: [
            {
                "text": "Mother, they're still not sure it is a baby!",
                "image": {
                    "alt": "Eraserhead baby",
                    "src": "imgs/eraserhead.png",
                    "classes":[],
                }
            },
            {
                "text": "Our beautiful baby girl.",
                "image": {
                    "alt": "Crying cat",
                    "src": "imgs/crying.jpg",
                    "classes":[],
                }
            },
            {
                "text": "You're born naked and everything you put on after that is drag. - RuPaul"
            }
        ],
        1: [
            {
                "text": "Mother, they're still not sure it is a baby!",
                "image": {
                    "alt": "Eraserhead baby",
                    "src": "imgs/eraserhead.png",
                    "classes":[],
                }
            },
            {
                "text": "Our beautiful baby girl.",
                "image": {
                    "alt": "Crying cat",
                    "src": "imgs/crying.jpg",
                    "classes":[],
                }
            },
            {
                "text": "You're born naked and everything you put on after that is drag. - RuPaul"
            }
        ],
    }

    const age = getAge()
    const current_mean_things = mean_things[age]
    if(current_mean_things){
        const randomizer = Math.floor(Math.random()*(current_mean_things.length))
        return current_mean_things[randomizer]
    }
    return {"text":"NO!"};
}

function physicalHealthCheckIn(){
    console.log("Time to check in on your physical health.  You know what that means :). IF your mental heath is less than 50 you're probably going to start to have internal organ failure soon.")
    let mentalHealth = getMentalHeath()
    let physicalHealth = getPhysicalHealth()

    let age = getAge()
    if(mentalHealth < 50){
        physicalHealth = physicalHealth - Math.floor(Math.random()*10)
    }
    if(age > 50){
        physicalHealth = physicalHealth - Math.floor(Math.random()*5)
    }
    setPhysicalHealth(physicalHealth)
}

function isUDead(){
    let physicalHealth = getPhysicalHealth()
    let mentalHealth = getMentalHeath()

    if((physicalHealth <= 0 || mentalHealth <= 0 )){
        const game_play = document.getElementById("game_play")
        game_play.hidden = true
        game_play.ariaHidden = "true"
        const game_buttons = document.getElementById("button_panel")
        game_buttons.hidden = true
        game_buttons.ariaHidden = "true"
        const game_over = document.getElementById("game_over")
        game_over.hidden = false
        game_over.ariaHidden = "false"

        let age = getAge()
        if(age > 69){
            add_h1(game_over, "You lived to old age!  Now isn't that special :), I'm sure you touched many a trans person in your time.")
            add_image(game_over, 'imgs/wisen.png', 'Back in my day, they used to label us female and male at birth.', window.innerWidth * 0.75)
        }
        else if(age === 27) {
            const people = ['imgs/jean-michelbasquiat.png','imgs/jim-morrison.png','imgs/kurdt.png']
            let person = Math.floor(Math.random()*2)
            add_h1(game_over, "You lost the game, but are a part of the 27 club.  Which is pretty fucking cool.")
            add_image(game_over, people[person], '', window.innerWidth * 0.75)
        }
        else{
            add_h1(game_over, "You drank too much luna juice and forgot who you are.  Refresh to try again.")
            add_image(game_over, 'imgs/mrmelancholy.png', 'Mr. Melancholy Poorly drawn by Kurdt', window.innerWidth * 0.75)
        }
        return true
    }
    return false
}

function setMentalHealth(value){
    document.getElementById("mental_health").value = value
}

function setPhysicalHealth(value){
    document.getElementById("physical_health").value = value
}

function getPhysicalHealth(){
    return document.getElementById("physical_health").value
}

function getMentalHeath(){
    return document.getElementById("mental_health").value
}

function setIsOutOnBoard(){
    document.getElementById("out").innerHTML = "YES"
}

function moniesCheckIn(){
    let monies = getMonies()
    let age = getAge()
    if(monies >= 1000000000 && !rich){
        rich = true
        console.log("Congratulations, you are a self made person.  Much more than I can say for myself.")
    }
    if(age > 15){
        if(rich){
            base_salary = 6240
        }else{
            //what's the point in the conditional
            //the fucking comment sir :)
            //same base minimum wage salary, but you work more hours to also pitch in on dinner
            base_salary = 6240
        }
    }
    else if(age === 18){
        if(rich){
            base_salary = 62400
        }else{
            //honey you actually got the same base, but you also got student loans and I'm not tryna calculate interest
            //because I don't wanna calculate interest, I'm doing this
            base_salary = 32200
        }
    }
    else if(age > 18){
        let increase_in_pay
        if(is_out && !has_support){
            // didn't click that button enough and you're fucked
            increase_in_pay = -100
        }
        else{
            increase_in_pay = 2000
        }
        base_salary = base_salary + increase_in_pay
        if(rich){
            times_you_push_truth_to_get_support -= 50
        }
    }
    setMonies(monies+birthday_money+base_salary)

}

function mentalHealthCheckIn(){
    console.log("Time to check in on your mental health.  You know what that means :).  If you aren't out you probably hate yourself because you feel like a pathological liar.")
    let base
    let physicalHealth = getPhysicalHealth()
    let mentalHealth = getMentalHeath()
    if(physicalHealth > 50){
        if(is_out) {
            base = 5
            if(!has_support){
                // this is unfair
                base = -8
                if(rich){
                    base = 1
                }
            }
            else{
                if(!rich){
                    base = 3
                }
            }
        }
        else{
           base = -5
        }
    } else{
        if(is_out){
            base = -5
            if(!has_support){
                base = -10
                if(rich){
                    base = -3
                }
            }else{
                if(!rich){
                    base = -8
                }
            }
        }
        else{
            base = -10
        }
    }
    base = base + mental_health_handicap
    let points = Math.floor(Math.random()*base)
    setMentalHealth(mentalHealth+points)
}

function setSoyTransResponse(response){
    let responseDoc = document.getElementById("soy_trans_response")
    let newElement = document.createElement("p")
    if(response.image){
        add_image(responseDoc, response.image.src, response.image.alt, 100, response.image.classes)
    }
    newElement.innerText = response.text
    responseDoc.appendChild(newElement)
    newElement.scrollIntoView({behavior: "smooth", block: "start"})
}

function how_i_learned_to_stop_worrying_and_love_the_bomb(){
    num_of_times_pushed_truth+=1
    setTruth(num_of_times_pushed_truth)
    trans_people_dont_know_theyre_trans_but_cis_people_can_know_theyre_cis()
}

// i didn't know
function growUp(){
    const age = getAge()
    setAge(age+1)
    mentalHealthCheckIn()
    physicalHealthCheckIn()
    moniesCheckIn()
    isUDead()
    if(age >= 5 && age <=15 && mental_health_handicap !== -1){
        const soyTrans = document.getElementById("soy_trans")
        soyTrans.innerText = "I am a boy"
    }else if(age > 15 && mental_health_handicap !== -1){
        const soyTrans = document.getElementById("soy_trans")
        soyTrans.innerText = "I am trans"
        times_you_push_truth_to_get_support = 420
    }

}


function setAge(age){
    document.getElementById("age").innerHTML = age;
}

function setTruth(truth){
    document.getElementById("truth").innerHTML = truth;
}

function getAge() {
    return parseInt(document.getElementById("age").innerHTML);
}

function setMonies(monies){
    document.getElementById("monies").innerHTML = monies;
}

function getMonies(){
    return parseInt(document.getElementById("monies").innerHTML);
}

function generational_wealth() {
    if (fakeItTillYaMakeIt === 100) {
        console.log("Congratulations! Your father is Elon Musk.  You will have endless money unless you come out as trans.  Then you will be disowned.  You will still have quite a lot of money afterwards, because you are still famous for being His child.");
        elon = true;
        rich = true;
        setMonies(1000000000);
        //birthday money
        birthday_money = 1000;
    } else if (fakeItTillYaMakeIt >= 50) {
        // this is me
        console.log("Congratulations! You are a spoiled rotten rich kid.  You'll get to go to college for free, so you'll spend any money you do make on ridiculous shit while your friends are just tryna eat.  As long as you pay a modicum of attention and/or kiss ass you will be worthy of shelter and food in adulthood (have money).");
        rich = true;
        setMonies(1000);
        birthday_money = 100;
    } else if (fakeItTillYaMakeIt <= 50) {
        console.log("Congratulations! Not going to lie kid, this shit will be rough, your parents ain't got a whole lot.  But you're cool and you have a story to tell, and that's important, you're important.  Never let anyone let you feel otherwise.");
        rich = false;
        setMonies(0);
        birthday_money = 20;
    }
}

opening()

function i_am_enlightened(){
    times_you_push_truth_to_get_support = 100
    mental_health_handicap = -1

    const soyTrans = document.getElementById("soy_trans")
    soyTrans.innerText = "I am trans"


    console.log("you can keep calling this shit to get hidden state internals")
    console.log("rich "+rich)
    console.log("has_support "+has_support)
    console.log("num_of_times_pushed_truth "+num_of_times_pushed_truth)
    console.log("times_you_push_truth_to_get_support "+times_you_push_truth_to_get_support)
    console.log("spawn_of_satan "+elon)
    console.log("mental_health_handicap "+mental_health_handicap)
    console.log("birthday_money "+birthday_money)
    console.log("base_salary "+base_salary)
    console.log("fake_it_to_you_make_it (needed 50 or greater to be rich) "+fakeItTillYaMakeIt)
}

function trump_scare(){
    const game_opening = document.getElementById("game_opening")
    const trump = document.createElement("img")
    trump.src = "./imgs/diablo.jpg"
    trump.alt ="El Jefe/El Diablo"
    game_opening.appendChild(trump)
    const gender_insanity = new Audio('./sound/gender-insanity.mp3')
    gender_insanity.play()
    setTimeout(()=>{trump.remove(); play_on();},6000)
}

function play_on(){
    const game_prelude = document.getElementById("game_prelude")
    game_prelude.hidden = true
    game_prelude.ariaHidden = "true"
    const game_opening = document.getElementById("game_opening")
    game_opening.hidden = true
    game_opening.ariaHidden = "true"
    const game = document.getElementById("game_play")
    game.hidden = false
    game.ariaHidden = "false"
    const button_panel = document.getElementById("button_panel")
    button_panel.hidden = false
    button_panel.ariaHidden = "false"
    const stats_panel = document.getElementById("stats_panel")
    stats_panel.hidden = false
    stats_panel.ariaHidden = "false"
    // u got one shot cabrón
    generational_wealth()

    // The things we only say behind closed doors
    console.log("You have found the things we say behind closed doors.")
    console.log("You come out of a womb.  A doctor inspects you genitals quickly.  They assign you a cis gender marker and proceed about their day.  Unfortunately for you.  You are trans, this is life....life in the cis supremacy :).")
    console.log("Since you have found this place, you can run i_am_enlightened() at any point to increase your chances of coming out as trans, but also decreasing your overall chances of mental health for life.")
    console.log("As mental health is intrinsically tied to physical health, you'll probably die sooner too :).  ¿Isn't life wonderful?")
}

function i_fucking_hate_being_alive(){
    const game_opening = document.getElementById("game_opening")// why am I not using camel case WHY DOES IT MADDER (I like it more than the t's right now, this game is making me mad)
    // i get knocked down but i get up again
    // pissing the night away
    const scary_text = [
        "Welcome to the Cis Supremacy!",
        "Your life will be underwhelmingly absurd.",
        "From now on everyone in your life will assume you are a girl.",
        "You are actually a trans male.",
        "They will place expectations on you in line with patriarchal femininity.",
        "You won't notice at first.",
        "But it'll soon be undeniable.",
        "You aren't treated like the other boys.",
        "You won't have the words to say who you are.",
        "No one will tell you trans people exist.",
        "That knowledge is considered unsuitable for kids in this place.",
        "In this game you can choose to get older.",
        "To get older is to become more knowledgeable & gain autonomy.",
        "Thus making it easier to be taken seriously as a trans person.",
        "But getting older also takes a toll.",
        "And getting older while living a lie takes an even bigger toll.",
        "So be careful getting older without speaking your truth.",
        "That is, in whatever capacity you have to speak it.",
        "The truth can come out in any number of ways.",
        "Wanting to be a boy in the school play.",
        "Pitching a fit when someone puts you in a dress.",
        "(I quite like dresses now, no PANTS.)",
        "Playing house and always being the dad.",
        "One thing is for sure.",
        "Pretending to be someone who you are not in order to please an unaccepting world",
        "will only make you sad......",
        "sad until you",
        "DIE"
    ]
    let i = 0
    for(const text of scary_text){
        let h1Element;
        setTimeout(() => {
            h1Element = add_h1(game_opening,
                text,
                ["devil", "typewriter"]);
        },
            i*5000)
        i++;
        setTimeout(() => {
            h1Element.remove();
        }, i*5000)
    }
}

function austin_powers(video){
    video.hidden = true;
    video.ariaHidden = true;
    const sound = new Audio('sound/Halloween.mp3');
    sound.play();
    i_fucking_hate_being_alive();
    setTimeout(()=>{trump_scare();}, 139000)
}

function you_gotta_be_fucking_kidding(){
    const opener = document.getElementById("game_prelude");
    opener.hidden = true;
    opener.ariaHidden = "True";
    const game_opening = document.getElementById("game_opening");
    game_opening.hidden = false;
    game_opening.ariaHidden = "false";
    window.scrollTo({top: 0, behavior: "smooth"});
    const video = document.getElementById("intro-video");
    video.play()
    setTimeout(()=>{austin_powers(video);}, 4000)
}

function add_h1(element, innerText, classes){
    const h1 = document.createElement("h1")
    h1.innerText = innerText
    if(classes){
        h1.classList.add(...classes)
    }
    element.appendChild(h1)
    h1.scrollIntoView({behavior: "smooth", block: "start"})
    return h1
}

function add_button(element, text, action, params, classes){
    const button = document.createElement("button")
    if(classes){
        button.classList.add(...classes)
    }
    button.innerText = text
    button.addEventListener('click', () => {
        action(...params, button)
    });
    element.appendChild(button)
    button.scrollIntoView({behavior: "smooth", inline: "start", block: "nearest"})
    return button
}

function add_image(element, image_source, alt_text, width= 100, classes=[]){
    const image = document.createElement("img")
    image.alt = alt_text
    image.src = image_source
    image.width = width
    if(classes){
        image.classList.add(...classes)
    }
    element.appendChild(image)
    image.scrollIntoView({behavior: "smooth", block: "start"})
    return image
}

// TODO: add a static, visually-hidden block of text containing the full
// intro narration up front, then mark the dynamically added elements below (and other
// add_h1/add_image/add_button calls throughout this file) as aria-hidden so screen readers
// get the whole intro at once instead of piecemeal as it's typed/appended.
// TODO: test with a screen reader and a friend who should use a screen reader but doesn't and can't see the fucking screen
// I think the text will have to change.  Just make the background not see through
// This is a must do before I show anyone
function opening(index=0, source){
    if(source){
        source.disabled = true
        if(source.innerText === "Cry"){
            const cry = new Audio('sound/baby-crying.mp3');
            cry.play();
        }else if(source.innerText !== "You gotta be fucking kidding"){
            const nope = new Audio('sound/Nope.mp3');
            nope.play();
        }
    }
    const game_prelude = document.getElementById("game_prelude");
    const intro = [
        {
            "text":"You are born a boy.",
            "classes":["typewriter"],
            "button":{
                "text": "Cry",
                "action": opening,
                "params": [1],
                "classes": ["pretty"]
            }
        },
        {
            "text":"A doctor checks out your junk....",
            "classes":["typewriter"],
            "button":{
                "text": "BRO WUT",
                "action": opening,
                "params": [2],
                "classes": ["darks"]
            }
        },
        {
            "text":"It's small.............................",
            "classes":["typewriter"],
            "button":{
                "text": "Fuck you mean it's small, I'm a fucking baby",
                "action": opening,
                "params": [3],
                // soy darks
                "classes": ["darks"]
            }
        },
        {
            "text":"Bro, shit's non existent, the doctor pronounces you female.",
            "classes":["typewriter"],
            "button":{
                "text": "Cry",
                "action": opening,
                "params": [4],
                "classes": ["pretty"]
            }
        },
        {
            "text":"Your parents take you home and begin to groom you to be a woman.",
            "classes":["typewriter"],
            "button":{
                "text": "You gotta be fucking kidding",
                "action": opening,
                "params": [5],
                "classes": ["pretty"]
            }
        }
    ]
    if(index < intro.length){
        add_h1(game_prelude,intro[index].text,intro[index].classes);
        setTimeout(() => {
            add_button(game_prelude,
                intro[index].button.text,
                intro[index].button.action,
                intro[index].button.params,
                intro[index].button.classes);
            },
            1000*4
        )
    }else{
        you_gotta_be_fucking_kidding();
    }
}