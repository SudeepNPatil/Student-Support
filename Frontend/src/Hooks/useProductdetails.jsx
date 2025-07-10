import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Productdetails() {

    const { category } = useParams();

    const [targetdata, gettargetdata] = useState([])

    useEffect(() => {

        if (!category) return;

        fetch(`http://localhost:5000/Project/${category}`)
            .then(data => data.json())
            .then(data => gettargetdata(data))
            .catch(error => console.error("failed to load the data"));

    }, [category]);

    console.log(targetdata);

    return targetdata;
}