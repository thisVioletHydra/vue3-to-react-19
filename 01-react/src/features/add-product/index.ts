// PUBLIC API. Снаружи: import { AddProductForm } from "../features/add-product"
// Почему named, не default: lazy вешают на PAGE, форма едет в том же чанке.
// Ленивить одну форму отдельно нет смысла, пока она не 200кб.

export { AddProductForm } from "./ui/AddProductForm";
