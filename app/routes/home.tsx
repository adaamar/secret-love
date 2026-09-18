import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("")
  const [bgValue, setBgValue] = useState<string>("")
  const [btnValue, setBtnValue] = useState<string>("")
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const currectName: string[] = ["nour", "nor", "نور"]
  const handleClick = () => {
    if (!inputValue) {
      alert("I think khask tktb hya lwla🙃")
    } else if (!currectName.includes(inputValue.toLowerCase())) {
      setBtnValue("Lae7 ralaat 😤")
    } else {
      const text = " I love you my sweet wife🥹🤍"
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      setBgValue(text)
      let repeatCount = 1
      intervalRef.current = setInterval(() => {
        repeatCount += 1
        setBgValue(currentValue => currentValue + text)

        if (repeatCount >= 100 && intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }, 100)
    }

  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="w-full ">
      <p className="animate-pulse text-center">{bgValue}</p>
      {bgValue &&
        <div className="bg-[#ff798f67] fixed top-0 h-screen w-full flex flex-col justify-center items-center">
          <h1 className="text-9xl animate-ping">🤍</h1>
          <h1 className="text-xl font-serif bg-pink-600 p-1 rounded-md">Pure love for my Angel🌹</h1>
        </div>
      }

      {bgValue === "" &&
        <div className="flex flex-col gap-3 bg-pink-800 w-full text-white p-5 fixed top-1/3 rounded-xl">
          <h1 className="text-xl">What is your husband(Adam) dream daughter name</h1>
          <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="Chno ism" className="bg-pink-900 p-3 rounded-xl text-lg" />
          <button onClick={handleClick} className="p-3 bg-white text-black text-xl max-w-max rounded-full self-center active:scale-90 duration-200 cursor-pointer">{!btnValue ? "Ktb hna 👆" : btnValue}</button>
        </div>
      }
    </div>
  )
}
