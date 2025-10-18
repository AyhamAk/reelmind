import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { Sparkles, Video, Plus, TrendingUp, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function TikTokPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  const trends = [
    { hashtag: "#viral", uses: "12.5M", growth: "+25%" },
    { hashtag: "#fyp", uses: "8.2M", growth: "+18%" },
    { hashtag: "#trending", uses: "5.8M", growth: "+32%" },
  ]

  const templates = [
    { name: "Trend Starter", category: "Viral", gradient: "from-cyan-500 to-blue-500" },
    { name: "Product Showcase", category: "Business", gradient: "from-blue-500 to-indigo-500" },
    { name: "Tutorial Template", category: "Educational", gradient: "from-indigo-500 to-purple-500" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-semibold">
              ReelMind
            </Link>
            <span className="text-muted-foreground">/</span>
            <h1 className="text-lg font-medium">TikTok Generator</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{session.user.name}</span>
            <Button asChild variant="outline" size="sm">
              <Link href="/">Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Create New Video</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <button className="group relative overflow-hidden rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-3">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Video</h3>
                  <p className="text-sm text-muted-foreground">Generate with AI</p>
                </div>
              </div>
            </button>
            <button className="group relative overflow-hidden rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 p-3">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">From Audio</h3>
                  <p className="text-sm text-muted-foreground">Start with sound</p>
                </div>
              </div>
            </button>
            <button className="group relative overflow-hidden rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 p-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Trend Based</h3>
                  <p className="text-sm text-muted-foreground">Use trending format</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Trending Section */}
        <div className="mb-8 rounded-lg border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Trending Now</h2>
              <TrendingUp className="h-5 w-5 text-cyan-500" />
            </div>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {trends.map((trend, index) => (
              <div key={index} className="rounded-lg border bg-muted/50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-mono text-lg font-semibold">{trend.hashtag}</p>
                  <span className="text-xs font-medium text-green-500">{trend.growth}</span>
                </div>
                <p className="text-sm text-muted-foreground">{trend.uses} uses</p>
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  Use Trend
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools */}
        <div className="mb-8 rounded-lg border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">AI-Powered Tools</h2>
            <Sparkles className="h-5 w-5 text-cyan-500" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-muted/50 p-4">
              <h3 className="mb-2 font-medium">AI Caption Generator</h3>
              <p className="mb-3 text-sm text-muted-foreground">Generate viral captions and hashtags</p>
              <Button variant="outline" size="sm" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Generate Caption
              </Button>
            </div>
            <div className="rounded-lg border bg-muted/50 p-4">
              <h3 className="mb-2 font-medium">Thumbnail Creator</h3>
              <p className="mb-3 text-sm text-muted-foreground">Create eye-catching thumbnails</p>
              <Button variant="outline" size="sm" className="gap-2">
                <Video className="h-4 w-4" />
                Create Thumbnail
              </Button>
            </div>
          </div>
        </div>

        {/* Viral Templates */}
        <div className="rounded-lg border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Viral Templates</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {templates.map((template, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg border transition-all hover:shadow-lg">
                <div className={`h-48 bg-gradient-to-br ${template.gradient} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <Video className="mx-auto mb-2 h-12 w-12" />
                    <p className="text-sm font-medium">{template.category}</p>
                  </div>
                </div>
                <div className="bg-card p-4">
                  <p className="font-medium">{template.name}</p>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    Use Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Videos */}
        <div className="mt-8 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Recent Videos</h2>
          <div className="text-center text-muted-foreground py-12">
            <Video className="mx-auto mb-3 h-12 w-12 opacity-50" />
            <p>No videos created yet</p>
            <Button className="mt-4 gap-2">
              <Plus className="h-4 w-4" />
              Create Your First Video
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
