import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const baseurl = `${import.meta.env.VITE_API_URL}`;

export default function useGetProduct() {

    const { category, projectId } = useParams();

    const [getdata, setgetdata] = useState({});

    useEffect(() => {

        if (!projectId) return;

        fetch(`${baseurl}/Project/${category}/${projectId}`)
            .then(data => data.json())
            .then(data => setgetdata(data))

    }, [projectId]);

    getdata.quantity = 1;

    return getdata;
}