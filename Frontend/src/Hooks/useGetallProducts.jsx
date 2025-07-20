import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function useGetallProducts() {

    const [allProducts, setallProducts] = useState([]);

    useEffect(() => {

        fetch('https://student-support-s0xt.onrender.com/Project')
            .then(data => data.json())
            .then(data => setallProducts(data))

    }, [])

    allProducts.quantity = 1;

    return allProducts;
}