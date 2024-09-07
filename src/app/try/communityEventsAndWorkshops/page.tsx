/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zK9XDc5UMND
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                />
              </svg>
              <span className="text-lg font-semibold">Community</span>
            </a>
          </div>
        </header>
        <main className="flex-1 bg-muted/40 p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Community Events & Workshops</h1>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-secondary text-secondary-foreground text-sm font-medium shadow-sm transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create Group
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-secondary text-secondary-foreground text-sm font-medium shadow-sm transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  Join Group
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src="/placeholder.svg" alt="Event Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Beginner's Guide to Gardening</h3>
                  <p className="text-muted-foreground">
                    Join our expert gardener for a hands-on workshop on the basics of gardening.
                  </p>
                </div>
                <div className="bg-muted/50 px-4 py-3 rounded-b-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">April 15, 2023</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 px-3 rounded-md bg-transparent text-muted-foreground text-sm font-medium shadow-sm transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Join
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src="/placeholder.svg" alt="Event Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Sustainable Living Workshop</h3>
                  <p className="text-muted-foreground">
                    Learn practical tips and techniques for living a more sustainable lifestyle.
                  </p>
                </div>
                <div className="bg-muted/50 px-4 py-3 rounded-b-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">May 20, 2023</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 px-3 rounded-md bg-transparent text-muted-foreground text-sm font-medium shadow-sm transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Join
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src="/placeholder.svg" alt="Event Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Mindfulness Meditation Retreat</h3>
                  <p className="text-muted-foreground">
                    Escape the city and join us for a weekend of mindfulness and meditation.
                  </p>
                </div>
                <div className="bg-muted/50 px-4 py-3 rounded-b-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">June 10-12, 2023</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 px-3 rounded-md bg-transparent text-muted-foreground text-sm font-medium shadow-sm transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Join
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src="/placeholder.svg" alt="Event Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Photography Masterclass</h3>
                  <p className="text-muted-foreground">
                    Improve your photography skills with our expert-led masterclass.
                  </p>
                </div>
                <div className="bg-muted/50 px-4 py-3 rounded-b-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">July 1, 2023</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 px-3 rounded-md bg-transparent text-muted-foreground text-sm font-medium shadow-sm transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Join
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src="/placeholder.svg" alt="Event Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Cooking Class: Healthy Meals</h3>
                  <p className="text-muted-foreground">
                    Learn to prepare delicious and nutritious meals in this hands-on cooking class.
                  </p>
                </div>
                <div className="bg-muted/50 px-4 py-3 rounded-b-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">August 5, 2023</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-8 px-3 rounded-md bg-transparent text-muted-foreground text-sm font-medium shadow-sm transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Join
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src="/placeholder.svg" alt="Event Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Outdoor Adventure Club</h3>
                  <p className="text-muted-foreground">
                    Join our community of outdoor enthusiasts for hiking, camping, and more.
                  </p>
                </div>
                <div className="bg-muted/50 px-4 py-3 rounded-b-lg flex items-center justify-between">
                  <div className="flex items-center gap-2" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }