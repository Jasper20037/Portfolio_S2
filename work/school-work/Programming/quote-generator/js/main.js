
// Variables
const btn = document.querySelector('#new-quote')
const quoteText = document.querySelector('.quote')
const author = document.querySelector('.author')
// Array of quotes
const quotes = [
    {
        quote:`"Work!"`,
        person: `Metaxas`,
    },
    {
        quote:`"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
        person: `Mother Teresa`
    },
    {
        quote:`"When you reach the end of your rope, tie a knot in it and hang on."`,
        person: `Franklin D. Roosevelt`,
    },
    {
        quote:`"Always remember that you are absolutely unique. Just like everyone else."`,
        person: `Margaret Mead`,
    },
    {
        quote:`"Don't judge each day by the harvest you reap but by the seeds that you plant"`,
        person: `Robert Louis Stevenson`,
    },
    {
        quote:`"The future belongs to those who believe in the beauty of their dreams"`,
        person: `Eleanor Roosevelt`,
    },
    {
        quote:`"Tell me and I forget. Teach me and I remember. Involve me and I learn"`,
        person: `Benjamin Franklin`,
    },
    {
        quote:`"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart"`,
        person: `Helen Keller`,
    },
    {
        quote:`"It is during our darkest moments that we must focus to see the light."`,
        person: `Aristotle`,
    },
    {
        quote:`"Whoever is happy will make others happy too."`,
        person: `Anne Frank`,
    },
    {
        quote:`"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
        person: `Ralph Waldo Emerson`,
    },
    {
        quote:`"Success is not final; failure is not fatal: It is the courage to continue that counts"`,
        person: `Winston S. Churchill`,
    },
    {
        quote:`"Success usually comes to those who are too busy to be looking for it."`,
        person: `Henry David Thoreau`,
    },
    {
        quote:`"The way to get started is to quit talking and begin doing."`,
        person: `Walt Disney`,
    },
    {
        quote:`"If you really look closely, most overnight successes took a long time."`,
        person: `Steve Jobs`,
    },
    {
        quote:`"The secret of success is to do the common thing uncommonly well."`,
        person: `John D. Rockefeller Jr.`,
    },
    {
        quote:`" find that the harder I work, the more luck I seem to have."`,
        person: `Thomas Jefferson`,
    },
    {
        quote:`"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."`,
        person: `Barack Obama`,
    },
    {
        quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        person: `James Cameron`,
    },
    {
        quote:`"Dream big and dare to fail"`,
        person: `Norman Vaughan`,
    },
    {
        quote:`"It does not matter how slowly you go as long as you do not stop."`,
        person: `Confucius`,
    },
    {
        quote:`"The only impossible journey is the one you never begin"`,
        person: `Tony Robbins`,
    },
    {
        quote:`"Progress not perfection."`,
        person: `Jasper van den Heuvel`,
    },
]

btn.addEventListener('click', function(){

    // Math to get random quote
    // round math to bottom / gets a random number * the lenth of the array
    let random = Math.floor(Math.random() * quotes.length);

    quoteText.innerText = quotes[random].quote;
    author.innerText = quotes[random].person;

})