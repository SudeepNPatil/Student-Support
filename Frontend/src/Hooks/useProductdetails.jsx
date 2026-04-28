import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const baseurl = `${import.meta.env.VITE_API_URL}`;

export default function Productdetails() {

    const { category } = useParams();

    const [targetdata, gettargetdata] = useState([])

    useEffect(() => {

        if (!category) return;

        fetch(`${baseurl}/Project/${category}`)
            .then(data => data.json())
            .then(data => gettargetdata(data))
            .catch(error => console.error("failed to load the data"));

    }, [category]);

    return targetdata;
}