
const articles = [
    {
        title: '7 Practical CSS Tips',
        nameOfAuthor: 'Authors name',
        nameOfTopic: 'Topics name',
        content: 'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
        img: './assets/image1.png'
    },
    {
        title: '7 Practical CSS Tips',
        nameOfAuthor: 'Authors name',
        nameOfTopic: 'Topics name',
        content: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
        img: './assets/image2.png'
    },
    {
        title: '7 Practical CSS Tips',
        nameOfAuthor: 'Authors name',
        nameOfTopic: 'Topics name',
        content: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
        img: './assets/image3.png'
    }

]

const container = document.querySelector('.container')

// articles.forEach(element => {
//     const block = document.createElement('div');
//     block.className = 'block';
    
//     block.innerHTML = `<div class="text">
//     <div class="author">
//         <img style="width: 24px; height: 24px; margin-right: 10px;" src="./assets/avatar.png"/>${element.nameOfAuthor} in ${element.nameOfTopic} · 7 July
//     </div>
//     <h1 style="font-size: 28px; margin:0;"> ${element.title}</h1>
//     <p class="content">${element.content}</p>
    
//     <div class="block-end">
//         <div class="block-end-text">
//             <p class="java">Java Script</p>
//             <p>12 min read   ·  Selected for you</p>
//         </div>
//         <div class="block-end-icon">
//             <img width=24 height=24 src="./assets/icon.png"/>
//             <img width=24 height=24 src="./assets/icon.png"/>
//             <img width=24 height=24 src="./assets/icon.png"/>
//         </div>
//     </div>

// </div>
// <div class="img">
//     <img style="width: 265px" src="${element.img}"/>
// </div>`;
//     container.append(block);
    
// })

// fetch("./articles.json").then(data => data.json()).then(data => {
//     data.forEach(element => {
//         const block = document.createElement('div');
//         block.className = 'block';
        
//         block.innerHTML = `<div class="text">
//         <div class="author">
//             <img style="width: 24px; height: 24px; margin-right: 10px;" src="./assets/avatar.png"/>${element.nameOfAuthor} in ${element.nameOfTopic} · 7 July
//         </div>
//         <h1 style="font-size: 28px; margin:0;"> ${element.title}</h1>
//         <p class="content">${element.content}</p>
        
//         <div class="block-end">
//             <div class="block-end-text">
//                 <p class="java">Java Script</p>
//                 <p>12 min read   ·  Selected for you</p>
//             </div>
//             <div class="block-end-icon">
//                 <img width=24 height=24 src="./assets/icon.png"/>
//                 <img width=24 height=24 src="./assets/icon.png"/>
//                 <img width=24 height=24 src="./assets/icon.png"/>
//             </div>
//         </div>

//     </div>
//     <div class="img">
//         <img style="width: 265px" src="${element.img}"/>
//     </div>`;
//         container.append(block);
//     })
// })


fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=wVpthm6V2A7nnRvJsdrx71GRcN82O6G6")
.then(data => data.json())
.then(data => {
    const main = document.getElementById("main");
    const container = document.querySelector(".container");
    let mainContent = ``;
    let elements = ``;
    for (let i = 0; i < data.results.length; i++) {
      let element = `<div class="block">
      <div class="text">
      <div class="author">
          <img style="width: 24px; height: 24px; margin-right: 10px;" src="./assets/avatar.png"/> 
          ${data.results[i].byline}<span class="opacity">in  </span>  ${data.results[i].section}<span class="opacity">  · ${data.results[i].created_date}</span>
      </div>
      <h1 id="id-${i}" class="links titles" style="font-size: 28px; margin:0;"> ${data.results[i].title}</h1>
      <p class="content">${data.results[i].abstract}</p>
      
      <div class="block-end">
          <div class="block-end-text">
              <p class="item-type">${data.results[i].item_type}</p>
              <p class="opacity">12 min read   ·   ${data.results[i].byline}</p>
          </div>
          <div class="block-end-icon">
              <img width=24 height=24 src="./assets/icon.png"/>
              <img width=24 height=24 src="./assets/icon.png"/>
              <img width=24 height=24 src="./assets/icon.png"/>
          </div>
      </div>

      </div>
      <div class="img">
          <img width="265" height ="265" src="${data.results[i].multimedia[0].url}"/>
      </div>
      </div>`;
      elements += element;
      container.innerHTML += element;
      
    }
    mainContent = `<h1 class="header">Hello, World!</h1>
    <div class="block">${container}</div>`

    let currentIndex = 0;

    main.addEventListener("click", (event) => {
        if(event.target.classList.contains("links")) {
          currentIndex = +(event.target.id).slice(3);
           let newContent = `<img class="arrow-right" src="./assets/arrow-left.png"/>
           <div class="content-article">
           <div class="header-article">
               <div class="avatar-article">
                   <img width="64" height="64" src="./assets/avatar.png"/>
               </div>
               <div class="info-article">
                   <div class="author-article">
                       <div>
                           <p style="font-size: 18px; margin: 0">${data.results[currentIndex].per_facet[0]} </p>
                       </div>
                       <div class="icons">
                           <img width="18" height="18" src="./assets/linkedin.png"/>
                           <img width="18" height="18" src="./assets/facebook.png"/>
                           <img width="18" height="18" src="./assets/twitter.png"/>
                       </div>
                   </div>
                   <div class="date-article">
                       <div><p style="font-size: 14px; margin: 0">${data.results[currentIndex].published_date}</p></div>
                   </div>
               </div>
           </div>
           <div>
               <h1>${data.results[currentIndex].title}</h1>
               <p>${data.results[currentIndex].abstract}</p>
           </div>
           <img style="height: 500px; object-fit: cover;" src="${data.results[currentIndex].multimedia[0].url}"/>
           </div>
           <div>
               <h3>${data.results[currentIndex].title}</h3>
               <p>${data.results[currentIndex].abstract}</p>
           </div>
      <div class="content-likes">
          <img src="./assets/likes.png"/>
          <img height="20" src="./assets/bookmark.png"/>       
      </div>`; 
          main.innerHTML = newContent;
        } else if(event.target.classList.contains("arrow-right")) {
          main.innerHTML = mainContent;
        }
      });
      

}).catch(e => console.log(e));

    
// container.addEventListener('click', (event) =>{
//     if(event.target.classList.contains("block") {

//     })
// })

{/* <div class="text">
        <div class="author">
            <img style="width: 24px; height: 24px; margin-right: 10px;" src="./assets/avatar.png"/> 
            ${element.byline}<span class="opacity">in  </span>  ${element.section}<span class="opacity">  · ${element.created_date}</span>
        </div>
        <h1 class="links titles" style="font-size: 28px; margin:0;"> ${element.title}</h1>
        <p class="content">${element.abstract}</p>
        
        <div class="block-end">
            <div class="block-end-text">
                <p class="item-type">${element.item_type}</p>
                <p class="opacity">12 min read   ·   ${element.byline}</p>
            </div>
            <div class="block-end-icon">
                <img width=24 height=24 src="./assets/icon.png"/>
                <img width=24 height=24 src="./assets/icon.png"/>
                <img width=24 height=24 src="./assets/icon.png"/>
            </div>
        </div>

        </div>
        <div class="img">
            <img style="width: 265px" src="${element.multimedia[0].url}"/>
        </div>` */}


