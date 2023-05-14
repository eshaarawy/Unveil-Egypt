function filterItems() {
            // Get input value and convert it to lowercase
            var input = document.getElementById('search').value.toLowerCase();

            // Get all items to filter
            var cities = document.getElementsByClassName('city');

            // Iterate through each item
            for (var i = 0; i < cities.length; i++) {
                var city = cities[i];
                var text = city.innerText.toLowerCase();

                // Check if the item's text starts with the input value
                if (text.startsWith(input)) {
                    city.style.display = 'block';
                } else {
                    city.style.display = 'none';
                }
            }
        }
