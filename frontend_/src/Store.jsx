import React from 'react';
import {ethers} from 'ethers';
import axios from 'axios'
import { darkviolet } from 'color-name';

const API_URL = 'http://localhost:4000';
const ITEMS = [
    {
        id: 1,
        price: ethers.utils.parseEther('100')
    },
    {
        id: 2,
        price: ethers.utils.parseEther('200')
    }
];

function Store() {
    const buy = async item => {
        const response1 = await axios.get(`${API_URL}/api/getPayment/${item.id}`);
        const tx1 = await dai.approve(paymentProcessor.address, item.price);
        await tx1.wait();

        const tx2 = await paymentProcessor.pay(item.price, response1.data.paymentId);
        await tx2.wait();

        await new Promise(resolve => setTimeout(resolve, 5000));

        const response2 = await axios.get(`${API_URL}/api/getItemUrl/${response1.data.paymentId}`);
        console.log(response2);
    }
}