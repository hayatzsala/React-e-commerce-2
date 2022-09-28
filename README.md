# Overview

We're going to increase the intensity up a notch. This time you will create an e-commerce website. Just the same idea, but different tactics.

## Requirements

Note: Yes, requirements, not instructions. Work with your partner to find what needs to be done to finish the needed deliverables :D. Let us know in Slack if you need any help. Also, if you finish early and think you can help, let us know.

1. Add React Router dom by entering `react-router-dom` in the Dependencies tab on the left.
2. Create a page called `<ProductsList />` that will fetch all products from this API

```jsx
const ALL_PRODUCTS_URL = 'https://fakestoreapi.com/products';
```

2. In the `<ProductsList />` page, map over all the products and show their titles and the price. The titles should be clickable and would take the user to a new page `<ProductInfo />` that will show the rest of the post information.
3. With `<ProductInfo />` you can pass the data using one of two methods: pass the object that you mapped in `<ProductsList />` page as a prop or only pass the ID and use fetch inside `<ProductInfo />` to get the data using this API endpoing.

```jsx
const ONE_PRODUCT_URL = 'https://fakestoreapi.com/products/${postId}';
```

Note: You don't have to do HTML and CSS from scratch, you can always find resources online and use them for the sake of time. Look at [this](https://tailwindcomponents.com/).
