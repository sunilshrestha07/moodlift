/**
 * v0 by Vercel.
 * @see https://v0.dev/t/12Aj3b9PdMJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="flex min-h-screen w-full justify-center bg-muted/40">
        <div className="flex max-w-7xl flex-col sm:gap-4 sm:py-4">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <div className="hidden md:flex">
              <div className="flex items-center gap-2 text-muted-foreground">
                <a href="#" className="hover:underline">
                  Dashboard
                </a>
                <span>/</span>
                <span>Live Sessions</span>
              </div>
            </div>
            <div className="relative ml-auto flex-1 md:grow-0">
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
                placeholder="Search patients..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
            <div className="relative">
              <button className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  width={36}
                  height={36}
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
              </button>
            </div>
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="grid gap-4 md:grid-cols-[1fr_300px]">
              <div className="flex flex-col w-[500px] rounded-lg bg-background shadow">
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-start">
                      <div className="font-semibold">John Doe</div>
                      <div className="flex items-center gap-2 mt-1">
                        <button className="rounded-md border bg-background px-4 py-2 hover:bg-muted">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </button>
                        <button className="rounded-md border bg-background px-4 py-2 hover:bg-muted">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-md border bg-background px-4 py-2 hover:bg-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background px-4 py-2 hover:bg-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-t p-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 rounded-md bg-background px-4 py-2"
                  />
                  <button className="rounded-md border bg-background px-4 py-2 hover:bg-muted">Send</button>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-background shadow">
                  <div className="border-b p-4">
                    <div className="font-semibold">Upcoming Appointments</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-semibold">John Doe</div>
                        <div className="text-sm text-muted-foreground">Today, 3:00 PM - 4:00 PM</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="rounded-md border bg-background px-4 py-2 hover:bg-muted">Cancel</button>
                        <button className="rounded-md border bg-background px-4 py-2 hover:bg-muted">Postpone</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-semibold">Jane Smith</div>
                        <div className="text-sm text-muted-foreground">Tomorrow, 10:00 AM - 11:00 AM</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="rounded-md border bg-background px-4 py-2 hover:bg-muted">Cancel</button>
                        <button className="rounded-md border bg-background px-4 py-2 hover:bg-muted">Postpone</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-background shadow">
                  <div className="border-b p-4">
                    <div className="font-semibold">Calendar</div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-7 gap-2 [&>div]:w-10 [&>div]:h-10 [&>div:nth-child(n+1)]:w-10 [&>div:nth-child(n+1)]:h-10">
                      <div className="flex items-center justify-center">S</div>
                      <div className="flex items-center justify-center">M</div>
                      <div className="flex items-center justify-center">T</div>
                      <div className="flex items-center justify-center">W</div>
                      <div className="flex items-center justify-center">T</div>
                      <div className="flex items-center justify-center">F</div>
                      <div className="flex items-center justify-center">S</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">1</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">2</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">3</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">4</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">5</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">6</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">7</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">8</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">9</div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        10
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        11
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        12
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        13
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        14
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        15
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        16
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        17
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        18
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        19
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        20
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        21
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        22
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        23
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        24
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        25
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        26
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        27
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        28
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        29
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        30
                      </div>
                      <div className="flex cursor-pointer items-center justify-center rounded-full hover:bg-muted">
                        31
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }