import React from 'react';

const Store = React.createContext({
        parties = {
            id: Date.now(),
            party_name: '',
            host: '',
            guests: '',
            theme: '',
            date: '',
            budget: 0,
            category_id: ''
        },
        categories = {
            id: '',
            category: ''
        },
       todo_list = {
           id: Date.now(),
           task: '',
           completed: false
       },
       shop_list = {
           id: Date.now(),
           item: '',
           price: 0,
           purchased: false
       },
       pictures = {
           id: Date.now(),
           url: '',
           party_id: ''
       } 
})
