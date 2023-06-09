import GifItem from './GifItem';
import useFetchGifs from '../Hooks/useFetchGifs';



export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs( category );

  console.log( { images,isLoading});
 


  return ( 
    <>
      <h3>{category}</h3> 
      {/* if corto con una sola condición */}
       { isLoading && <h2>Cargando...</h2>}
      <div className='card-grid'>
        {
            images.map( (image) => (
              <GifItem 
                  key={image.id}
                  { ...image}
                 

              />
               
            ))
        }
      </div>
    </>
  )
}

export default GifGrid
