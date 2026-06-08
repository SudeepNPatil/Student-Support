import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const baseurl = `${import.meta.env.VITE_API_URL}`;

export default function useGetallProducts() {

    const [allProducts, setallProducts] = useState([]);

    useEffect(() => {

        fetch(`${baseurl}/Project`)
            .then(data => data.json())
            .then(data => setallProducts(data))

    }, [])

    return allProducts;
}