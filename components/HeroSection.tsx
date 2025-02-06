"use client"
import { useState } from "react"
import GenerateFormInput from "./GenerateFormInput"
import { Button } from "./ui/button"

type SuggestionText = {
  label: string
  text: string
}

const suggestionBtnText: SuggestionText[] = [
  {
    label: "Job Application",
    text: "Develop a basic job application form that serves as a one-page solution form collecting essential information from applicants.",
  },
  {
    label: "Registration Form",
    text: "Create a course registration form suitable form any scheool or instituition.",
  },
  {
    label: "Feedback Form",
    text: "Create a client feedback form to gather valuable insights from any clients.",
  },
]

const HeroSection = () => {
  const [text, setText] = useState<string>("")
  return (
    <section>
      <div className="relative">
        {/* Glow effect  */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50 -z-10"></div>

        <div className="container mx-auto text-center relative">
          <h1 className="text-4xl font-bold">
            Build AI-Driven Forms Effortlessly
          </h1>
          <p className="mt-4 text-lg ">
            Leverage the power of AI to create responsive and dynamic froms in
            minutes
          </p>
        </div>
      </div>
      {/* create input field  */}
      <GenerateFormInput />
      <div className="grid grid-cols-4 gap-3">
        {suggestionBtnText.map((item: SuggestionText, index: number) => (
          <Button
            onClick={() => setText(item.text)}
            key={index}
            className="rounded-full h-10"
            variant={"outline"}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
