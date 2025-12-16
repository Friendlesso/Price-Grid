import { subscription } from "../data/price"

export function Subscription() {
  return (
    <div className="sm:p-8 p-4 bg-(--first-row-bg) sm:w-1/2 w-full">
      <div className="mb-8">
        <h2 className="text-xl text-white pb-3">{subscription.title}</h2>
        <div className="flex items-center gap-3">
          <p className="text-3xl text-white font-bold">
            {subscription.price.unit}
            {subscription.price.value}
          </p>
          <p className="text-(--text-p-color)">
            {subscription.pricePre}
          </p>
        </div>
        <p className="text-gray-100">{subscription.description}</p>
      </div>
      <a className="text-white bg-(--button-color) flex justify-center py-2 rounded-lg" href="#" rel="noopener noreferrer">Sign up</a>
    </div>
  )
}