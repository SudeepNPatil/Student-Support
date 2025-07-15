import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Productdetails() {

    const { category } = useParams();

    const [targetdata, gettargetdata] = useState([])

    useEffect(() => {

        if (!category) return;

        fetch(`https://student-support-s0xt.onrender.com/Project/${category}`)
            .then(data => data.json())
            .then(data => gettargetdata(data))
            .catch(error => console.error("failed to load the data"));

    }, [category]);

    return targetdata;
}