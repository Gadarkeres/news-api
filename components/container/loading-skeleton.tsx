import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";
export default function LoadingSkeleton() {
  return (
    <section className="min-w-full min-h-screen flex flex-col justify-center items-center lg:flex-row flex-wrap lg:gap-5 mt-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
