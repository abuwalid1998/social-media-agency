import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const caseStudies = [
    {
      id: 1,
      title: "Fashion Retailer",
      description: "Increased social media engagement by 150% and drove a 35% increase in website traffic.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Tech Startup",
      description: "Generated 500+ qualified leads through targeted LinkedIn campaigns.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Food & Beverage Brand",
      description: "Grew Instagram following by 10,000+ in 3 months with creative content strategy.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Our Work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Case Studies</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how we've helped businesses like yours achieve remarkable results through strategic social media
              marketing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden">
              <div className="relative h-[200px] w-full">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{study.title}</h3>
                <p className="mt-2 text-muted-foreground">{study.description}</p>
                <Button variant="link" className="mt-2 p-0">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="#">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
