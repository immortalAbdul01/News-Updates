console.log('yes this is working start coding ');
let api = "7592635940c74b858048fc2bb9cb23a4";
let source = "Freerepublic.com"

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=tesla&from=2022-07-07&sortBy=publishedAt&apiKey=7592635940c74b858048fc2bb9cb23a4`, true);


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let art = json.articles;
        console.log(art);

        let html = ''
        art.forEach(element => {
            console.log(element.title);

            let newsblock = document.getElementById('newsblock');
            let block = `    
            <span class="inline-block py-1 px-2 rounded bg-gray-800 text-white-400 text-opacity-100 text-xs font-medium tracking-widest">BREAKING NEWS </span>
            
            <img src="${element.urlToImage}" alt="bg.jpg" class='img1'>
            <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">${element.title}</h2>
            <p class="leading-relaxed mb-8">${element.description}</p>
            <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
              <a class=" inline-flex items-center learn " href='${element.url}' target="_blank">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-white-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-white-500 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
           
          </div>
    
    `;
            html += block
            newsblock.innerHTML=html
        });
    }
}
xhr.send()