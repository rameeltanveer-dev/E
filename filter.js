
  document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('categoryFilter');
    const brandFilter = document.getElementById('brandFilter');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const cards = document.querySelectorAll('.card');
    
    // Update price value display when slider changes
    priceRange.addEventListener('input', function () {
      priceValue.textContent = priceRange.value;
      filterCards();
    });

    // Update cards based on filters
    categoryFilter.addEventListener('change', filterCards);
    brandFilter.addEventListener('change', filterCards);

    function filterCards() {
      const selectedCategory = categoryFilter.value.toLowerCase();
      const selectedBrand = brandFilter.value.toLowerCase();
      const maxPrice = parseInt(priceRange.value);

      cards.forEach(function (card) {
        const category = card.querySelector('.card-text').textContent.toLowerCase();
        const brand = card.querySelector('.card-title').textContent.toLowerCase();
        const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));

        let categoryMatch = selectedCategory ? category.includes(selectedCategory) : true;
        let brandMatch = selectedBrand ? brand.includes(selectedBrand) : true;
        let priceMatch = price <= maxPrice;

        if (categoryMatch && brandMatch && priceMatch) {
          card.style.display = 'block'; // Show card
        } else {
          card.style.display = 'none'; // Hide card
        }
      });
    }
  });

