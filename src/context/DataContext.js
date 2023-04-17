import {createContext, useEffect, useState} from 'react';
import { useToast } from "izitoast-react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([]);
    const [products, setProducts] = useState([]);
    const [cat, setCat] = useState([]);
    const [subCat, setSubCat] = useState([]);
    const [users, setUsers] = useState([]);
    const [logged, setLogged] = useState([]);


    useEffect(()=>{
        const items = {
            "items": [
              {
                "id": 1,
                "image":"assets/images/product/fashion/product-8.png",
                "oldprice":20,
                "price":50,
                "title": "1st post",
                "off": "10% Off",
                "sold": 90,
                "datetime": "July 16, 2021 11:47:39 AM",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              },
              {
                "id": 2,
                "image":"assets/images/product/fashion/product-7.png",
                "oldprice":20,
                "price":30,
                "title": "2nd post",
                "off": "30% Off",
                "sold": 1,
                "datetime": "July 16, 2021 11:47:39 AM",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              },
              {
                "id": 3,
                "image":"assets/images/product/fashion/product-6.png",
                "oldprice":20,
                "price":100,
                "title": "3rd post",
                "off": "20% Off",
                "sold": 10,
                "datetime": "July 16, 2021 11:47:39 AM",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              },
              {
                "id": 4,
                "image":"assets/images/product/fashion/product-5.png",
                "oldprice":20,
                "price":19,
                "title": "4th post",
                "off": "19% Off",
                "sold": 40,
                "datetime": "July 16, 2021 11:47:39 AM",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              },
              {
                "id": 5,
                "image":"assets/images/product/fashion/product-4.png",
                "oldprice":20,
                "price":120,
                "title": "5th post",
                "off": "15% Off",
                "sold": 20,
                "datetime": "July 16, 2021 11:47:39 AM",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              },
              {
                "id": 6,
                "image":"assets/images/product/fashion/product-3.png",
                "oldprice":20,
                "price":70,
                "title": "6th post",
                "off": "10% Off",
                "sold": 20,
                "datetime": "July 16, 2021 11:47:39 AM",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            ]
          };
          if (localStorage.getItem("items") === null) {
            localStorage.setItem('items', JSON.stringify(items));
            setProducts(items);
          } else {
            localStorage.setItem('items', JSON.stringify(items));
            let siteData = JSON.parse(localStorage.getItem("items"));
            setProducts(siteData.items);
          }

          const category = {
            "category": [
              {
                "id": 1,
                "name":"Vegetables",
              },
              {
                "id": 2,
                "name":"Clothes",
              },{
                "id": 3,
                "name":"Wine",
              }
            ]
          };
          if (localStorage.getItem("category") === null) {
            localStorage.setItem('category', JSON.stringify(category));
            setCat(category);
          } else {
            let siteCat = JSON.parse(localStorage.getItem("category"));
            setCat(siteCat.category.reverse());
          }

          
          const subcategory = {
            "subcategory": [
              {
                "id": 1,
                "catid":1,
                "name":"Carrot",
              },{
                "id": 2,
                "catid":1,
                "name":"Cucumber",
              },{
                "id": 3,
                "catid":2,
                "name":"Suit",
              },{
                "id": 4,
                "catid":2,
                "name":"Trousers",
              },{
                "id": 5,
                "catid":2,
                "name":"Wrapper",
              }
            ]
          };
          if (localStorage.getItem("subcategory") === null) {
            localStorage.setItem('subcategory', JSON.stringify(subcategory));
            setSubCat(subcategory);
          } else {
            let siteSubCat = JSON.parse(localStorage.getItem("subcategory"));
            setSubCat(siteSubCat.subcategory.reverse());
          }


        const cart = ([

        ]);
        if (localStorage.getItem("cart") === null) {
          setCartItem(localStorage.setItem('cart', JSON.stringify(cart)));
        } else {
          let cartData = JSON.parse(localStorage.getItem("cart"));
          setCartItem(cartData);
        }

        const users = [

        ];
        if (localStorage.getItem("users") === null) {
          setUsers(localStorage.setItem('users', JSON.stringify(users)));
        } else {
          let userData = JSON.parse(localStorage.getItem("users"));
          setUsers(userData);
        }

    },[])
    
    
    const addToCart = (productid, products) => {
        const data = products.find((item) => item.productid === productid);
        if (data!==undefined) {
            const id = data.id;
            const num = data.num+1;
            const productid = data.productid;
            const editCart = {id, productid, num};
            const updateCart = products.map((item)=> item.id===id ? {...editCart} : item);
            setCartItem(updateCart);
            localStorage.setItem('cart', JSON.stringify(updateCart));
            showMessage() 
        } else {
            const id = cartItem.length ? cartItem[cartItem.length-1].id+1 : 1;
            const newCart = {id, productid, num:1};
            const listCart = [...cartItem, newCart];
            setCartItem(listCart);
            localStorage.setItem('cart', JSON.stringify(listCart));
            showMessage()   
        }
    }
    

    const deleteItemMessage = useToast({
        title: "Success:",
        message: "Item Removed from Cart",
        backgroundColor: "red",
        messageColor: "white",
        titleColor: "white",
        position: "topRight",
        icon: "info"
    });

    const showMessage = useToast({
        title: "Success:",
        message: "Item Added to Cart",
        backgroundColor: "green",
        messageColor: "white",
        titleColor: "white",
        position: "topRight",
        icon: "info"
    });

    
    const loginFailedMessage = useToast({
      title: "Failed: ",
      message: "Invalid Login Details",
      backgroundColor: "red",
      messageColor: "white",
      titleColor: "white",
      position: "topRight",
      icon: "info"
  });
    
    const regSuccessMessage = useToast({
      title: "Registered!",
      message: "You can now Login",
      backgroundColor: "green",
      messageColor: "white",
      titleColor: "white",
      position: "topRight",
      icon: "info"
  });

    const clearCartMessage = useToast({
        title: "Success:",
        message: "Cart has been Cleared",
        backgroundColor: "blue",
        messageColor: "white",
        titleColor: "white",
        position: "topRight",
        icon: "info"
    });

    const checkLogged=() => {
      
      
      if(logged.length===0){
        return false;
      }else{
        
        return true;
      }
    }

    return (
        <DataContext.Provider value={{
            cartItem, setCartItem, showMessage, addToCart, products, setProducts, regSuccessMessage, loginFailedMessage,
            clearCartMessage, deleteItemMessage, setUsers, users, logged, setLogged, checkLogged, cat, setCat, setSubCat,
            subCat
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext; 