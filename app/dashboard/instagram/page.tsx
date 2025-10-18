import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { Sparkles, Image as ImageIcon, Wand2, Plus, Layout, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function InstagramPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  const templates = [
    { name: "Story Template", type: "Story", gradient: "from-purple-500 to-pink-500" },
    { name: "Post Template", type: "Post", gradient: "from-pink-500 to-rose-500" },
    { name: "Reel Template", type: "Reel", gradient: "from-rose-500 to-orange-500" },
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
            <h1 className="text-lg font-medium">Instagram Generator</h1>
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
          <h2 className="mb-4 text-2xl font-semibold">Create New Content</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <button className="group relative overflow-hidden rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-3">
                  <Layout className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Instagram Post</h3>
                  <p className="text-sm text-muted-foreground">Create a feed post</p>
                </div>
              </div>
            </button>
            <button className="group relative overflow-hidden rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 p-3">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Story</h3>
                  <p className="text-sm text-muted-foreground">Create a story</p>
                </div>
              </div>
            </button>
            <button className="group relative overflow-hidden rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 p-3">
                  <Film className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Reel</h3>
                  <p className="text-sm text-muted-foreground">Create a reel</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* AI Tools */}
        <div className="mb-8 rounded-lg border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">AI-Powered Tools</h2>
            <Sparkles className="h-5 w-5 text-purple-500" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-muted/50 p-4">
              <h3 className="mb-2 font-medium">AI Caption Generator</h3>
              <p className="mb-3 text-sm text-muted-foreground">Generate engaging captions for your posts</p>
              <Button variant="outline" size="sm" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Generate Caption
              </Button>
            </div>
            <div className="rounded-lg border bg-muted/50 p-4">
              <h3 className="mb-2 font-medium">AI Image Enhancement</h3>
              <p className="mb-3 text-sm text-muted-foreground">Enhance and optimize your images</p>
              <Button variant="outline" size="sm" className="gap-2">
                <Wand2 className="h-4 w-4" />
                Enhance Image
              </Button>
            </div>
          </div>
        </div>

        {/* Templates */}
        <div className="rounded-lg border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Popular Templates</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {templates.map((template, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg border transition-all hover:shadow-lg">
                <div className={`h-48 bg-gradient-to-br ${template.gradient} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <Layout className="mx-auto mb-2 h-12 w-12" />
                    <p className="font-medium">{template.type}</p>
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

        {/* Recent Creations */}
        <div className="mt-8 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Recent Creations</h2>
          <div className="text-center text-muted-foreground py-12">
            <ImageIcon className="mx-auto mb-3 h-12 w-12 opacity-50" />
            <p>No content created yet</p>
            <Button className="mt-4 gap-2">
              <Plus className="h-4 w-4" />
              Create Your First Post
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
