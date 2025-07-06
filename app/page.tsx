import { Button } from "@/components/ui/button";
import {prisma} from "@/lib/db";


export default async function Home() {
  const users = await prisma.user.findMany();
  
  return (
    <div>
      <Button variant={"default"}>click me
      </Button>
        <h1 className="font-bold">
          {JSON.stringify(users,null,2)}
          </h1>
    </div>
  );
}
  