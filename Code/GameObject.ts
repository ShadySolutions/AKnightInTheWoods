export { DefaultGameObject }

let DefaultGameObject:any =
{
    Characters:
    [
        {
            Name:"Rabbit",
            Chats:
            [
                {
                    Text: "...",
                    Options:
                    [
                        {
                            Text: "How do you do, kind sir",
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Greetings, m'lady!",
                            Locked: false,
                            Link: 1
                        }
                    ]
                },
                {
                    Text: "Did you just assume my gender?!.",
                    Options:
                    [
                        {
                            Text: "Uhh... sorry.",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Raccoon",
            Chats:
            [
                {
                    Text: "Top of the morning, good sir![Rubbing his hands nervously].",
                    Options:
                    [
                        {
                            Text: "My good man, you do seem concerned. What worries you this fine day, may i ask?.",
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Out of my way scoundrel.",
                            Locked: false,
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "A large wager lost i am afraid... and with the sum at lost my chance to purchase my freedom. But Theft! -I'd never. 'Tis mighty refreshing not to be judged upon. I wish you the best of luck, good sir.",
                    Options:
                    [
                        {
                            Text: "Good luck!",
                            Locked: false,
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "You'd better watch your tongue, stranger... you may come to find that knights aren't all that safe in these woods...[Turns away]",
                    Options:
                    [
                        {
                            Text: "...",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Wolf",
            Chats:
            [
                {
                    Text: "A body of an old canine lies on the grass on its stomach. He is wearing a fancy plate armor, which looks very shiny and festive. His cape looks quite expensive.",
                    Options:
                    [
                        {
                            Text: "Turn him around",
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Leave",
                            Locked: false,
                            Link: -1
                        }
                    ]
                },                
                {
                    Text: "You can see he probably died of puncture wounds. He still reaks of alcohol.",
                    Options:
                    [
                        {
                            Text: "Examine face",
                            Locked: false,
                            Link: 2
                        },
                        {
                            Text: "Examine arms",
                            Locked: false,
                            Link: 3
                        },
                        {
                            Text: "Examine torso",
                            Locked: false,
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "He is middle aged wolf with sharp fangs the look in his eyes is surprised. He still reaks of alcohol.",
                    Options:
                    [
                        {
                            Text: "Continue examining",
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Leave",
                            Locked: false,
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "There is mix of blood and skin under his claws, he was a strong wolf.",
                    Options:
                    [
                        {
                            Text: "Continue examining",
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Leave",
                            Locked: false,
                            Link: -1
                        }
                    ]
                },
                {
                    Text: "You see two puncture wounds between plates under his armpit.",
                    Options:
                    [
                        {
                            Text: "Continue examining",
                            Locked: false,
                            Link: 1
                        },
                        {
                            Text: "Leave",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Fox",
            Chats:
            [
                {
                    Text: "Sorry, can't talk. Now... where is my lucky arrow?",
                    Options:
                    [
                        {
                            Text: "...",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Bob",
            Chats:
            [
                {
                    Text: "Curses! *sobs*",
                    Options:
                    [
                        {
                            Text: "What happened here?",
                            Locked: false,
                            Link: 1
                        }                       
                    ]
                },
                {
                    Text: "Our dear master here was brutally... murdered during the night.",
                    Options:
                    [
                        {
                            Text: "[continue listening]",
                            Locked: false,
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "We blame ourselves... After a few ales, our master went to mark a tree... we were too drunk to hear something was wrong.",
                    Options:
                    [
                        {
                            Text: "Surely, this is not your fault...",
                            Locked: false,
                            Link: 3
                        }
                    ]
                },
                {
                    Text: "He was only eight years old.",
                    Options:
                    [
                        {
                            Text: "My condolences, wolves. This must truly be a sad day for you.",
                            Locked: false,
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "Thank you for your words of kindness, stranger.",
                    Options:
                    [
                        {
                            Text: "[continue traveling]",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Jim",
            Chats:
            [
                {
                    Text: "Why, Animal God, why?",
                    Options:
                    [
                        {
                            Text: "What happened here?",
                            Locked: false,
                            Link: 1
                        }                       
                    ]
                },
                {
                    Text: "What kind of an animal would do a thing like this? He was a great champion, most beloved and a crowd favourite... *howls*",
                    Options:
                    [
                        {
                            Text: "[continue listening]",
                            Locked: false,
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "We blame ourselves... After a few ales, our master went to mark a tree... we were too drunk to hear something was wrong.",
                    Options:
                    [
                        {
                            Text: "Surely, this is not your fault...",
                            Locked: false,
                            Link: 3
                        }
                    ]
                },                
                {
                    Text: "Thank you for your words of kindness, stranger.",
                    Options:
                    [
                        {
                            Text: "[continue traveling]",
                            Locked: false,
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "One thing - we don't know who did this, but I think I saw something dark and unsightly sneaking around the moment we arrived at the scene. Beware, knight. Evil is surely at work here.",
                    Options:
                    [
                        {
                            Text: "Thanks for the head up. Stay strong.",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Owl",
            Chats:
            [
                {
                    Text: "Fine knight, Sir Acorn of Hazelgrove, we are proud to welcome you to our land. I have heard much about your great fighting skills, your brave heart and your quick wit. Your visit is a joyous occasion for us. However, not all is so full of joy in this land. As you may have heard, our greatest champion deceased last night under mysterious circumstances. Say, on your honor and valor, would you help us solve this mystery? The good Duke Howl was much envied around these parts, and you, who only arrived now, couldn’t have possibly done it.",
                    Options:
                    [
                        {
                            Text: "I accept your quest, honorable judge, May I ask you a few questions to aid me in this quest?",
                            Locked: false,
                            Link: 1
                        }                    
                    ]
                },
                {
                    Text: "Please, do.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Duke Howl?",
                            Locked: false,
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "He was a brave knight and a true champion. However, as any successful man, false news about him travelled fast and there were many rumours… That no one would testify to.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Oonie de Racko? ",
                            Locked: false,
                            Link: 3
                        }
                    ]
                },
                {
                    Text: "He is but a petty thief and a rascal. We’ve put him on probation to give him a chance to purchase his freedom, but he wasted all his belongings betting against Duke Howl. The favourite! Can you imagine all that, just for the quota? Dirty gambler…",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Aristurtle? ",
                            Locked: false,
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "He is the oldest and wisest man I know. Aristurtle has been competing in this tournament since the very beginning, a hundred years ago. Hasn’t won a single one yet! But in his own words – slow and steady wins the race.",
                    Options:
                    [
                        {
                            Text: "How about… errrrm… Carrot?",
                            Locked: false,
                            Link: 5
                        }
                    ]
                },
                {
                    Text: "Carrot is a bit of an oddball and very sensitive. Take knight Carrot’s relationship with Lady Mosilla. They are old rivals, always tied in competitions. Even though they pick on each other all the time, it is but squabbling of a pair of real close friends. Duke Howl, however, was not on good terms with Carrot. He would often say that he would’ve eaten Carrot already, if only he didn’t hate vegetables.",
                    Options:
                    [
                        {
                            Text: "Tell me a bit about Lady Mosilla.",
                            Locked: false,
                            Link: 6
                        }
                    ]
                },
                {
                    Text: "She was very upset this morning. I remember she mentioned some sort of lost lucky charm or some poppycock like that. Not so upset at the news of Howl’s death. I wouldn’t jump to conclusions though. Mosilla is a bit… slow.",
                    Options:
                    [
                        {
                            Text: "Thank you for your time.",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        },
        {
            Name:"Turtle",
            Chats:
            [
                {
                    Text: "...",
                    Options:
                    [
                        {
                            Text: "What do you know, friend?",
                            Locked: false,
                            Link: 1
                        }                    
                    ]
                },
                {
                    Text: "I am here to compete in the championship. By the looks of you, I assume you are here for the same reason. *makes a small bow* I am Aristurtle.",
                    Options:
                    [
                        {
                            Text: "I have heard that you've been competing in this championship for a hundred years... literally. With no avail.",
                            Locked: false,
                            Link: 2
                        }
                    ]
                },
                {
                    Text: "... A grain falls on the ground - it makes no sound. A thousand grains fall - with sound and all!",
                    Options:
                    [
                        {
                            Text: "[continue listening]",
                            Locked: false,
                            Link: 3
                        }
                    ]
                },
                {
                    Text: "So, what is nothing *can* add up to something. Touché!",
                    Options:
                    [
                        {
                            Text: "I will enjoy beating you in the tournament today.",
                            Locked: false,
                            Link: 4
                        }
                    ]
                },
                {
                    Text: "... The arrow is motionless.",
                    Options:
                    [
                        {
                            Text: "I am investigating the murder of Duke Howl. Where were you last night?",
                            Locked: false,
                            Link: 5
                        }
                    ]
                },
                {
                    Text: "I was at my house.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Oonie?",
                            Locked: false,
                            Link: 6
                        }
                    ]
                },
                {
                    Text: "Every criminal is the same to me, and therefore equal.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Duke Howl?",
                            Locked: false,
                            Link: 7
                        }
                    ]
                },
                {
                    Text: "He was a worthy opponent and a strong warrior in tournaments.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about knight Rabbit?",
                            Locked: false,
                            Link: 8
                        }
                    ]
                },
                {
                    Text: "It can never be faster than me.",
                    Options:
                    [
                        {
                            Text: "What can you tell me about Lady Mosilla?",
                            Locked: false,
                            Link: 9
                        }
                    ]
                },
                {
                    Text: "She is quite foxy.",
                    Options:
                    [
                        {
                            Text: "*A phone rings from his shell*",
                            Locked: false,
                            Link: 10
                        }
                    ]
                },
                {
                    Text: "*Ring ring*",
                    Options:
                    [
                        {
                            Text: "*He looks at you in a paranoid way*",
                            Locked: false,
                            Link: 11
                        }
                    ]
                },
                {
                    Text: "I am sorry, I absolutely must take this.",
                    Options:
                    [
                        {
                            Text: "*speaks on the phone* Hello mother. Yes, but this year, I'm feeling confident that...",
                            Locked: false,
                            Link: -1
                        }
                    ]
                }
            ]
        }
    ]
};