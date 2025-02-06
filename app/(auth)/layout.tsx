import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center min-h-screen min-w-screen">
      {children}
      <Link href="/">
        <Button>Return to Homepage</Button>
      </Link>
    </div>
  )
}

export default Layout
