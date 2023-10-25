

import { CategoriesCard } from "./CategoriesCard"
import mapArray from "../../utils/mapArray"
import { categoryList } from "../../data/categoryList"

import CategoriesDisplayStyles from '../../styles/CategoriesStyles/CategoriesDisplay.module.css'

export const CategoriesDisplay = () => {
  const {listArray} = categoryList


  return (
    <div className={CategoriesDisplayStyles.displayContaner}>
      {mapArray(listArray, (category) => (
        <CategoriesCard
          key={category.id}
          imageUrl={category.imageUrl}
          label={category.label}
          alt={category.alt}
          title={category.title}
          buttons={category.buttons}
        />
      ))}
    </div>
  )
}

