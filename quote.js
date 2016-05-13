var quotes = ["Socks before or after trousers, but never socks before pants, that's the rule. Makes a man look scary, like a chicken.",
"Okay, here we go, wedding day. I am heading for a wedding. How do I feel? Empty, check. Scared, check. Alone, check. Just another ordinary day.",
"I want to call again, but when I leave long messages, I have this nagging sense that I'll end up hearing them played back to me in a court of law.",
"All rational people agree it's a truth self-evident that it's impossible to have a good time on New Year's Eve. The pressure's too immense.",
"What am I doing? This isn't me, I can't have an affair! I'm not French, I'm the least French person on the planet, my favourite cheeses are Cheddar and Red Leicester!",
"Maybe this is what it'll be like after the apocalypse, wandering around depressed, shooting children for fun.",
"Sophie's the one. Toni's Russia; vast, mysterious, unconquerable. Sophie's Poland; manageable, won't put up too much of a fight.",
"It’s fine. Luckily we’re all English so no-one’s going to ask any questions. Thank you, centuries of emotional repression!",
"I’m just a normal functioning member of the human race and there’s no way anyone can prove otherwise",
"She is attractive, but brown rice and pop tarts, chamomile tea and economy vodka? Thats a car crash of a shopping basket."
];

function getQuote() { 
    return Math.floor(Math.random() * quotes.length);
}



$('#button').click(function() {
    $('#quote').text(quotes[getQuote()]);
  });
