const NEWS = [
  {
    img: 'assets/sitting.jpg',
    alt: 'A drawing by Kafka',
    headline: `Kafka's Genius Unmatched by AI`,
    lead: `Kafka was a master of language, with a unique ability to create haunting and disturbing stories that explore the human condition. His work is characterized by its complexity, ambiguity, and psychological depth.`,
    body: `AI language models are not capable of writing as well as Franz Kafka. Kafka was a master of language, with a unique ability to create haunting and disturbing stories that explore the human condition. His work is characterized by its complexity, ambiguity, and psychological depth. AI language models are not able to replicate these qualities. 
    <br> While AI language models can generate text that is grammatically correct and coherent, they lack the creativity, imagination, and emotional intelligence that is necessary to produce truly great literature. Kafka's work is the product of a lifetime of experience, reflection, and insight. AI language models simply do not have the same level of understanding of the human experience.`,
    isTopNews: true
  },
  {
    img: 'assets/glitter-head.jpg',
    alt: 'Sculpture, Head of Franz Kafka',
    headline: `Kafka's Head, a Disco Ball Twist`,
    lead: `David Černý's iconic sculpture, Head of Franz Kafka, is a striking and controversial piece of art that has become a landmark in Prague, Czech Republic.`,
    body: `This towering, 10-meter-tall sculpture depicts the head of the renowned author, Franz Kafka, but with a unique twist: it's constructed from 42 independently rotating stainless steel panels, giving it a dazzling, disco ball-like appearance.
    <br> The sculpture's design is a deliberate play on Kafka's life and work. Known for his introspective and often unsettling stories, Kafka's head can be seen as a metaphor for his characters' internal struggles, constantly shifting and turning, revealing different facets of their personalities. The disco ball element adds a layer of irony, juxtaposing the serious nature of Kafka's writing with a frivolous, popular culture symbol.`,
    isTopNews: false
  },
  {
    img: 'assets/readers.jpeg',
    alt: 'Two reading persons',
    headline: `Kafka's Complex Appeal: Who's Reading His Works?`,
    lead: `Kafka's works are often praised for their complex narratives, psychological depth, and literary style. These elements appeal to well-educated readers with a strong interest in literature and philosophy.`,
    body: `However, Kafka's writing can also be enjoyed by readers of various backgrounds and levels of literary experience. His stories often provoke thought and discussion, making them a popular choice for book clubs and literary circles.
    <br> Despite the complexity of his works, Kafka's writing has a universal appeal. His exploration of themes like alienation, guilt, and the search for meaning resonates with readers from all walks of life. While his stories may be challenging, they offer a rich and rewarding reading experience that can leave a lasting impression.`,
    isTopNews: false
  },
  {
    img: 'assets/museum-k.jpg',
    alt: 'Outside of the Museum',
    headline: `A Journey into Kafka's World: The Kafka Museum in Prague`,
    lead: `Nestled in the heart of Prague, the Kafka Museum offers a captivating journey into the enigmatic world of Franz Kafka.`,
    body: `Housed within a historic building with a labyrinthine interior, the museum is a fitting tribute to the author's complex and thought-provoking works. <br> Visitors can delve into exhibits showcasing Kafka's life, writings, and the historical context that shaped his literary creations. Interactive displays, original manuscripts, and personal belongings bring his world to life, offering a unique and immersive experience for both dedicated Kafka fans and those seeking to explore Prague's rich cultural heritage.`,
    isTopNews: false
  },
  {
    img: 'assets/der-prozess.jpg',
    alt: 'Book cover from 1925',
    headline: `The Enduring Relevance of "The Trial"`,
    lead: `Franz Kafka's novel, "The Trial," continues to resonate with readers nearly a century after its publication. Its themes of alienation, bureaucracy, and the individual's struggle against an oppressive system remain strikingly relevant in today's world.`,
    body: `Kafka's portrayal of a protagonist who is arrested and charged with a crime he cannot understand mirrors the experiences of many individuals who feel powerless in the face of complex and often unjust systems. The novel's exploration of the dehumanizing effects of bureaucracy is particularly relevant in a world increasingly dominated by large corporations and government agencies.`,
    isTopNews: false
  }
];

const renderNews = (newsData) => {
  // Filter top news (assuming only one top news item)
  const topNews = newsData.filter(news => news.isTopNews)[0]; // Access the first element of the filtered array

  // Filter grid news (all non-top news)
  const gridNews = newsData.filter(news => !news.isTopNews);

  // Render top news
  const bigNewsContainer = document.getElementById('bigNews');
  bigNewsContainer.innerHTML = `
    <div class="big-news">
      <img class="big-img" src="${topNews.img}" alt="${topNews.alt}"> 
    <article class="big-article">
      <h2>${topNews.headline}</h2>
        <p>${topNews.lead}</p>
          <button class="expand-button" aria-label="Expand or collapse article content">Show full article</button>
       <div class="body-content">
       <p>${topNews.body.replace(/<br>/g, '</p><p>')}</p>
        <div class="button-box"><button class="close-button" aria-label="Close expanded article content">Close</button>
        <button class="home-button" aria-label="Home">Home</button>
        </div>
        </article>
      </div>
    </div>
  `;
  // Render grid news (optional, depending on your needs)
  const smallNewsContainer = document.getElementById('smallNews');
  if (gridNews.length > 0) { // Check if there's any grid news before rendering
    smallNewsContainer.innerHTML = gridNews.map(news => `
    <div class="small-news">
      <img class="small-img" src="${news.img}" alt="${news.alt}">
      <article>
      <h3>${news.headline}</h3>
        <p>${news.lead}</p>
        <button class="expand-button" aria-label="Expand or collapse article content">Show full article</button>
      <div class="body-content">      
        <p>${news.body.replace(/<br>/g, '</p><p>')}</p>
        <div class="button-box"><button class="close-button" aria-label="Close expanded article content">Close</button>
        <button class="home-button" aria-label="Home">Home</button>
        </div>
        </article>
      </div>
    </div>
  `).join(''); // Join the individual HTML strings with an empty string
  }

  // Add event listeners to expand buttons
  const expandButtons = document.querySelectorAll('.expand-button');
  expandButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.classList.toggle('expanded');

      // Add event listener to close button
      const closeButton = content.querySelector('.close-button');
      if (closeButton) {
        closeButton.addEventListener('click', () => {
          content.classList.remove('expanded');

          // Focus the expand button after closing
          button.focus();

        });
      }
    });
  });
  // Add home button click event listener
  const homeButtons = document.querySelectorAll('.home-button');
  homeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Close expanded content if open
      const expandedContent = document.querySelector('.expanded.body-content');
      if (expandedContent) {
        expandedContent.classList.remove('expanded');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
};

renderNews(NEWS);