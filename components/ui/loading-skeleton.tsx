import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./skeleton";
import { Suspense } from "react";
import { Header } from "../header/header";
export default function LoadingSkeleton() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-slate-50 gap-5 p-2">
        <div>
          <h1 className="text-3xl font-bold">
            News <strong className="text-azulPrimaria">API</strong>
          </h1>
          <p className="text-slate-500"> - Busca de notícias </p>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[180px]" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
      </div>
      <section className="min-w-full min-h-screen flex flex-col justify-center items-center lg:flex-row flex-wrap lg:gap-5 mt-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="my-5 w-3/4 h-auto lg:w-1/4 hover:shadow-sm"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  <Skeleton className="h-4 w-[250px]" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-[200px]" />
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex justify-center">
                <Skeleton className="h-[250px] w-[400px]" />
              </CardContent>
              <CardContent className="flex flex-col lg:flex-row lg:gap-3">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Skeleton className="h-4 w-[200px]" />
              </CardFooter>
            </Card>
          </div>
        ))}
      </section>
    </>
  );
}
