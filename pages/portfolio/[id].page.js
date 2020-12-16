import { useRouter } from "next/router"
import { Layout } from "../../components"

export default function ClubPost(props) {
  const router = useRouter()
  const { id } = router.query

  return <Layout>{id}</Layout>
}
