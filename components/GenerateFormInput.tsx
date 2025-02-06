import React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const GenerateFormInput = () => {
  return (
    <div className="flex items-center gap-4 my-8">
      <Input
        id="description"
        type="text"
        placeholder="Write a prompt to generate form..."
        required
      />
      <Button className=" bg-gradient-to-r from-blue-500 to bg-purple-600">
        Generate Form
      </Button>
    </div>
  )
}

export default GenerateFormInput
