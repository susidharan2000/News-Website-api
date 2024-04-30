const business = document.querySelector('.business');
const TechCrunch = document.querySelector('.techCurch');
const wallStreet = document.querySelector('.Wall-Street');
const apple = document.querySelector('.apple');


const businessApi = fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3f7719379361463698b0832694154796`);
   businessApi
  .then((res)=>{ return res.json()})
  .then((data)=>{
    for(let i = 0;i < data.articles.length;i++){
        business.innerHTML += `
    <div class="container col-xl-10 col-xxl-8 px-4 py-1">
                <div class="row align-items-center g-lg-5 py-4">
                  <div class="col-lg-7 text-center text-lg-start">
                    <h2 class=" title display-12 fw-bold lh-1 text-body-emphasis mb-1">${data.articles[i].title}</h2>
                    <p class="description col-lg-10 fs-4">${data.articles[i].description || data.articles[i].content } <a class="read" href="${data.articles[i].url}">read more</a></p>
                    <p class="author"> -${data.articles[i].author}</p>
                  </div>
                  <div class=" image col-md-10 mx-auto col-lg-5">
                  <img src="${data.articles[i].urlToImage}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
                  </div>
                </div>
              </div>
    `;
    }
  })
  .catch((error)=>{console.log(error)});

 /*  const TechCrunchApi = fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3f7719379361463698b0832694154796');
  TechCrunchApi
  .then((res)=>{ return res.json()})
  .then((data)=>{
    for(let i = 0;i < data.articles.length;i++){
        TechCrunch.innerHTML += `
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
                <div class="row align-items-center g-lg-5 py-4">
                  <div class="col-lg-7 text-center text-lg-start">
                  <h2 class=" title display-12 fw-bold lh-1 text-body-emphasis mb-1">${data.articles[i].title}</h2>
                    <p class="description col-lg-10 fs-4">${data.articles[i].description || data.articles[i].content }<a class="read" href="${data.articles[i].url}">read more</a></p>
                    <p class="author"> -${data.articles[i].author}</p>
                  </div>
                  <div class=" image col-md-10 mx-auto col-lg-5">
                  <img src="${data.articles[i].urlToImage}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
                  </div>
                </div>
              </div>
    `;
    }
  })
  .catch((error)=>{console.log(error)}); */
/* 
  const wallStreetAPI = fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3f7719379361463698b0832694154796');
  wallStreetAPI
  .then((res)=>{ return res.json()})
  .then((data)=>{
    for(let i = 0;i < data.articles.length;i++){
        wallStreet.innerHTML += `
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
                <div class="row align-items-center g-lg-5 py-4">
                  <div class="col-lg-7 text-center text-lg-start">
                  <h2 class=" title display-12 fw-bold lh-1 text-body-emphasis mb-1">${data.articles[i].title}</h2>
                    <p class="description col-lg-10 fs-4">${data.articles[i].description || data.articles[i].content }<a class="read" href="${data.articles[i].url}">read more</a></p>
                    <p class="author"> -${data.articles[i].author}</p>
                  </div>
                  <div class=" image col-md-10 mx-auto col-lg-5">
                  <img src="${data.articles[i].urlToImage}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
                  </div>
                </div>
              </div>
    `;
    }
  })
  .catch((error)=>{console.log(error)});  */
/* 
  const AppleApi = fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-04-24&to=2024-04-24&sortBy=popularity&apiKey=3f7719379361463698b0832694154796`);
   AppleApi
  .then((res)=>{ return res.json()})
  .then((data)=>{
    for(let i = 0;i < data.articles.length;i++){
        apple.innerHTML += `
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
                <div class="row align-items-center g-lg-5 py-4">
                  <div class="col-lg-7 text-center text-lg-start">
                    <h2 class=" title display-12 fw-bold lh-1 text-body-emphasis mb-1">${data.articles[i].title}</h2>
                    <p class="description col-lg-10 fs-4">${data.articles[i].description || data.articles[i].content }<a class="read" href="${data.articles[i].url}">read more</a></p>
                    <p class="author"> -${data.articles[i].author}</p>
                  </div>
                  <div class=" image col-md-10 mx-auto col-lg-5">
                  <img src="${data.articles[i].urlToImage}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
                  </div>
                </div>
              </div>
    `;
    }
  })
  .catch((error)=>{console.log(error)}); */