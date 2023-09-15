const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

// ==============================

categories.forEach(el => {
    const categoriesName = el.querySelector('h2').textContent;
    const categoriesChild = el.querySelectorAll('ul li');

    console.log(`Category: ${categoriesName}\nElements: ${categoriesChild.length}`);
});