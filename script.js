function purchasingBook({title, author, price}, discountPct, taxPct, isAvailable){
    if(isAvailable){
        const discountAmt = price * discountPct / 100;
        const priceAftDsc = price - discountAmt; 
    
        const taxAmt = priceAftDsc * taxPct / 100;
        const priceAftTax = priceAftDsc + taxAmt;
        
        console.log(`Title of book : ${title}`);
        console.log(`Author of book : ${author}`);
        console.log(`Original book price : Rp.${price}`);
        console.log(`Discount percentage : ${discountPct}%`);
        console.log(`Discount amount : Rp.${discountAmt}`);
        console.log(`Price after discount : Rp.${priceAftDsc}`);
        console.log(`Tax percentage : ${taxPct}%`);
        console.log(`Tax amount : Rp.${taxAmt}`);
        console.log(`Price after tax : Rp.${priceAftTax}`);

        const purchasedBook= {
            title, 
            author, 
            price,
            discountAmt, 
            priceAftDsc,
            taxAmt,
            priceAftTax
        }

        return purchasedBook;
    }else{
        console.log('Book is not available');
    }
}

let book = {
    title: 'Sapiens A Brief History of Human',
    author: 'Yuval Noah Harari',
    price: 220000,
}

const purchasedBook = []
purchasedBook.push(purchasingBook(book, 10, 5, true));