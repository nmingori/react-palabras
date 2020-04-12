import * as React from 'react';

export enum Categories {
    FRUTAS = "Frutas o verduras",
    OBJETOS = "Objetos",
    ANIMALES = "Animales",

    ENG_BODY_PARTS = "Body Parts (Partes del cuerpo)",
    ENG_COLOURS = "Colours (Colores)",
    ENG_DAYS_OF_THE_WEEK = "Days of the week (Días de la semana)"
}

interface CategoryGroup {
    title: string;
    categories: Categories[];
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
        <div className="container">
            <h2 className="mb-4">Palabras</h2>

            {menuCategories.map(categoryGroup => (
                <div className="row justify-content-center mb-4" key={categoryGroup.title} >
                    <div className="d-flex flex-column">
                        <h5>{categoryGroup.title}</h5>

                        {categoryGroup.categories.map(categoryName => (
                            <button type="button" className="btn btn-primary mb-1"onClick={() => setCategory(categoryName)} key={categoryName}>{categoryName}</button>
                        ))}                     
                    </div>
                </div> 

            ))}
        </div>
    )
}

export default Menu;