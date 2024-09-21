    // // ADDING PRODUCTS DYNAMICALLY



    function addTrendingProducts () {

        const trendingtData = [

            {img: "img/products/TRENDING/T1.jpg" , brandName:"The Uiriuy House", productName: "Funky Shirt for Men",  price: "1700", exPrice: "Rs.2400" },
            {img: "img/products/TRENDING/T2.jpg" , brandName:"Lymio",  productName: "Casual Shirt for Men", price: "800",  exPrice:  "Rs.1400" },
            {img: "img/products/TRENDING/T3.jpg" , brandName:"Laxeric",productName: "Casual Shirt for Men", price: "2700", exPrice: "Rs.3600" },
            {img: "img/products/TRENDING/T1.jpg" , brandName:"Uiriuy", productName: "Funky Shirt for Men",  price: "1700", exPrice: "Rs.2100" },
            {img: "img/products/TRENDING/T2.jpg" , brandName:"Lymio",  productName: "Casual Shirt for Men", price: "800",  exPrice:  "Rs.1200" },
            {img: "img/products/TRENDING/T3.jpg" , brandName:"Laxeric",productName: "Casual Shirt for Men", price: "2700", exPrice: "Rs.3000" },
            {img: "img/products/TRENDING/T4.jpg" , brandName:"Kizyoo", productName: "Casual Shirt for Men", price: "1300", exPrice: "" }
        ]

        let section= document.querySelector(".sec1Products")
        addData(section,trendingtData);
        
    }

    addTrendingProducts ()

    function addPopularProducts () {

        const popularData  = [
            { img: "img/products//POPULAR/f8.jpg", brandName: "XYZ Brand", productName: "Formal Pants for Men", price: "2000", exPrice: "Rs.2800" },
            { img: "img/products//POPULAR/f6.jpg", brandName: "ABC Fashion", productName: "Stylish T-Shirt for Women", price: "1200", exPrice: "Rs.1800" },
            { img: "img/products//POPULAR/f7.jpg", brandName: "DEF Couture", productName: "Classic Dress for Women", price: "3000", exPrice: "Rs.4000" },
            { img: "img/products//POPULAR/f8.jpg", brandName: "GHI Style", productName: "Denim Jacket for Men", price: "2500", exPrice: "Rs.3200" },
            { img: "img/products//POPULAR/P5.jpeg", brandName: "MNO Collection", productName: "Sporty Shoes for Men", price: "1800", exPrice: "" },
            { img: "img/products/FEATURED/F5.jpeg", brandName: "JKL Creations", productName: "Sneakers for Women", price: "2000", exPrice: "Rs.2500" }
        ];
        

        let section = document.querySelector("#popularSection")
        addData(section,popularData);
    }

    function addFeaturedProducts () {

        const featuredData = [
            { img: "img/products/FEATURED/F6.jpeg", brandName: "PQR Designs", productName: "Elegant Blouse for Women", price: "1500", exPrice: "Rs.2000" },
            { img: "img/products/FEATURED/n4.jpg", brandName: "STU Apparel", productName: "Casual Jeans for Men", price: "1600", exPrice: "" },
            { img: "img/products/FEATURED/n2.jpg", brandName: "VWX Wear", productName: "Striped Shirt for Women", price: "900", exPrice: "Rs.1500" },
            { img: "img/products/FEATURED/n8.jpg", brandName: "LMN Fashion", productName: "Formal Trousers for Men", price: "2200", exPrice: "" },
            {img: "img/products/FEATURED/n1.jpg" , brandName:"Uiriuy", productName: "Funky Shirt for Men",  price: "1700", exPrice: "Rs.2100" },
            {img: "img/products/FEATURED/n3.jpg" , brandName:"Lymio",  productName: "Casual Shirt for Men", price: "800",  exPrice:  "Rs.1200" },
            {img: "img/products/FEATURED/n5.jpg" , brandName:"Laxeric",productName: "Casual Shirt for Men", price: "2700", exPrice: "Rs.3000" },
            {img: "img/products/FEATURED/n7.jpg" , brandName:"Kizyoo", productName: "Casual Shirt for Men", price: "1300", exPrice: "" }
            
        ];
        
        

        let section = document.querySelector("#featuredSection")
        addData(section,featuredData);
        
    }


    function addData(section, data) {
        let clutter = "";
        for (const iterator of data) {
            clutter += `<div class="products" >
            <img src="${iterator.img}" alt="" >
            <div class="description">
                <SPAN class="brandName">${iterator.brandName}</SPAN>
                <SPAN class="productName">${iterator.productName}</SPAN>
                <span class="price">Rs.${iterator.price} <span class="exPrice">${iterator.exPrice}</span></span>
                
            </div>
        </div>`
            }
            
            section.innerHTML = clutter
    }
    addFeaturedProducts ()
    addPopularProducts ()
    addTrendingProducts ()


    // //Single Product Description on Click

    let product = document.querySelectorAll(".products")
    product.forEach(element => {
       element.addEventListener("click", (details)=>{
        element.dataset;
       } )
    });