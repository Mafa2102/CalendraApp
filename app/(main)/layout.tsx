import { currentUser } from "@clerk/nextjs/server"
import PrivateNavBar from "../../components/PrivateNavBar"
import PublicNavBar from "../../components/PublicNavBar"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const user = await currentUser()

  return (
<main className="relative">

    {user ? <PrivateNavBar /> : <PublicNavBar />}

    <section className="pt-36">
        {children}
    </section>

</main>
  )
}