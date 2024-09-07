/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B675vt6zm0r
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="flex flex-col h-full">
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Therapy Sessions</h1>
          <div className="flex items-center gap-4">
            <button className="bg-primary-foreground/10 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v18a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 6a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6.75A.75.75 0 0112 6zm5.25 3a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0v-9a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Calendar</span>
            </button>
            <button className="bg-primary-foreground/10 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Profile</span>
            </button>
          </div>
        </header>
        <main className="flex-1 grid grid-cols-[2fr_1fr] gap-6 p-6">
          <section>
            <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              <div className="bg-background rounded-md shadow-sm">
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">April 15, 2023 - 10:00 AM</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-background border border-muted-foreground/20 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-muted-foreground">
                      Cancel
                    </button>
                    <button className="bg-background border border-muted-foreground/20 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-muted-foreground">
                      Postpone
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-md shadow-sm">
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-sm text-muted-foreground">April 22, 2023 - 2:00 PM</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-background border border-muted-foreground/20 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-muted-foreground">
                      Cancel
                    </button>
                    <button className="bg-background border border-muted-foreground/20 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-muted-foreground">
                      Postpone
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-4">Past Sessions</h2>
            <div className="space-y-4">
              <div className="bg-background rounded-md shadow-sm">
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Dr. Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">April 1, 2023 - 3:00 PM</div>
                  </div>
                  <button className="bg-background border border-muted-foreground/20 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-muted-foreground">
                    View Details
                  </button>
                </div>
              </div>
              <div className="bg-background rounded-md shadow-sm">
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Dr. Michael Brown</div>
                    <div className="text-sm text-muted-foreground">March 15, 2023 - 11:00 AM</div>
                  </div>
                  <button className="bg-background border border-muted-foreground/20 rounded-md px-4 py-2 text-muted-foreground hover:bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-muted-foreground">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-muted text-muted-foreground py-4 px-6 flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search for a therapist..."
              className="pl-8 pr-4 py-2 rounded-md bg-muted-foreground/10 focus:outline-none focus:ring-2 focus:ring-muted-foreground w-full"
            />
          </div>
          <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground">
            Book a Session
          </button>
        </footer>
      </div>
    )
  }