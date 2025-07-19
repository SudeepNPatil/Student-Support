import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useGetProduct() {

    const { category, projectId } = useParams();

    const [getdata, setgetdata] = useState({});

    useEffect(() => {

        if (!projectId) return;

        fetch(`https://student-support-s0xt.onrender.com/Project/${category}/${projectId}`)
            .then(data => data.json())
            .then(data => setgetdata(data))

    }, [projectId]);

    getdata.quantity = 1;

    return getdata;
}