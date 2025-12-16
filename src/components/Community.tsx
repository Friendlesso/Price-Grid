import { community } from "../data/community"

export function Community() {
  
  return (
    <div className="flex flex-col gap-6 bg-white p-6">
      <h1 className="font-bold text-3xl text-(--text-h-teal)">{community.title}</h1>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-xl text-(--text-highligh-color)">{community.subTitle}</h2>
        <p className="text-(--text-p-color)">{community.description}</p>
      </div>
    </div>
  )
}