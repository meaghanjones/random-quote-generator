var quotes = [
'Life is about making an impact, not making an income. &mdash;Kevin Kruse',
'Whatever the mind of man can conceive and believe, it can achieve. &mdash;Napoleon Hill',
'Strive not to be a success, but rather to be of value. &mdash;Albert Einstein',
'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  &mdash;Robert Frost',
'I attribute my success to this: I never gave or took any excuse. &mdash;Florence Nightingale',
'You miss 100% of the shots you don&#39;t take. &mdash;Wayne Gretzky',
'I&#39;ve missed more than 9000 shots in my career. I&#39;ve lost almost 300 games. 26 times I&#39;ve been trusted to take the game winning shot and missed. I&#39;ve failed over and over and over again in my life. And that is why I succeed. &mdash;Michael Jordan',
'The most difficult thing is the decision to act, the rest is merely tenacity. &mdash;Amelia Earhart',
'Every strike brings me closer to the next home run. &mdash;Babe Ruth',
'Definiteness of purpose is the starting point of all achievement. &mdash;W. Clement Stone',
'Life isn&#39;t about getting and having, it’s about giving and being. &mdash;Kevin Kruse',
'Life is what happens to you while you&#39;re busy making other plans. &mdash;John Lennon',
'We become what we think about. &mdash;Earl Nightingale',
'Twenty years from now you will be more disappointed by the things that you didn&#39;t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. &mdash;Mark Twain',
'Life is 10% what happens to me and 90% of how I react to it. &mdash;Charles Swindoll',
'The most common way people give up their power is by thinking they don&#39;t have any. &mdash;Alice Walker',
'The mind is everything. What you think you become.  &mdash;Buddha',
'The best time to plant a tree was 20 years ago. The second best time is now. &mdash;Chinese Proverb',
'An unexamined life is not worth living. &mdash;Socrates',
'Eighty percent of success is showing up. &mdash;Woody Allen',
'Your time is limited, so don&#39;t waste it living someone else&#39;s life. &mdash;Steve Jobs',
'Winning isn&#39;t everything, but wanting to win is. &mdash;Vince Lombardi',
'I am not a product of my circumstances. I am a product of my decisions. &mdash;Stephen Covey',
'Every child is an artist.  The problem is how to remain an artist once he grows up. &mdash;Pablo Picasso',
'You can never cross the ocean until you have the courage to lose sight of the shore. &mdash;Christopher Columbus',
'I&#39;ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. &mdash;Maya Angelou',
'Either you run the day, or the day runs you. &mdash;Jim Rohn',
'Whether you think you can or you think you can&#39;t, you&#39;re right. &mdash;Henry Ford',
'The two most important days in your life are the day you are born and the day you find out why. &mdash;Mark Twain',
'Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. &mdash;Johann Wolfgang von Goethe',
'The best revenge is massive success. &mdash;Frank Sinatra',
'People often say that motivation doesn&#39;t last. Well, neither does bathing.  That&#39;s why we recommend it daily. &mdash;Zig Ziglar',
'Life shrinks or expands in proportion to one&#39;s courage. &mdash;Anais Nin'
]

$(document).ready(function() {

function random() {
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $('#quote-container').append(randomQuote);
    }

  $(".quote_button").click(function(){
    $('#quote-container').empty();
     random();
   });

  $(".twitter-share-button").click(function(){
     $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);
   });
 });
