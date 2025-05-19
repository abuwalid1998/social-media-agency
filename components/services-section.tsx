import { Instagram, Facebook, Twitter, Youtube, TrendingUp, BarChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Social Media Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a full range of social media marketing services to help your business thrive in the digital
              landscape.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Instagram className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Content Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Eye-catching, brand-aligned content that resonates with your target audience and drives engagement.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Facebook className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Community Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Active engagement with your audience to build relationships, address concerns, and foster brand loyalty.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Twitter className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Social Media Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Customized strategies tailored to your business goals, target audience, and industry benchmarks.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Youtube className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Paid Advertising</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Strategic ad campaigns that maximize ROI, increase brand awareness, and drive conversions.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Influencer Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Partnerships with relevant influencers to expand your reach and build credibility with new audiences.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <BarChart className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Analytics & Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Comprehensive performance tracking and insights to continuously optimize your social media presence.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
