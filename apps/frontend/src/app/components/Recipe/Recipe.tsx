import React from 'react';

export interface Props {
  title: string;
  content?: string;
  className?: string;
  ingredients: {
      name: string;
      quantity?: number;
      peopleNumber?: number;
    }[];
}

const Recipe = ({ title, content, ingredients, className, ...rest }: Props) => {
  return (
    <div className={`recipe ${className || ''}`} {...rest}>
        <h3 className='recipe--title'>{title}</h3>
        <p className='recipe--content'>{content}</p>
        <div className='recipe--ingredients'>
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} // todo: replace with recipeIngredient id
              className='recipe--ingredient'
            >
              <h4 className='recipe--ingredientName'>{ingredient.name}</h4>
              <strong className='recipe--ingredientQuantity' >{ingredient.quantity}</strong>
              pour
              <span className='recipe--ingredientPeopleNumber'>{ingredient.peopleNumber}</span>
            </div>
          ))}
        </div>
    </div>
  );
};

export default React.memo(Recipe);
