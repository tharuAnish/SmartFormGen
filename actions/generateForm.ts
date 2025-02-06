"use server"

import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { z } from "zod"

export const generateForm = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser()
    if (!user) {
      return { success: false, message: "User not found" }
    }
    //define the schema for validation
    const schema = z.object({
      description: z.string().min(1, "Description is required"),
    })

    const result = schema.safeParse({
      description: formData.get("description") as string,
    })

    if (!result.success) {
      return {
        success: false,
        message: "Invalid form data",
        error: result.error.errors,
      }
    }

    const description = result.data.description
  } catch (error) {
    console.log("Error generated form", error)
    return {
      success: false,
      message: "An error occurred while generateing the form",
    }
  }
}
