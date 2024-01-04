import React, { createContext, useState, useEffect } from "react";
//create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);
  const [books, setBooks] = useState([]);
  const [data, setdata] = useState([]);

  //RapidAPI
    const url = "https://hapi-books.p.rapidapi.com/nominees/romance/2020";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9e18504d3emsh96cefe2385ea264p1c2072jsnfdbf45026d48",
        "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      },
    };

  //FakeStoreApi
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(url, options);
      const data = await response.json();
     setBooks(data)
    };
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
        setProducts(data);
    };
    fetchProducts();
    fetchBooks();
 
  }, []);

  useEffect(() => {
    if (books.length > 0 && products.length > 0) {
      const finalData = products.map((product, index) => {
        console.log("product:category ", product.category);
            console.log("books[index]: ", books[index].author);
        return {
          ...product,
          id: books[index].book_id,
          price: product.price,
          title: books[index].name,
          category: books[index].author,
          image: books[index].cover,
        };}
       
       );
      
       setdata(finalData)
       console.log('finalData: ', finalData);
  } 
  }, [books, products]);
  
  return (
    // <ProductContext.Provider value={{ products }}>
    <ProductContext.Provider
      value={{
        products:data
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
