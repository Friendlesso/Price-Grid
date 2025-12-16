import { whyUs } from "../data/whyUs"

export function WhyUs() {
  return(
    <div className="flex flex-col sm:w-1/2 w-full sm:p-8 p-4 bg-(--second-row-bg)">
      <h2 className="text-xl text-white pb-3">{whyUs.title}</h2>
      <p className="text-(--text-p-color)">{whyUs.description}</p>
    </div>
  )
}