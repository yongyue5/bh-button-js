const quotebook = [
  {
    quote: 'As long as people are scared of themselves, no one will care about the youth.',
    author: 'And One',
    source: 'Sound of Believer',
  },

// i have an idea to instead make a field where i would put the link and I won't have to do the a/link tags but i dont know if i want to hassle with the ones who don't have a direct link.

  {
    quote: 'it broke the barrier of dirt and rock, crashed through or slowly rubbed until the land dissolved and flooded through itself beyond beyond.',
    author: 'Elizabeth Arnold',
    authorLink: 'https://www.poetryfoundation.org/poets/elizabeth-arnold',
    source: 'Even the Smallest Flood Ends',
  },

  {
    quote: 'And don&#39;t be afraid when, eyes closed, you look inside you and find night is both the silence tolling after stars and the final word that founds all beginning, find night',
    author: 'Li-Young Lee',
    authorLink: 'https://www.poetryfoundation.org/poets/li-young-lee',
    source: 'Night Mirror',
    sourceLink: 'https://www.poetryfoundation.org/poems/1592236/night-mirror',
  },


  {
  quote: 'as the light lengthens toward summer the young goldfinches&#8211;flutter down through the day for the first time&#8211;to find themselves among fallen petals&#8211;cradling their day&#39;s colors in the day&#39;s shadows',
  author: 'William Stanley Merwin',
  authorLink: 'https://www.poetryfoundation.org/poets/w-s-merwin',
  source: 'Black Cherries',
  sourceLink: 'https://www.poetryfoundation.org/poems/1586491/black-cherries'
  },

  {
  quote: 'Your silence is almost worst of all.',
  author: 'Greta Thunberg',
  source: 'No One is Too Small to Make a Difference',
  sourceLink: 'https://books.google.de/books/about/No_One_Is_Too_Small_to_Make_a_Difference.html?id=GJhPEAAAQBAJ&redir_esc=y'
  },

  {
  quote: 'I believe. through her I&#39;m my own self entirely differently through him, through you. and in this rain: since the drop fall from the sky, fall from the roof, fall from the trees, their unstoppable flight is the essence&#8211;of my freedom.',
  author: 'Julia Fiedorczuk',
  authorLink: 'https://www.poetryfoundation.org/poets/julia-fiedorczuk',
  source: 'From within my bodily singularity',
  sourceLink: `https://www.poetryfoundation.org/poems/1586311/from-within-my-bodily-singularity`,
  },

  {
    quote: 'But his whole life was dominated by fear, the fear of failure and of weakness. It was deeper and more intimate that the fear of evil and capricious gods and of magic, the fear of the forest, and of the forces of nature, malevolent, red in tooth and claw. Okonkwo&#39;s fear was greater than these. It was not external but lay deep within himself.',
    author: 'Chinua Achebe',
    // authorLink: 'ya',
    source: 'Things Fall Apart'
  },

  {
    quote: 'It&#39;s not about what I want anymore...It&#39;s about making the best of what I have.',
    author: 'Pearl (played by Mia Goth)',
    // authorLink: 'ya',
    source: 'yest',
    sourceLink: 'ok'
  },

  {
    quote: 'yeahgirl',
    author: 'yippee <3',
    authorLink: 'ya',
    source: 'yest',
    sourceLink: 'ok'
  },

  {
    quote: 'yeahgirl',
    author: 'yippee <3',
    authorLink: 'ya',
    source: 'yest',
    sourceLink: 'ok'
  }
];


// function clicked() {

// let quote;
// let author;

// switch (Math.floor(Math.random() * 10)) {
//     case 0:

//     quote = quotebook[0].quote;
//     author = quotebook[0].author;
//     break;

//     case 1:
//     quote = quotebook[1].quote;
//     author = quotebook[1].quote;
//     break;

//     case 2:
//     quote = "Sunday";
//     author = "yes";
//     break;

//     case 3:
//     quote = "Sunday";
//     author = "yes";
//     break;

//     case 4:
//     quote = "Sunday";
//     author = "yes";
//     break;

//     case 5:
//     quote = "Sunday";
//     author = "yes";
//     break;

//     case 6:
//     quote = "Sunday";
//     author = "yes";
//     break;

//     case 7:
//     quote = "Sunday";
//     author = "yes";
//     break;

//     case 8:
//     quote = "Sunday";
//     author = "yes";
//     break;

// }

  // make 10 instances

  function clicked() {


    let quote;
    let author;

  //   // failed to make a for loop for this switch case which would allow me not to have to repeat the cases manually over and over again. :( (original idea: make a variable that changes with whatever randomised number was given) like maybe. this is just a madeup example. case e: quote = quotebook[e].quote. like that. or something. that would link the two since i notcied all the cases are just changing the number

  // // NEVERMIND IT WORKED LETS GOOOOOO I JUST STORE IT IN A VARIABLE

  let instance = Math.floor(Math.random() * 10);

    switch (instance) {
        case instance:
        quote = quotebook[instance].quote;
        author = quotebook[instance].author;
        break;
    }


    document.getElementById("quote_placeholder").innerHTML=quote;
    document.getElementById("author").innerHTML=author;

    }

  function quotes(arg) {
    let items = "";
    let souLink = `<a href="${arg[i].sourceLink}">"${arg[i].source}"</a>`;
    let autLink = `<a href="${arg[i].authorLink}">${arg[i].author}</a>`;

    for(let i = 0; i < arg.length; i++) {
      // items +=
      // `<p>${arg[i].quote}</p>
      //   <p class="author">
      //   <a href="${arg[i].authorLink}">${arg[i].author}</a>
      //   &#8211;
      //   <a href="${arg[i].sourceLink}">"${arg[i].source}"</a></p><br>`;

      // ABOVE WORKS IF UNDER IS DISABLED

      // if (quotebook[i].sourceLink === undefined) {

      //     items +=
      //       `<p>${arg[i].quote}</p>
      //       <p class="author">
      //       <a href="${arg[i].authorLink}">${arg[i].author}</a>
      //       &#8211;
      //       "${arg[i].source}"</p><br>`
      //   }

      //   else if (quotebook[i].sourceLink && quotebook[i].authorLink === undefined) {
      //     items +=
      //       `<p>${arg[i].quote}</p>
      //       <p class="author">
      //       ${arg[i].author}
      //       &#8211;
      //       "${arg[i].source}"</p><br>`
      //   }

      //   else if (quotebook[i].authorLink === undefined) {
      //     items +=
      //       `<p>${arg[i].quote}</p>
      //       <p class="author">
      //       ${arg[i].author}
      //       &#8211;
      //       "${arg[i].source}"</p><br>`;
      //   }

      //   else {
      //     items +=
      //       `<p>${arg[i].quote}</p>
      //       <p class="author">
      //       <a href="${arg[i].authorLink}">${arg[i].author}</a>
      //       &#8211;
      //       <a href="${arg[i].sourceLink}">"${arg[i].source}"</a></p><br>`
      //   }

      // ABOVE WORKS IF VERY TOP IS DISABLED.

      if ( quotebook[i].sourceLink || quotebook[i].authorLink === undefined ) {
        switch (souLink === undefined ) {
          case (quotebook[i].sourceLink === undefined ):
            souLink = `"${arg[i].source}"`;

          case (autLink === undefined ):
            autLink = `"${arg[i].author}"`;
          }
        }
      }

      items +=
          `<p>${arg[i].quote}</p>
          <p class="author">
          ${autLink}</a>
          &#8211;
          ${souLink}</p><br>`

          return items;
    }

    document.querySelector('#quotelist').innerHTML = items


  console.log(quotes(quotebook));