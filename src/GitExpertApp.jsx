import React, { useState } from 'react'
import { AddCategory , GifGrid} from './componets';


const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (NewCategory) => {

    //valida si el item ya existe no lo agrga
    if (categories.includes(NewCategory)) return;

    //se modifica el estado
    setCategories([NewCategory, ...categories]);
  }

  return (
    <>
      <h1>GitExpertApp </h1>
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}

      />
       
        {
          categories.map((category) =>
          (
            <GifGrid
                key={category}
                category={category}
            />
          ))
        }
        
        
      
    </>
  )
}

export default GitExpertApp

