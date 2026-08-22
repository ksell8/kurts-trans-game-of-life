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
                console.log("You are one of the rare trans youths who will get their puberty blockers and HRT in time.")
                console.log("Congrats on your persistence.")
            }
            else{
                whatchaSay = "NO!"
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
    setSoyTransResponse(whatchaSay)
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
    if((physicalHealth <= 0 || mentalHealth <= 0)){
        let age = getAge()
        if(age > 69){
            document.body.innerHTML ="<h1 style='width: 100vw;'>You lived to old age!  Now isn't that special :), I'm sure you touched many a trans person in your time.</h1><img src='imgs/wisen.png' alt='Back in my day, they used to label us female and male at birth.'>"
        }
        else if(age === 27) {
            const people = ['imgs/jean-michelbasquiat.png','imgs/jim-morrison.png','imgs/kurdt.png']
            let person = Math.floor(Math.random()*2)
            document.body.innerHTML = "<h1 style='width: 100vw;'>You lost the game, but are a part of the 27 club.  Which is pretty fucking cool.</h1><img src="+people[person]+">"
        }
        else{
            document.body.innerHTML = "<h1 style='width: 100vw;'>You drank too much luna juice and forgot who you are.  Refresh to try again.</h1><img src='imgs/mrmelancholy.png' alt='Mr. Melancholy Poorly drawn by Kurdt'>"
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
    newElement.innerText = response
    responseDoc.appendChild(newElement)
}

function how_i_learned_to_stop_worrying_and_love_the_bomb(){
    num_of_times_pushed_truth+=1
    trans_people_dont_know_theyre_trans_but_cis_people_can_know_theyre_cis()
}

// i didn't know
function growUp(){
    setAge(getAge()+1)
    mentalHealthCheckIn()
    physicalHealthCheckIn()
    moniesCheckIn()
    isUDead()
}


function setAge(age){
    document.getElementById("age").innerHTML = age;
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

// generational wealth
// The things we only say behind closed doors
console.log("You have found the things we say behind closed doors.")
console.log("You come out of a womb.  A doctor inspects you genitals quickly.  They assign you a cis gender marker and proceed about their day.  Unfortunately for you.  You are trans, this is life....life in the cis supremacy :).")

function generational_wealth(){
    if(fakeItTillYaMakeIt===100){
        console.log("Congratulations! Your father is Elon Musk.  You will have endless money unless you come out as trans.  Then you will be disowned.  You will still have quite a lot of money afterwards, because you are still famous for being His child.");
        elon = true;
        rich = true;
        setMonies(1000000000);
        //birthday money
        birthday_money = 1000;
    }else if(fakeItTillYaMakeIt>=50){
        // this is me
        console.log("Congratulations! You are a spoiled rotten rich kid.  You'll get to go to college for free, so you'll spend any money you do make on ridiculous shit while your friends are just tryna eat.  As long as you pay a modicum of attention and/or kiss ass you will be worthy of shelter and food in adulthood (have money).");
        rich = true;
        setMonies(1000);
        birthday_money = 100;
    }else if(fakeItTillYaMakeIt<=50){
        console.log("Congratulations! Not going to lie kid, this shit will be rough, your parents ain't got a whole lot.  But you're cool and you have a story to tell, and that's important, you're important.  Never let anyone let you feel otherwise.");
        rich = false;
        setMonies(0);
        birthday_money = 20;
    }
}

// u got one shot cabrón
generational_wealth()

console.log("Since you have found this place, you can run i_am_enlightened() at any point to increase your chances of coming out as trans, but also decreasing your overall chances of mental health for life.")
console.log("As mental health is intrinsically tied to physical health, you'll probably die sooner too :).  ¿Isn't life wonderful?")

function i_am_enlightened(){
    times_you_push_truth_to_get_support = 100
    mental_health_handicap = -1

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