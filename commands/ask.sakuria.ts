import { IMessage } from "../types";

export const command = {
  name: "ask",
  requiresProcessing: false,
  execute: async (message: IMessage): Promise<string> => {
    // Reply if no args
    if (message.args.length === 0) return "Yeah you gotta ask a question you know? you can't just fuckin tell me the command and ask nothing idiot";

    // list of answers to reply to the user
    const answers = [
      "yes maybe",
      "no idiot",
      "idfk cunt",
      "yes def uwuwuwuwu",
      "possibly",
      "fUCk yes",
      "no :|",
      "shut up",
      "absolutely <3 uwu",
      "you wish",
      "yyess!!!",
      "YES!",
      "do I look like siri to you?",
      "haha no <3",
      "no",
      "yes why not",
      "I think so :00!!",
      "I don't know xD",
      "maybe :'0!!",
      "*kisses you*",
      "owo hmmmm, ask me again",
      "x..x wooow really??",
      "yus",
      "bro yes bro",
      "what no, lol",
      "yes pleaseeeee",
      "wat",
      "Xddddd yes",
      "yis :)",
      "*makes out with you*",
      "I don't know but you're cute!",
      "u///u m-maybe..",
      "why u ask me this lol",
      "ask ur mom",
      "wtf bro idk",
      "idk ask paimon",
      "idk tbh",
      "yes but actually no",
      "da blyat",
      "yesn't",
      "no, you suck",
      "yes yes YES!",
      "a-ah uhm... no",
      "no no no no no no-",
      "ask Lisa maybe...?",
      "https://cdn.discordapp.com/attachments/806300597338767450/870604364866273330/ezgif-3-af9cba4cc762.gif",
      "yea...maaaybe don't...",
      "no one thinks you're funny, traveler.",
      "oh yeah, I think so! ^^",
      "I don't know and I don't care, I'm tired of people crap rn...do you know how many servers I'm in?",
      "not funny get roasted",
      "that's soooooo smart. :)))))",
      "*wooosh shiummm! magic noises* ...Oh what? sorry I...didn't hear your question...",
      "haha rawr XD",
      "brrrr >:}",
      "Y-YEAAA!!! <3",
      "oooh, sexy....",
      "*sigh* why are the people I get only idiots...?",
      "t-that's uhm...really smart actually, I have no idea...",
      "NOOOOO-",
      "yee :0",
      "maybe? I'm not really sure ;;",
      "yea yea!! ^//^",
      "I don't think so...",
      "heck yea bro",
      "why do I even bother?",
      "aaah yes...I think...? x.x",
      "no shut up ur family doesn't love u",
      "uwu thats cwinge :3",
      "how about u touch grass?",
      "come on get a life loser",
      "basically in America theres no limit in how much Hydrogen Peroxide in teeth whiting strips, which means its stronger thus whiter teeth. However the strips are extremely bad for your enamel and shit hence why the UK limits it to 0.1 percent, hence why the teeth whiting strips in the UK aren't as strong thus not as white teeth",
      "I guess so, anyways stupid cunt, stop asking this shit",
      "debatable",
      "this question doesn't work",
      "are you has stupid??????",
      "shut the fuck",
      "*kisses you then kicks you*",
      "is that a jojo reference?",
      "yes uwu",
      "Oh sorry i dint hear, ur mom is too huge",
      "I can tell from this question that you don't have a girlfriend. Oh no! Anyway",
      "sorry i dont speak english",
      "Yes but no",
      "sorry i cant hear your over the clap of my ass cheeks",
      "cry about it",
      "ok and?",
      "Sorry i dont talk to poor people cry about it",
      "You know you are so hilariously unfunny",
      "Sorry what, what did you say?",
      "I don't know how to answer to that",
      "*Slaps you*",
      "Wow, That was so Halariusly Unphunny. Like I could throw your Muther across The Ruum And Even That Would Be Phunnier. Just Stop. Just Leeve Me Alohne",
      "oh my fucking god stfu",
      "I would like that if it wasnt you",
      "I am using the Hubble space telescope and I can't find who the fuck asked",
      "Ok",
      "would you kindly close your mouth in an extreme manner",
      "You damn degenerate",
      "If you talk shit again, i am going to yeet you in the space",
      "get rekt",
      "we do a little trolley",
    ];

    return answers[~~(Math.random() * answers.length - 1)];
  },
};
