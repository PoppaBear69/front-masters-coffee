{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", () => \{\
    console.log("JavaScript is working!"); // Debugging check\
\
    // Select elements where we will display content\
    const menuContainer = document.querySelector("#menu");\
\
    // Sample menu items (use JSON if needed)\
    const menuItems = [\
        \{ name: "Cappuccino", price: "$3.75" \},\
        \{ name: "Espresso", price: "$2.50" \},\
        \{ name: "Latte", price: "$4.00" \}\
    ];\
\
    // Check if menuContainer exists in the DOM\
    if (menuContainer) \{\
        menuContainer.innerHTML = ""; // Clear existing content\
\
        menuItems.forEach(item => \{\
            const li = document.createElement("li");\
            li.textContent = `$\{item.name\} - $\{item.price\}`;\
            menuContainer.appendChild(li);\
        \});\
    \} else \{\
        console.warn("Menu container not found!");\
    \}\
\});\
}