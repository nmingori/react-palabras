import React from 'react';

export interface Category {
    name: string;
    color: string;
}

export const Categories = {
    FRUTAS: {
        name: "Frutas o verduras",
        color: "orange"
    },
    OBJETOS: {
        name: "Objetos",
        color: "gray"
    },
    ANIMALES: {
        name: "Animales",
        color: "green"
    },
    ENG_BODY_PARTS: {
        name: "Body Parts (Partes del cuerpo)",
        color: "blue"
    },
    ENG_COLOURS: {
        name: "Colours (Colores)",
        color: "red"
    },
    ENG_DAYS_OF_THE_WEEK: {
        name: "Days of the week (Días de la semana)",
        color: "purple"
    }
}

interface CategoryGroup {
    title: string;
    categories: Category[];
}

const menuCategories:CategoryGroup[] = [
    {
        title: "Español:",
        categories: [
            Categories.FRUTAS, Categories.OBJETOS, Categories.ANIMALES
        ]
    },
    {
        title: "Inglés:",
        categories: [
            Categories.ENG_BODY_PARTS, Categories.ENG_COLOURS, Categories.ENG_DAYS_OF_THE_WEEK
        ]
    }
];

const Menu = ({setCategory}: any) => {

    return (
        <div>
            <p className="-h1 -mb-3">Palabras</p>

            {menuCategories.map(categoryGroup => (
                <div className="-d-flex-col-center -mb-3" key={categoryGroup.title} >
                    <p className="-h4 -mb-2">{categoryGroup.title}</p>

                    {categoryGroup.categories.map(category => (
                        <button type="button" className={"btn -color-white -mb-2 -bg-" + category.color} onClick={() => setCategory(category)} key={category.name}>{category.name}</button>
                    ))}     
                </div> 

            ))}
        </div>
    )
}

export default Menu;