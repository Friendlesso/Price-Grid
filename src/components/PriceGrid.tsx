import { Community } from "./Community";
import { Subscription } from "./Subscription";
import { WhyUs } from "./WhyUs";

export function PriceGrid() {
  return(
    <section className="rounded-[1.250rem] overflow-hidden max-w-[90vw] w-2xl">
      <Community />
      <div className="flex sm:flex-row flex-col">
        <Subscription />
        <WhyUs />
      </div>
    </section>
  )
}