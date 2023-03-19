const loadCategories =async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
     displayNewsCategories(data.data.news_category)
}
const displayNewsCategories = (items) => {
    // console.log(items)
  items.forEach(item => {
    //   console.log(item)
      const categoriesNews = document.getElementById('categories-news');
      const allNewsCategories = document.createElement('div');
      allNewsCategories.innerHTML = `
      <button onclick="categoriesNewsDetails('${item.category_id}')" class=" border border-0 bg-white fs-5">${item.category_name}</button>
      `
      
      categoriesNews.appendChild(allNewsCategories)
    });
}

const categoriesNewsDetails = async(category_id) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url);
    const data = await res.json();
     loadData(data.data)
}
const categoriesDetails = document.getElementById('categories-details');

const loadData = (details) => {
  console.log(details)
  const itemLength = document.getElementById('item-length')
  itemLength.innerText = details.length + '    items found for this category'
  itemLength.style.fontSize = "x-large"
  itemLength.style.fontWeight = "500"
  itemLength.style.borderStyle = "dotted solid double dashed"
  if (details.length === 0) {
    itemLength.innerText = 'No news found for this category'
  }
  categoriesDetails.innerHTML = ' ';
  toggleSpiner(true)
  const noNews = document.getElementById('no-news')
  if (details.length === 0) {
    noNews.classList.remove('d-none')
  }
  else {
    noNews.classList.add('d-none')
  }
    details.forEach(detail => {
        // console.log(detail)
        const details = document.createElement('div');
        details.classList.add('row')
        details.innerHTML = `
        <div class="card mb-3 border border-0 Small shadow" >
  <div class="row g-0">
    <div class="col-lg-4">
      <img src="${detail.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title ms-lg-5"> ${detail.title }</h5>
        <p class="card-text ms-lg-5 text-aligin"> ${detail.details.slice(0,500)}....</p>
        <div class="d-md-flex justify-content-lg-around">
        <div><img class="author-img" src="${detail.author.img}" alt=""></div>
        <div class="ms-md-5 mt-md-3">
        <p>${detail.author.name? detail.author.name:'no name'} <br> <span>${detail.author.published_date}</span></p>
        </div>
        <div class="ms-md-5 mt-md-4"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
      </svg>   ${detail.total_view? detail.total_view: '0'} M</div>
        <div class="ms-md-5 mt-md-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
     </svg>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi  bi-star" viewBox="0 0 16 16">
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
   </svg>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927   0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
   <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
        </div>
        <div class="ms-md-5 mt-sm-3 mt-md-4 ">
        <button onclick="newsDetails('${detail._id}')" class="border border-0 bg-white text-success"  data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg></button>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
        `
        categoriesDetails.appendChild(details);
    })
    toggleSpiner(false)
}
const newsDetails =async (news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    const res = await fetch(url);
    const data = await res.json();
     displayDetails(data.data)
}
const displayDetails = (detailsNews) => {
    // console.log(detailsNews)
    detailsNews.forEach(news => {
        console.log(news)
        const exampleModalLabel = document.getElementById('exampleModalLabel')
        exampleModalLabel.innerText = `${news.title}`
        const details = document.getElementById('details');
        details.innerText = `
        ${news.details}
        `

    });
}
const toggleSpiner = (loading) => {
  const spiner =document.getElementById('spiner')
  if (loading) {
    spiner.classList.remove('d-none')
  }
  else {
    spiner.classList.add('d-none')
  }
}
 
const blogItems = () => {
  const exampleModalLabel = document.getElementById('staticBackdropLabel')
  exampleModalLabel.innerText = 'Difference'
  const blogDetails = document.getElementById('blog-details');
  blogDetails.innerHTML = `
  <h5>1. var vs let vs const difference</h5>
  <p>var and let create variables that can be reassigned another value.
  const creates "constant" variables that cannot be reassigned another value.
  developers shouldn't use var anymore. They should use let or const instead.
  if you're not going to change the value of a variable, it is good practice to use const.</p>
  <h5>2. Array funcation vs Reguler funcation</h5>
  <p>Arrow function — also called fat arrow function— is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. While both regular JavaScript functions and arrow functions work in a similar manner, there are certain differences between them.</p>
  <h5>3. Map vs Foreach vs Filter vs Find</h5>
  <p>Map : The parameter callback can take up to 3 parameters element, index & array (but only the element parameter is required, the rest is optional).<br> Foreach : Just like the function .forEach(), this function also takes only 1 parameter .map(callback). . <br> Filter :  Just like the function .forEach(), this function also takes only 1 parameter .filter(callback) . <br> Find : Function .find() is also a search function like the previous but they differ in one small detail — this function returns only one match in an array. If in an array is more than one result, the function will return the first that has matched.</p>
  `
}
 blogItems()
  
 
 loadCategories()