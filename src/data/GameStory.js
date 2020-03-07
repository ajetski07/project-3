
export default [
    {
        id: 1,
        title: "Introduction",
        text: "It’s been five years since the cataclysm. You’ve been etching out a living in what remains of Sacramento. The landscape of skyscrapers and towering structures had been reduced to smoldering piles of rubble from the near daily earthquakes. You’ve scraped by on supplies from various looting runs, but everything seems to be running out. The time to journey east is now. You’ve been modifying an old ford to make the journey, welding on armor and siphoning what gas you can. Before the signal died out last year, you picked up a radio signal repeating the message “Washington D.C. is the last remaining safe zone. For anyone listening, if you can make it here, we can help you.” You could hit the road now, or make one last stop at old Pete’s and buy additional supplies.",
        image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/desert.png",
        options: [
            {
                text: "Leave without visiting the shop.",
                nextText: 1.1,
                action: []

            },
            {
                text: "Visit Old Pete's Shop.",
                nextText: 1.2,
                action: []
            }
        ]
    },
    {
        id: 1.1,
        title: "Introduction",
        text: "You never were good at goodbyes, and Pete’s scavenging skills are as faded as his memory these days. You rev up the engine and begining your journey across US 50.",
        image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/desert.png",
        options: [
            {
                text: "Continue",
                nextText: 3,
                action: []
            }
        ]
    },
    {
        id: 1.2,
        title: "Introduction",
        text: "You decide to visit old Pete one last time and see what he has that might be useful for the long journey.",
        image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/desert.png",
        options: [
            {
                text: "Continue",
                nextText: 2,
                action: []
            }
        ]
    },
    {
        id: 2,
        title: "Welcome to Old Pete's Caravan",
        text: "You enter old Pete’s mobile home, greeted by a familiar but still overwhelming stench. Pete had a way of scavenging and crafting useful supplies, and was one of the few folks out there still accepting paper currency. ‘I still don’t see why you believe in that safezone nonsense,’a gruff voice bellows out from behind his scruffy moustache. But I guess this is goodbye then. Better stock up before you go, anything here you lookin to buy?.",
        image: "",
        options: [
            {
                text: "Would you like to purchase an axe?",
                nextText: 3,
                action: []
            },
            {
                text: "Would you like to purchase food for your travels?",
                nextText: 3,
                action: []
            },
            {
                text: "No thanks I dont need any supplies, today.",
                nextText: 3,
                action: []
            }
        ]
    },
    {
        id: 2.1,
        title: "Introduction",
        text: "You start the engine, wave one last goodbye to Pete, and begin your journey eastward.",
        image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/desert.png",
        options: [
            {
                text: "Continue",
                nextText: 3,
                action: []
            }
        ]
    },
    {
        id: 3,
        title: "Crunch",
        text: "CRRRRUNCH. A sickening crunch echoes under the wheels of your vehicle. Whatever it was may have damaged the chassis. Do you stop and examine or keep driving?.",
        image: "",
        options: [
            {
                text: "Stop and examine?",
                nextText: 3.1,
                action: []
            },
            {
                text: "Keep Driving?",
                nextText: 3.2,
                action: []
            }
        ]
    },
    {
        id: 3.1,
        title: "Crunch",
        text: "You stop the car and shine a light under the body. There’s nothing along the lines of viscera under the car, but you do unwedge a disturbingly long fragment of bone from the axel.",
        image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/desert.png",
        // action: 1,
        // action 1 + bone
        options: [
            {
                text: "Continue",
                nextText: 4,
                action: []
            }
        ]
    },
    {
        id: 3.2,
        title: "Crunch",
        text: "It’s dangerous to stop here, and given the length of the journey you’re sure plenty of things will end up flattened by your tires. Still, every now and then an uncomfortable jolt bumps up from below.",
        image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/desert.png",
        // action: 2,
        // "action 2 -5 fuel"
        options: [
            {
                text: "Continue",
                nextText: 4,
                action: []
            }
        ]
    },
    {
        id: 4,
        title: "Bee",
        text: "On a relatively peaceful day of driving, a bee flies into the car. Even though you roll down all the windows, it refuses to leave the car. What do you do?",
        image: "",
        options: [
            {
                text: "Swat the bee?",
                nextText: 4.1,
                action: []
            },
            {
                text: "Let the Bee be",
                nextText: 4.2,
                action: []
            }
        ]
    },
    {
        id: 4.1,
        title: "Bee",
        text: "With one hand on the wheel, you try and swat the bee away. In instinctively stings you. Ouch.",
        image: "",
        // action: 3
        // action 3 -5 health
        options: [
            {
                text: "Continue",
                nextText: 5,
                action: []
            }
        ]
    },
    {
        id: 4.2,
        title: "Bee",
        text: "The bee comes to a rest on the dashboard. Eventually it flies away, but the company was nice for a moment.",
        image: "",
        // action: 4 +5 health
        options: [
            {
                text: "Continue",
                nextText: 5,
                action: []
            }
        ]
    },
    {
        id: 5,
        title: "Quiet Town",
        text: "While driving, you come across a small roadside town. By the looks of it, the place is totally abandoned",
        image: "",
        options: [
            {
                text: "Loot quickly and keep driving?",
                nextText: 5.1,
                action: []
            },
            {
                text: "Rest for the night?",
                nextText: 5.2,
                action: []
            }
        ]
    },
    {
        id: 5.1,
        title: "Quiet Town",
        text: "You mange to find a few necessities, but the place has been picked clean.",
        image: "",
        // action: 5 +5 money, + 3 gas 
        options: [
            {
                text: "Continue",
                nextText: 6,
                action: []
            }
        ]
    },
    {
        id: 5.2,
        title: "Quiet Town",
        text: "You barricade yourself inside one of the houses for the night. It feels good to sleep somewhere other than the car. You mange to find some useful medicine as well",
        image: "",
        // action: 6 +5 health, + Medicine 
        options: [
            {
                text: "Continue",
                nextText: 6,
                action: []
            }
        ]
    },
    {
        id: 6,
        title: "Heavy Rain",
        text: "A heavy rain begins to pour. The rain looks peculiar, almost thicker than normal. Still, it might be good to stop and refresh your water supply.",
        image: "",
        options: [
            {
                text: "Stop and collect rain?",
                nextText: 6.1,
                action: []
            },
            {
                text: "Keep driving?",
                nextText: 6.2,
                action: []
            }
        ]
    },
    {
        id: 6.1,
        title: "Heavy Rain",
        text: "You stop for a while and collect rain water. However, as you observe in the container, it starts to wiggle on its own. You dump out what you’ve collect and lost a days worth of travel.",
        image: "",
        // action: 7 -5 gas
        options: [
            {
                text: "Continue",
                nextText: 7,
                action: []
            }
        ]
    },
    {
        id: 6.2,
        title: "Heavy Rain",
        text: "You turn on the windshield wipers and speed ahead, the rain sticking more than it should.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 7,
                action: []
            }
        ]
    },
    {
        id: 7,
        title: "Rest Stop",
        text: "You come across an old rest stop along the road. There might still be supplies in the vending machines. Or you could see if there’s any clean water in the lavatories.",
        image: "",
        options: [
            {
                text: "Scavenge food?",
                nextText: 7.1,
                action: []
            },
            {
                text: "Scavenge water?",
                nextText: 7.2,
                action: []
            }
        ]
    },
    {
        id: 7.1,
        title: "Rest Stop",
        text: "You bust open the only untouched vending machine. Looks like somebody already took all the water and granola bars, but you find some stale mini donuts. So that’s fun.",
        image: "",
        // action: 8 + 4 food
        options: [
            {
                text: "Continue",
                nextText: 8,
                action: []
            }
        ]
    },
    {
        id: 7.2,
        title: "Rest Stop",
        text: "Oh god that was a mistake. Some time ago there stopped being people to clean the public restrooms and, oh no.",
        image: "",
        // action: 9 - 5 health
        options: [
            {
                text: "Continue",
                nextText: 8,
                action: []
            }
        ]
    },
    {
        // this event should be a checkpoint in the game and save the game state for the player //
        id: 8,
        title: "Vegas Baby",
        text: "You drive past a collapsed sign, “WELCOME TO FABULOUS LAS VEGAS” but all that remains of the glitz and glamor is a massive, smoldering, hole. A few caravans line the circumference, this might be a good place to stock up on supplies.",
        image: "",
        options: [
            {
                text: "Visit “LUCY’S GAMBLIN HOLE”",
                nextText: 8.1,
                action: []
            },
            {
                text: "Visit “SAFEWAY”",
                nextText: 8.2,
                action: []
            },
            {
                text: "Leave without supplies",
                nextText: 8.3,
                action: []
            }
        ]
    },
    {
        id: 8.1,
        title: "Vegas Baby",
        text: "'The spirit of Lady Luck is still alive, even if everybody else is dead. I’m going to throw this rock into the pit, if it lands red side up, you double your bet, if it lands black side up, I keep your money. What do you say?'",
        image: "",
        // action: 10 bet 5
        // action: 11 bet 10
        // action: 12 bet 25
        options: [
            {
                text: "Bet 5?",
                nextText: 9,
                action: []
            },
            {
                text: "Bet 10?",
                nextText: 9,
                action: []
            },
            {
                text: "Bet 25?",
                nextText: 9,
                action: []
            }
        ]
    },
    {
        id: 8.2,
        title: "Vegas Baby",
        text: "CHRISTOPHER: 'I spelunk into the pit so you don’t have to, and pass the savings on to you! It’s the safe way!'",
        image: "",
        options: [
            {
                text: "Buy Quail?",
                nextText: 9,
                action: []
            },
            {
                text: "Buy bullets?",
                nextText: 9,
                action: []
            },
            {
                text: "Buy Water?",
                nextText: 9,
                action: []
            }
        ]
    },
    {
        id: 8.3,
        title: "Vegas Baby",
        text: "You leave Vegas behind you, setting out for the loneliest road stretch of the journey. The locals warn you, it might not be so lonely anymore.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 9,
                action: []
            }
        ]
    },
    // Continue here.
    {
        id: 9,
        title: "Stargazing",
        text: "While driving across the dessert, the skies part for a moment. You can’t remember the last time you’ve seen the stars. You should focus on the road, but do you take time to look up?",
        image: "",
        options: [
            {
                text: "Stargaze?",
                nextText: 9.1,
                action: []
            },
            {
                text: "Focus on the Road",
                nextText: 9.2,
                action: []
            }
        ]
    },
    {
        id: 9.1,
        title: "Vegas Baby",
        text: "You can’t describe it, but the sky feels wrong. As you dart your focus between the road and the stars, you can’t help but feel like they’re moving. As you focus on the sky, you sense something blink. The cosmos are all wrong, you decide it’s best not to look again.",
        image: "",
        // action: -10 health
        options: [
            {
                text: "Continue",
                nextText: 10,
                action: []
            }
        ]
    },
    {
        id: 9.2,
        title: "Vegas Baby",
        text: "You keep your eyes on the road, even as a tiny voice enters your mind whispering “look…..look…….look”.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 10,
                action: []
            }
        ]
    },
    {
        id: 10,
        title: "The Figure",
        text: "Driving late at night, your headlights begin to flicker. Suddenly, you notice a shadowy, humanoid figure standing in the middle of the road. It’s too late to stop.",
        image: "",
        options: [
            {
                text: "Swerve out of the way?",
                nextText: 10.1,
                action: []
            },
            {
                text: "Ram it!",
                nextText: 10.2,
                action: []
            }
        ]
    },
    {
        id: 10.1,
        title: "Vegas Baby",
        text: "You swerve out of the way at the last minute, burning out offroad. You quickly course correct, but see no sign of the figure in your rearview mirrors.",
        image: "",
        // action: -5 gas
        options: [
            {
                text: "Continue",
                nextText: 11,
                action: []
            }
        ]
    },
    {
        id: 10.2,
        title: "Vegas Baby",
        text: "You accelerate towards the figure, but instead of crashing into it, your car passes right through it. For a moment the figure is in the car with you, a living shadow with its hand on your heart. And then it’s gone, leaving no trace but the bad memory.",
        image: "",
        // action: -10 gas
        options: [
            {
                text: "Continue",
                nextText: 11,
                action: []
            }
        ]
    },
    {
        id: 11,
        title: "The Music",
        text: "While driving across the desert, windows down, the quiet of the night is interrupted by the twangs of rock music. You see a light offroad, if you turn off now, you can find the source of the music.",
        image: "",
        options: [
            {
                text: "Pull off to investigate?",
                nextText: 11.1,
                action: []
            },
            {
                text: "Rollup window and press on?",
                nextText: 11.1,
                action: []
            }
        ]
    },
    {
        id: 11.1,
        title: "Tha Music",
        text: "You turn off the road, following the source of the music. You find a small shack with a rickety broadcast tower. Inside you meet a friendly old man playing old records. He gives you food and fuel to help you on your journey.",
        image: "",
        // action: +10 gas, + 5 food
        options: [
            {
                text: "Continue",
                nextText: 12,
                action: []
            }
        ]
    },
    {
        id: 11.2,
        title: "Tha Music",
        text: "The desert’s done nothing but play tricks on your, there’s no reason to start trusting it now",
        image: "",
        // action: +10 gas, + 5 food
        options: [
            {
                text: "Continue",
                nextText: 12,
                action: []
            }
        ]
    },
    {
        id: 12,
        title: "The Hound",
        text: "While looting inside an abandoned gas station, you realize you aren’t alone. A beastly hound blocks the exit, gnarling its three rows of bloodstained teeth. The only thing that might help is a hefty fire extinguisher nearby.",
        image: "",
        options: [
            {
                text: "Spray the beast with the fire extinguisher?",
                nextText: 12.1,
                action: []
            },
            {
                text: "Pummel the beast with the fire extinguisher?",
                nextText: 12.2,
                action: []
            },
            {
                text: "Throw large bone to the Beast?",
                requiredState: (currentState) => currentState.bone,
                // setState: { bone = false },
                nextText: 12.3,
                action: []
            }
        ]
    },
    {
        id: 12.1,
        title: "The Hound",
        text: "A frothy foam spews out from the extinguisher, blinding the beast. You run past it, barely keeping your balance over the foam. By the time you get back to your car, you realize it managed to deeply scratch you.",
        image: "",
        // action: - 5 heatlh
        options: [
            {
                text: "Continue",
                nextText: 13,
                action: []
            }
        ]
    },
    {
        id: 12.2,
        title: "The Hound",
        text: "You lift the heft of the extinguisher overhead and try to bring it down onto the beast. It dodges out of the way, biting you in the leg. You manage to get a solid hit on it, leaving it stunned enough for you to make it to the car.",
        image: "",
        // action: - 10 heatlh
        options: [
            {
                text: "Continue",
                nextText: 13,
                action: []
            }
        ]
    },
    {
        id: 12.3,
        title: "The Hound",
        text: "You throw the large bone, and the beast instinctively chases it. Your path is clear as it ravenously gnaws at the bone. You manage to grab a handful of supplies as you sneak your way out.",
        image: "",
        // action: + 5 food
        options: [
            {
                text: "Continue",
                nextText: 13,
                action: []
            }
        ]
    },
    {
        id: 13,
        title: "Check Engine",
        text: "While driving, the check engine light turns on. You know it’s not a good idea to keep driving with this thing on.",
        image: "",
        options: [
            {
                text: "Carefully inspect under the hood",
                nextText: 13.1,
                action: []
            },
            {
                text: "Give the car a good kick?",
                nextText: 13.2,
                action: []
            }
        ]
    },
    {
        id: 13.1,
        title: "Check Engine",
        text: "You take a look under the hood. Looks like the issue is thankfully just a loosefuel cap. You solve the issue and keep driving.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 14,
                action: []
            }
        ]
    },
    {
        id: 13.2,
        title: "Check Engine",
        text: "You attempt the old concussive force method of problem solving. You give the car a solid kick, painfully crunching your toes. The light flicks off, but this is going to hurt for a while.",
        image: "",
        // action: - 5 health
        options: [
            {
                text: "Continue",
                nextText: 14,
                action: []
            }
        ]
    },
    {
        id: 14,
        title: "Twilight Park",
        text: "You arrive at Twilight Park, a settlement that rose up in the remains of a once thriving amusement park. The roller coaster’s wooden tracks have totally decayed in some places, and the ferris wheel lies collapsed in the algae infested man-made lake, but the locals have carved out a home here.",
        image: "",
        options: [
            {
                text: "Visit the Fun Store?",
                nextText: 14.1,
                action: []
            },
            {
                text: "Leave Twilight Park?",
                nextText: 15,
                action: []
            }
        ]
    },
    {
        id: 14.1,
        title: "Twilight Park",
        text: "Shopkeep: “Many travellers have ended their journey here, deciding to live out there days in Twilight Park. We well what they no longer need.”",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 15,
                action: []
            }
        ]
    },
    {
        id: 15,
        title: "Fissure",
        text: "While driving, a massive fissure erupts across the road ahead.",
        image: "",
        options: [
            {
                text: "Slam on the brakes?",
                nextText: 15.1,
                action: []
            },
            {
                text: "Slam on the gas?",
                nextText: 15.2,
                action: []
            }
        ]
    },
    {
        id: 15.1,
        title: "Fissure",
        text: "You slam hard on the breaks, everything in the car violently jerks forward. You slam into the steering wheel. The breaks skid, and you stop right before plummeting into the abyss.  The car is fine, but you are bruised up.",
        image: "",
        // action: - 5 health
        options: [
            {
                text: "Continue",
                nextText: 16,
                action: []
            }
        ]
    },
    {
        id: 15.2,
        title: "Fissure",
        text: "You slam on thefuel, jumping the fissure. You make it across, but the car slams hard into the pavement, damaging the body. But you are able to keep driving.",
        image: "",
        // action: -5 gas
        options: [
            {
                text: "Continue",
                nextText: 16,
                action: []
            }
        ]
    },
    {
        id: 16,
        title: "Abandoned Car",
        text: "You come across an abandoned, armored, car similar to yours. The driver’s skeleton is slumped over the steering wheel. It is a reminder that there are others who have tried to make this journey who didn’t make it.",
        image: "",
        options: [
            {
                text: "Loot the Trunk?",
                nextText: 16.1,
                action: []
            },
            {
                text: "Siphon Gas from the Tank?",
                nextText: 16.2,
                action: []
            }
        ]
    },
    {
        id: 16.1,
        title: "Abandoned Car",
        text: "Most of the food has begun to rot, but you manage to find some that’s salvageable. You also find a flashlight.",
        image: "",
        // action: + food, + 10 money, get flashlight
        options: [
            {
                text: "Continue",
                nextText: 17,
                action: []
            }
        ]
    },
    {
        id: 16.2,
        title: "Abandoned Car",
        text: "You successfully siphon fuel from the tank, hopefully it’ll help you get further than this poor soul.",
        image: "",
        // action: + 10 fuel
        options: [
            {
                text: "Continue",
                nextText: 17,
                action: []
            }
        ]
    },
    {
        id: 17,
        title: "Scream",
        text: "Driving through a heavily wooded stretch of road, you hear horrible screaming. Somebody sounds like they are in incredible pain.",
        image: "",
        options: [
            {
                text: "Stop to investigate?",
                nextText: 17.1,
                action: []
            },
            {
                text: "Nope! Keep Driving!",
                nextText: 17.2,
                action: []
            }
        ]
    },
    {
        id: 17.1,
        title: "Scream",
        text: "You pull over and follow the sounds of screams. You come upon an empty clearing, the sound of screams piercing your ears. There’s no one around, but you do find an axe viciously wedged in a tree. You pull the bloodstained ax out and the screams dissipate into the wind.",
        image: "",
        // action: + item axe
        options: [
            {
                text: "Continue",
                nextText: 18,
                action: []
            }
        ]
    },
    {
        id: 17.2,
        title: "Scream",
        text: "The screams continue echoing out. You still hear them as you sleep long after you leave the woods.",
        image: "",
        // action: - 10 health
        options: [
            {
                text: "Continue",
                nextText: 18,
                action: []
            }
        ]
    },
    {
        id: 18,
        title: "Grocer",
        text: "While looting an abandoned grocery store, you hear a noise in the back. You find a survivor holed up here. He looks pretty badly injured, but he has plenty of supplies.",
        image: "",
        options: [
            {
                text: "Rob him?",
                nextText: 18.1,
                action: []
            },
            {
                text: "Leave him be?",
                nextText: 18.2,
                action: []
            },
            {
                text: "Help him?",
                nextText: 18.3,
                action: []
            }
        ]
    },
    {
        id: 18.1,
        title: "Grocer",
        text: "You start stealing his supplies and he attacks! You manage to dispatch the man and steal everything you can carry. But boy you feel bad.",
        image: "",
        // action: + 10 food + 10 money - 10 health
        options: [
            {
                text: "Continue",
                nextText: 19,
                action: []
            }
        ]
    },
    {
        id: 18.2,
        title: "Grocer",
        text: "You leave the man alone. The road has not made you a monster.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 19,
                action: []
            }
        ]
    },
    {
        id: 18.3,
        title: "Grocer",
        text: "You give the man medicine, it should ease the pain a bit. He gives you some supplies as thanks.",
        image: "",
        // action: + 10 food + 10 fuel + 20 money
        options: [
            {
                text: "Continue",
                nextText: 19,
                action: []
            }
        ]
    },
    {
        id: 19,
        title: "The Subway",
        text: "You come across the entrance to an underground subway station. Inside is pitch black, but if there’s anything to loot odds are the darkness dissuaded anybody else from trying.",
        image: "",
        options: [
            {
                text: "Explore the darkness?",
                nextText: 19.1,
                action: []
            },
            {
                text: "Keep Driving?",
                nextText: 19.2,
                action: []
            },
            {
                text: "Use flashlight to explore?",
                nextText: 19.3,
                action: []
            }
        ]
    },
    {
        id: 19.1,
        title: "The Subway",
        text: "You take the steps down into the inky darkness, feeling your way through. Your eyes begin to adjust, but only barely. You trip, stumble, and fall your way around. You grab  what you think might be some supplies, you’ll find out when you reach the light again.",
        image: "",
        // action: + 5 food -5 health
        options: [
            {
                text: "Continue",
                nextText: 20,
                action: []
            }
        ]
    },
    {
        id: 19.2,
        title: "The Subway",
        text: "You know better than to get lost in the dark. You keep driving.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 20,
                action: []
            }
        ]
    },
    {
        id: 19.3,
        title: "The Subway",
        text: "You use your flashlight as a guide into the darkness. You find an old news stand left mostly untouched. You’d go deeper, but strange guttural noises from deeper in the tunnels persuade you otherwise.",
        image: "",
        // action: + 10 food + 20 money
        options: [
            {
                text: "Continue",
                nextText: 20,
                action: []
            }
        ]
    },
    {
        id: 20,
        title: "O'Hare",
        text: "You drive out onto the runway of O’hare airport where a small settlement lives inside a cluster of superliners. Guard turrets poke out of airplane windows.",
        image: "",
        // actio: ,
        options: [
            {
                text: "Shop?",
                nextText: 20.1,
                action: []
            },
            {
                text: "Leave?",
                nextText: 20.2,
                action: []
            }
        ]
    },
    {
        id: 20.1,
        title: "O'Hare",
        text: "“Welcome to the CARGO HOLD!” an old woman flanked by guardsmen bellows out. “Fresh outta peanuts, but  you’ll find all kinds of travellin needs here.”",
        image: "",
        // action: +10 food - 5 money
        options: [
            {
                text: "Purchase Food?",
                nextText: 21,
                action: []
            },
            {
                text: "Purchase Fuel?",
                nextText: 21,
                // action: +10 fuel - 20 money
                action: []
            },
            {
                text: "Purchase Ammo?",
                nextText: 21,
                // action: +10 ammo - 30 money
                action: []
            }
        ]
    },
    {
        id: 20.2,
        title: "O'Hare",
        text: "You start up the car and begin driving down the final stretch of the journey.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 21,
                action: []
            }
        ]
    },
    {
        id: 21,
        title: "Red Rain",
        text: "The skies grow full with deep red clouds. Drops of crimson rain begin to fall, sizzling as they hit your car, dissolving the metal. It looks like the storm will only worsen.",
        image: "",
        options: [
            {
                text: "Outrun the storm?",
                nextText: 21.1,
                // action: -5 food - 5 fuel
                action: []
            },
            {
                text: "Take shelter?",
                nextText: 21.2,
                // action: - 10 food
                action: []
            }
        ]
    },
    {
        id: 21.1,
        title: "Red Rain",
        text: "You slam on thefuel, trying to outrun the storm. You manage to stay ahead of the squall, but red rops still burn through the roof of your car, tainting some supplies.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 22,
                action: []
            }
        ]
    },
    {
        id: 21.2,
        title: "Red Rain",
        text: "You maneuver under the first shelter you can find, a dilapidated overpass.The rain starts pouring down, the stench of dissolving asphalt filling your lungs.  The rain lasts all day, forcing you to use up additional supplies.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 22,
                action: []
            }
        ]
    },
    {
        id: 22,
        title: "Health Checkpoint",
        text: "You come across a group of armed soldiers alongside the road. They claim to be performing health checks on anyone making their way to D.C. They ask you to step out of the car.",
        image: "",
        options: [
            {
                text: "Allow health check?",
                nextText: 22.1,
                // action: -15 health - 15 food
                action: []
            },
            {
                text: "Skip health check, floor it!",
                nextText: 22.2,
                // action: - 5 fuel
                action: []
            }
        ]
    },
    {
        id: 22.1,
        title: "Health Checkpoint",
        text: "The men reveal themselves to be bandits, rough you up, and steal most of your food.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 23,
                action: []
            }
        ]
    },
    {
        id: 22.2,
        title: "Health Checkpoint",
        text: "Smelling a trap, you slam on the gasl. A few stray bullets pierce your car but you escape mostly unharmed.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 23,
                action: []
            }
        ]
    },
    {
        id: 23,
        title: "OH NO",
        text: "While looting inside an old house, you start to hear the sound of a creepy little girl singing. Ah jeez. You turn around and, yep, that’s a scary ass little girl in a white dress being all creepy. Oh this is bad. What is even happening. The walls start to melt.",
        image: "",
        options: [
            {
                text: "Run Away?",
                nextText: 23.1,
                // action: - 5 health
                action: []
            },
            {
                text: "Fly Away?",
                nextText: 23.2,
                // action: + 5 health
                action: []
            }
        ]
    },
    {
        id: 23.1,
        title: "OH NO",
        text: "You run down the halls, the exit getting further and further away. The singing gets louder, soon your teeth all fall out. And you’re in highschool again and….You wake up. The nightmare prevented you from getting restful sleep, you drive groggy.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 23,
                action: []
            }
        ]
    },
    {
        id: 23.2,
        title: "OH NO",
        text: "You realize that even though a lot of weird things have been happening, this is definitely a dream. You manage to fly away before waking up, feeling well rested.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 23,
                action: []
            }
        ]
    },
    {
        id: 24,
        title: "Winter is Coming",
        text: "While looting, fine white powder starts falling from the sky, landing in neat piles alonsite. A wintery sort of landscape begins to form.",
        image: "",
        options: [
            {
                text: "Try catching some on your tongue",
                nextText: 24.1,
                // action: -5 health
                action: []
            },
            {
                text: "Get back to the car",
                nextText: 24.2,
                action: []
            }
        ]
    },
    {
        id: 24.1,
        title: "Winter is Coming",
        text: "You try catching some flakes on your tongue, but the white specs feel warm on touch. What you thought was snow turns out to be ash. You cought and sputter, making your way back to the car.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 25,
                action: []
            }
        ]
    },
    {
        id: 24.2,
        title: "Winter is Coming",
        text: "You get back to the car and keep driving, the windshield wipers swiping the ash from your windshield.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 25,
                action: []
            }
        ]
    },
    {
        id: 25,
        title: "The Home Stretch",
        text: "The large concrete barrier surrounding D.C. appears on the horizon. You’re within miles of your destination. Suddenly, your car starts to sputter, black smoke begins billowing from the hood.",
        image: "",
        options: [
            {
                text: "Keep driving",
                nextText: 25.1,
                // action: -10 health
                action: []
            },
            {
                text: "Make a run for it",
                nextText: 25.2,
                // action: - 5 health
                action: []
            }
        ]
    },
    {
        id: 25.1,
        title: "The Home Stretch",
        text: "The car just has to last for a few more minutes, you can’t stop now. Black smoke starts filling the vehicle. Before you know it, you’ve crashed into the gates of D.C.",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 26,
                action: []
            }
        ]
    },
    {
        id: 25.2,
        title: "The Home Stretch",
        text: "You leave some supplies, but that’s not important. You run, body exhausted from driving, the car starts burning behind you. You’re can see the entrance gates…",
        image: "",
        options: [
            {
                text: "Continue",
                nextText: 26,
                action: []
            }
        ]
    },

]