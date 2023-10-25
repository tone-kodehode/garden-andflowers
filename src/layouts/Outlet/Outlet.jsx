
import { ImageBanner } from "../../components/Banner/Banner"
import { CategoriesDisplay } from "../../components/Categories/CategoriesDisplay"
import { JoinUsForm } from "../../components/Forms/JoinUsForm"
export const Outlet = () => {
  return (
    <div>
        <ImageBanner />
        <CategoriesDisplay />
        <JoinUsForm />
    </div>
  )
}
