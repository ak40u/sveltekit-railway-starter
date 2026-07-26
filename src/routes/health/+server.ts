import { json } from "@sveltejs/kit"

// A route rather than a static file, so the health check exercises the running
// server rather than something a proxy could answer on its behalf.
export function GET() {
  return json({ status: "ok" })
}
