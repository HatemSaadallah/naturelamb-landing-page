import * as React from 'react';
import { useParams } from 'react-router-dom'
import Navb from '../../Components/Navbar/navbar';
export default function ProductDetails(props) {
    const { id } = useParams()

    return (
        <div>
            <Navb />
        </div>
    );
}