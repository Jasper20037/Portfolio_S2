fetch('https://dummyjson.com/products').then(res =>res.json()).then(data=>{
    const productData = data.products

    // Creates section
    const mainSection=document.createElement('section');
    // Add class to section
    mainSection.classList.add('product-section');

    productData.forEach(product => {
        
        const img = document.createElement("img"); 
        img.src = product.thumbnail;

        const showTitle=document.createElement('h1');
        showTitle.textContent=product.title;
    
        const showPrice=document.createElement('h4');
        showPrice.innerHTML=`€ ${product.price}`

        const showDesc=document.createElement('p');
        showDesc.innerHTML=`${product.description}`;

        const cartBtn=document.createElement('a');
        cartBtn.classList.add('cart-btn')
        cartBtn.innerHTML=`<i class="fa-solid fa-cart-shopping"></i>`;
        cartBtn.setAttribute('href', "https://jasper20037.github.io/Portfolio_S2/Index.html")

        const learnMoreBtn=document.createElement('a');
        learnMoreBtn.classList.add('learn-more')
        learnMoreBtn.innerHTML=`Learn More`;
        cartBtn.setAttribute('href', "#")

        // Create 'article' for product card
        const art=document.createElement('article');
        // Add class to article
        art.classList.add('product-card')

        // add to card
        art.appendChild(img);
        art.appendChild(showTitle)
        art.appendChild(showPrice);
        art.appendChild(showDesc);

        // Create section in card for buttons
        const cardSection = document.createElement('section');
        cardSection.classList.add('button-section')

        // add buttons to section
        cardSection.appendChild(learnMoreBtn)
        cardSection.appendChild(cartBtn)

        // Add section to card
        art.appendChild(cardSection)


        mainSection.appendChild(art);
    
    });
    document.body.appendChild(mainSection)   
})

