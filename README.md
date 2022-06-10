# Actum Frontend

This is the frontend portion of an interview for the position of fullstack developer at ACTUM Digital.

The deployed app can be seen [here](https://actum-frontend-onenkokos.vercel.app/).

This repo concerns itself with tasks number one through seven.

1. **Featured Product:** One of the products should have a flag that it's a featured
   material. It should be displayed above the product list.
2. **Product List:** The product list should contain 6/4 materials. After hovering over
   the image, you should display the "add to cart" bar. Remember that some
   products have the bestseller flag.
3. **Add to Cart:** After clicking "Add to cart" the cart icon in the header should have
   a badge with the counter of elements in the cart. Each 'Add to cart' action should
   open the cart dropdown with items. The dropdown should be also visible after
   clicking the basket icon in the header. Clicking on the "Clear" button should
   remove items from the cart and hide the dropdown.
4. **Pagination:** Products should be paginated. On one page should be 6 items on
   desktop and 4 items on mobile. The pagination should show the current page.
   Hide the 'prev' arrow on the first page and hide the 'next' arrow on the last page.
5. **Sorting:** Implement 2 types of sorting: alphabetically or by price. Use basic
   HTML select. Clicking on arrows should change the order to 'ascending' or
   'descending'.
6. **Filtering:** Products should be filterable. You can filter products by multiple
   categories (multiple filters) and only one price range (single filter). Using filters
   should affect the pagination. Try to build filter options dynamically (don't
   hardcode them).
7. **Web performance:** Optimise Your website using lighthouse reports. Try to
   achieve an 80+ score in web core vitals. (mobile and desktop)

## Prerequisites

- Node (developed on version 16.x)
- Package manager (npm or yarn)
- Git

## What I didn't do, but would have if I had more time:

- Cleanup - some components could have been reused, I could have used more custom hooks, etc.
- Some tests would have been nice, especially when writing custom sorting functions
- I would have liked to provide a Dockerfile
- **Most of all** I would have liked it if I had enough time to connect this to my own custom api delpoyed [here](https://protected-ocean-79858.herokuapp.com) (you can check out the `/playground`), the repo for which can be found [here](https://github.com/onenKokos/actum-backend). But not connecting it, I only wasted time, which I desperatly needed for this task.

## Local development

Install all dependencies with the package manager of your choice. I used `yarn` but it should work with `npm` as well. Simply run `yarn` or `npm install` in your project root.

Finally, you can start the application in development mode by running `yarn dev` or `npm run dev`.

The Production build can be obtained by running `yarn build` or `npm run build` and the resulting built can be run by `yarn start` or `npm run start`.
