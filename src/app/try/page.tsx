"use client";
export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-muted">
      <header className="bg-background shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            Community Support
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:underline">
              Explore
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Groups
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Events
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              About
            </a>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex flex-col gap-8">
        <div className="relative flex-1 max-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Search groups..."
            className="w-full rounded-lg bg-background pl-8 pr-4 py-2"
          />
        </div>
        <section className="bg-background rounded-lg shadow p-4">
          <h3 className="text-lg font-bold mb-2">Top Groups</h3>
          <div className="grid gap-4">
            <div className="bg-background rounded-lg shadow p-4">
              <h4 className="text-base font-semibold">Design Enthusiasts</h4>
              <p className="text-sm text-muted-foreground">A community for designers to share ideas and collaborate.</p>
            </div>
            <div className="bg-background rounded-lg shadow p-4">
              <h4 className="text-base font-semibold">Tech Innovators</h4>
              <p className="text-sm text-muted-foreground">
                Discuss the latest advancements in technology and software development.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow p-4">
              <h4 className="text-base font-semibold">Sustainability Advocates</h4>
              <p className="text-sm text-muted-foreground">
                Join us in promoting eco-friendly practices and environmental awareness.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-background rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
          <form className="grid gap-4">
            <div>
              <label htmlFor="title" className="block mb-1 text-sm font-medium">
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter a title"
                className="w-full rounded-lg bg-muted px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1 text-sm font-medium">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter a description"
                rows={4}
                className="w-full rounded-lg bg-muted px-4 py-2 text-sm"
              />
            </div>
            <button
              type="submit"
              className="justify-self-end inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Submit
            </button>
          </form>
        </section>
        <section className="bg-background rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
          <div className="grid gap-4">
            <div className="bg-background rounded-lg shadow p-4">
              <div className="mb-2">
                <h3 className="text-base font-semibold">Introducing our new product line</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="#" className="font-medium">
                    John Doe
                  </a>
                  - 2 days ago
                </p>
              </div>
              <p>
                We're excited to announce the launch of our new product line, designed to revolutionize the industry.
                Check it out and let us know what you think!
              </p>
            </div>
            <div className="bg-background rounded-lg shadow p-4">
              <div className="mb-2">
                <h3 className="text-base font-semibold">Tips for effective team collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="#" className="font-medium">
                    Jane Smith
                  </a>
                  - 1 week ago
                </p>
              </div>
              <p>
                Collaboration is key to success. In this post, we share our top tips for building an effective team and
                fostering productive collaboration.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow p-4">
              <div className="mb-2">
                <h3 className="text-base font-semibold">Upcoming community event</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="#" className="font-medium">
                    Alex Johnson
                  </a>
                  - 3 days ago
                </p>
              </div>
              <p>
                Join us for our upcoming community event where we'll be discussing the latest industry trends and
                networking with fellow professionals.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 mt-auto">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm text-muted-foreground">
          <p>&copy; 2023 Acme Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}